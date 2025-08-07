import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDataDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Public } from 'src/util/decorators';

@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Public()
  @Post('create-coupon')
  createCoupon(@Body() body: {
    payload: string,
    encryptedPayload: string
  }) {
    return this.couponsService.createCoupon(body.payload, body.encryptedPayload);
  }

  @Public()
  @Post('find/group-code/user-id')
  findByCouponByGroupCodeWithUserId(
    @Body() body: {
      payload: string,
      encryptedPayload: string
    }
  ) {
    return this.couponsService.findByCouponByGroupCodeWithUserId(body.payload, body.encryptedPayload);
  }
}
