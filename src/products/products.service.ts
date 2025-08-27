import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/global/prisma.service';
import { SearchProductDto } from './dto/search-product.dto';
import { Prisma } from 'prisma/basic';

@Injectable()
export class ProductsService {

  constructor(private readonly prisma: PrismaService) { }

  async createProduct(createProductDto: CreateProductDto) {

    const { productImages, cafeInfoId, categoryId, ...productData } = createProductDto;

    const cafeInfo = await this.prisma.cafeInfo.findUnique({
      where: { id: cafeInfoId }
    });

    if (!cafeInfo) {
      throw new NotFoundException('CafeInfo not found');
    }

    const category = await this.prisma.productCategory.findUnique({
      where: { id: categoryId }
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          ...productData,
          ProductCategory: {
            connect: { id: categoryId }
          },
          CafeInfo: {
            connect: { id: cafeInfoId }
          }
        }
      });

      if (productImages && productImages.length > 0) {

        await tx.productImage.createMany({
          data: productImages.map(image => ({
            ...image,
            productId: product.id
          }))
        });
      }

      const createdProduct = await tx.product.findUnique({
        where: { id: product.id },
        include: {
          ProductImages: true
        }
      })
      return createdProduct;
    });
  }

  async findAllProductsBySearch(searchDto: SearchProductDto, isAdmin: boolean = false) {
    const { page = 1, limit = 10, ...searchParams } = searchDto;
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {};

    if (searchParams.cafeInfoId) {
      where.cafeInfoId = searchParams.cafeInfoId;
    }

    if (searchParams.categoryId) {
      where.categoryId = {
        in: await this.getDescendantCategoryIds(searchParams.categoryId)
      }
    }

    if (searchParams.searchText) {
      switch (searchParams.searchType) {
        case 'name':
          where.name = { contains: searchParams.searchText, mode: 'insensitive' };
          break;
        case 'code':
          where.code = { contains: searchParams.searchText, mode: 'insensitive' };
          break;
        default:
          where.name = { contains: searchParams.searchText, mode: 'insensitive' };
      }
    }

    if (!isAdmin) {
      where.isDisable = false;
    } else {
      where.isDisable = searchParams.isDisable?? false;
    }

    const total = await this.prisma.product.count({ where });

    const products = total > 0 ? await this.prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        ProductImages: true,
        ProductCategory: true,
      }
    }) : [];

    return {
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }
    };
  }

  async getDescendantCategoryIds(categoryId: number): Promise<number[]> {
    const descendatns = await this.prisma.closureRegionCategory.findMany({
      where: {
        ancestor: categoryId
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

  findOne(id: number, isAdmin: boolean = false) {
    const where: Prisma.ProductWhereInput = { id };

    if (!isAdmin) {
      where.isDisable = false;
    }

    return this.prisma.product.findFirst({
      where,
      include: {
        ProductImages: true,
        CafeInfo: true,
        ProductCategory: true,
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto, isAdmin: boolean = false) {
    const product = await this.findOne(id, isAdmin);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const { productImages, disabledImageIds, isThumbImageId, ...productData } = updateProductDto;

    return this.prisma.$transaction(async (tx) => {
      // Board 수정
      await tx.product.update({
        where: { id },
        data: {
          ...productData,
        }
      });

      if (disabledImageIds !== undefined) {
        await tx.productImage.updateMany({
          where: { id: { in: disabledImageIds } },
          data: { isDisable: true },
        });
      }

      // BoardImage 업데이트
      if (productImages !== undefined) {

        // 새로운 BoardImage들 생성
        if (productImages && productImages.length > 0) {
          await tx.productImage.createMany({
            data: productImages.map((image) => ({
              ...image,
              productId: id,
              isThumb: image.isThumb ?? false,
            })),
          });
        }

        if (productImages.some(image => image.isThumb)) {
          await tx.productImage.updateMany({
            where: { productId: id, isThumb: true },
            data: { isThumb: false },
          });
        }
      }

      if (isThumbImageId) {

        const tagetImage = await tx.productImage.findFirst({
          where: { id: isThumbImageId, productId: id },
        });

        if (tagetImage) {
          await tx.productImage.updateMany({
            where: { productId: id, isThumb: true },
            data: { isThumb: false },
          });
          await tx.productImage.update({
            where: { id: tagetImage.id },
            data: { isThumb: true },
          });
        }
      }

      const updatedProduct = await tx.product.findUnique({
        where: { id },
        include: {
          ProductImages: true,
          CafeInfo: true,
          ProductCategory: true,
        }
      })

      return updatedProduct;
    });
  }

  async remove(id: number, isAdmin: boolean = false) {
    const product = await this.findOne(id, isAdmin);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.productImage.deleteMany({
        where: { productId: id },
      });
      await tx.product.delete({
        where: { id },
      });

      return { message: 'Product deleted successfully' };
    });
  }

  findByCafeInfo(cafeInfoId: number, isAdmin: boolean = false) {
    return this.findAllProductsBySearch({
      cafeInfoId,
    },isAdmin);
  }

  async findDuplicateProductCode(code: string) {
    const count = await this.prisma.product.count({
      where: {
        code: code
      }
    });

    return count > 0;
  }
}
