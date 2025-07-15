import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { UpsertCafethumbnailimageListDto } from './dto/upsert-cafethumbnailimage.dto';
import { ImageuploadService } from 'src/imageupload/imageupload.service';
import { CafeThumbnailImage } from 'prisma/basic';

@Injectable()
export class CafethumbnailimagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageuploadService: ImageuploadService
  ) { }

  findAllCafeThumbnailImagesByAdmin() {
    return this.prisma.cafeThumbnailImage.findMany();
  }

  uploadCafeThumnailImagesByAdmin(
    cafeId: number,
    upsertDto: UpsertCafethumbnailimageListDto
  ) {
    if(upsertDto.create.some(dto=>dto.cafeInfoId !== cafeId)) new ForbiddenException("Error: Wrong CafeInfoId: " + cafeId);

    return this.prisma.$transaction(async (tx) => {
      const createDto = upsertDto.create;
      const updateDto = upsertDto.update;

      let createdList: CafeThumbnailImage[] = [];
      let updatedList: CafeThumbnailImage[] = [];

      for (let i = 0; i < createDto.length; i++) {
        const imageId = createDto[i].url.substring(createDto[i].url.lastIndexOf('/') + 1);
        const valid = await this.imageuploadService.checkUploadURL(imageId);

        if (!valid) throw new ForbiddenException("Error: Invalid Image: " + createDto[i].url);

        const created = await tx.cafeThumbnailImage.create({
          data: {
            ...createDto[i]
          }
        });

        if (!created) throw new ForbiddenException(`Error: Create Image(${i})`)
        createdList.push(created);
      }

      for (let i = 0; i < updateDto.length; i++) {
        // forbid access url
        const { url, ...rest } = updateDto[i];
        const updated = await tx.cafeThumbnailImage.update({
          where: { id: updateDto[i].id },
          data: {
            ...rest
          }
        });
        if (!updated) throw new ForbiddenException(`Error: Update Image(${updateDto[i].id}:${i})`);

        updatedList.push(updated);
      }

      return [...createdList, ...updatedList]
    });
  }
}
