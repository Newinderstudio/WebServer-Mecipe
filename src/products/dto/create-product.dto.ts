import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { Prisma } from "prisma/basic";

export class CreateProductDto implements Partial<Prisma.ProductCreateInput> {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @Optional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @Optional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsNumber()
  stockQuantity?: number;

  @IsOptional()
  @IsNumber()
  minOrderQuantity?: number;

  @IsOptional()
  @IsBoolean()
  isDisable?: boolean;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  cafeInfoId: number;

  @IsOptional()
  @IsArray()
  productImages?: CreateProductImageDto[];

}

export class CreateProductImageDto implements Partial<Prisma.ProductImageCreateInput> {
  @IsString()
  url: string;

  @IsString()
  thumbnailUrl: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  width: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  height: number;

  @IsOptional()
  @IsBoolean()
  isThumb?: boolean;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  size: number;
}