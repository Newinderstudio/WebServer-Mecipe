import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateCafeInfoDto } from './dto/create-place.dto';
import { UpdateCafeInoDto } from './dto/update-place.dto';
import { PrismaService } from 'src/global/prisma.service';
import { Prisma } from 'prisma/basic';

@Injectable()
export class PlacesService {

  constructor(
    private prisma: PrismaService

  ) { }

  /* s:admin */

  async createPlaceByAdmin(createPlaceDto: CreateCafeInfoDto, regionCategoryId: number) {

    const category = await this.prisma.regionCategory.findUnique({ where: { id: regionCategoryId } });

    if (!category) throw new ForbiddenException('지역 카테고리 오류');

    return this.prisma.cafeInfo.create({
      data: {
        ...createPlaceDto,
        regionCategoryId
      },
    });
  }

  updatePlaceByAdmin(id: number, updatePlaceDto: UpdateCafeInoDto) {
    return this.prisma.cafeInfo.update({
      where: {
        id,
      },
      data: updatePlaceDto,
    });
  }

  async findAllPlacesByAdmin(
    skip: number,
    take: number,
    searchType: string,
    searchText: string,
    regionCategoryId?: number,
    isDisable = false,
  ) {
    let where: Prisma.CafeInfoWhereInput = {};

    if (searchType === '이름') {
      where.name = { contains: searchText };
    } else if (searchType === '주소') {
      where.address = { contains: searchText };
    } else if (searchType === '사업자번호') {
      where.businessNumber = { contains: searchText };
    } else if (searchType === '사업자명') {
      where.ceoName = { contains: searchText };
    }

    if (regionCategoryId) {
      where.regionCategoryId = {
        in: await this.getDescendantCategoryIds(regionCategoryId)
      }
    }

    where.isDisable = isDisable;

    const count = await this.prisma.cafeInfo.count({
      where: {
        ...where,
      },
    });
    const result =
      count > 0
        ? await this.prisma.cafeInfo.findMany({
          where: where,
          skip: (skip - 1) * take,
          take: take,
          orderBy: {
            id: 'desc',
          },
          include: {
            RegionCategory: true
          }
        })
        : [];

    return { count: count, data: result };
  }

  findPlaceByAdmin(id: number) {
    return this.prisma.cafeInfo.findUnique({
      where: {
        id,
      },
      include: {
        CafeVirtualLinks: {
          include: {
            CafeVirtualLinkThumbnailImage: true
          }
        },
        CafeVirtualImages: true,
        CafeRealImages: true,
        CafeThumbnailImages: true
      }
    });
  }


  disablePlaceByAdmin(id: number, isDisable:boolean) {
    return this.prisma.cafeInfo.update({
      where: {
        id,
      },
      data:{
        isDisable
      }
    });
  }

  /* e:admin */

  async getDescendantCategoryIds(cafegoryId: number): Promise<number[]> {
    const descendatns = await this.prisma.closureRegionCategory.findMany({
      where: {
        ancestor: cafegoryId
      },
      select: {
        descendant: true,
        depth: true
      },
      orderBy: {
        depth: 'desc'
      }
    });

    return descendatns.map(rel => rel.descendant)
  }
  async getAncestorCategoryIds(cafegoryId: number): Promise<number[]> {
    const ancestor = await this.prisma.closureRegionCategory.findMany({
      where: {
        descendant: cafegoryId
      },
      select: {
        ancestor: true,
        depth: true
      },
      orderBy: {
        depth: 'desc'
      }
    });

    return ancestor.map(rel => rel.ancestor)
  }

  async findAllPlacesBySearch(
    skip: number,
    take: number,
    searchText: string,
    regionCategoryId?: number,
  ) {
    let where: Prisma.CafeInfoWhereInput = {};

    if (regionCategoryId) {
      where.regionCategoryId = {
        in: await this.getDescendantCategoryIds(regionCategoryId)
      }
    }

    if (searchText.trim().length > 0) where.name = { contains: searchText };

    const count = await this.prisma.cafeInfo.count({
      where: {
        ...where,
      },
    });
    const result =
      count > 0
        ? await this.prisma.cafeInfo.findMany({
          where: where,
          skip: skip,
          take: take,
          orderBy: {
            id: 'desc',
          },
          include: {
            CafeVirtualImages: {
              where: {
                isDisable: false
              }
            }
          }
        })
        : [];

    return { count: count, data: result };
  }

  findOnePlace(id: number) {
    return this.prisma.cafeInfo.findFirst({
      where: {
        id: id,
        isDisable: false
      },
      include: {
        CafeVirtualImages: true,
        CafeRealImages: true,
        CafeVirtualLinks: {
          include: {
            CafeVirtualLinkThumbnailImage: true
          }
        },
        CafeThumbnailImages: true
      }
    })
  }

}
