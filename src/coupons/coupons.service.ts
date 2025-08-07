import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCouponDataDto, CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { PrismaService } from 'src/global/prisma.service';
import { verifySignedMessage } from 'src/util/sha256';
import { ProxyUserType } from 'prisma/basic';

@Injectable()
export class CouponsService {

  constructor(private readonly prisma: PrismaService) {}
  
  /**
   * 16자리 시리얼 넘버를 생성하는 함수
   * 데이터베이스 제약조건을 활용하여 효율적으로 유일성 보장
   */
  private generateSerialNumber(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from(
      { length: 16 }, 
      () => characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
  }

  async createCoupon(payload:string, encryptedPayload:string) {

    const secret = process.env.COUPON_SECRET;
    // 접근 인증 우선
    if(!verifySignedMessage({ payload: payload, signature: encryptedPayload }, secret)) {
      throw new UnauthorizedException('Invalid signature');
    }

    const { name, content, startDay, endDay, groupCode, memberId, userType } = JSON.parse(payload);

    if(!name || !content || !startDay || !endDay || !groupCode || !memberId || !userType) {
      throw new BadRequestException('Invalid payload'); 
    }

    const group = await this.prisma.cafeCouponGroup.findUnique({
      where: {
        code: groupCode
      }
    });
    
    if(!group) {
      throw new BadRequestException('Invalid groupCode'); 
    }

    if(!Object.values(ProxyUserType).includes(userType as ProxyUserType)) {
      throw new BadRequestException('Invalid userType'); 
    }

    let user = await this.prisma.proxyUser.findUnique({
      where: {
        proxyUserUnique: {
          memberId: memberId,
          proxyUserType: userType as ProxyUserType
        }
      }
    });

    if(!user) {
      // 존재하지 않으면 생성
      user = await this.prisma.proxyUser.create({
        data: {
          name: memberId,
          token: memberId,
          memberId,
          proxyUserType: userType as ProxyUserType
        }
      });
    }

    // 16자리 시리얼 넘버 생성 (최대 10번 시도)
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      const serialNumber = this.generateSerialNumber();
      
      try {
        return await this.prisma.cafeCoupon.create({  
          data: {
            name: name ?? group.name,
            content: content ?? group.description,
            serialNumber,
            startDay,
            endDay: endDay ?? group.endDay,
            ProxyUser: {
              connect: {
                id: user.id
              }
            },
            CafeCouponGroup: {
              connect: {
                id: group.id
              }
            }
          }
        });
      } catch (error) {
        // unique constraint violation이면 다시 시도
        if (error.code === 'P2002' && error.meta?.target?.includes('serialNumber')) {
          attempts++;
          if (attempts >= maxAttempts) {
            throw new Error('Failed to generate unique serial number after maximum attempts');
          }
          continue;
        }
        throw error;
      }
    }
    
    throw new Error('Failed to generate unique serial number after maximum attempts');
  }

  findCoupon(id: number) {
    return this.prisma.cafeCoupon.findUnique({
      where: {
        id: id
      }
    })
  }

  findByCouponByGroupCodeWithUserId(payload:string, encryptedPayload:string) {

    if(!verifySignedMessage({ payload, signature: encryptedPayload }, process.env.COUPON_SECRET)) {
      throw new UnauthorizedException('Invalid signature');
    }

    const { couponGroupCode, memberId, userType } = JSON.parse(payload);

    if(!couponGroupCode || !memberId || !userType) {
      throw new BadRequestException('Invalid payload'); 
    }

    if(!Object.values(ProxyUserType).includes(userType as ProxyUserType)) {
      throw new BadRequestException('Invalid userType'); 
    }

    return this.prisma.cafeCoupon.findMany({
      where: {
        ProxyUser:{
          memberId,
          proxyUserType: userType as ProxyUserType
        },
        CafeCouponGroup:{
          code: couponGroupCode
        }
      }
    })
  }

}


