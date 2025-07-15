import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { ImageuploadService } from 'src/imageupload/imageupload.service';
import { UpsertCafeRealImageListDto } from './dto/upsert-caferealimage.dto';
import { CafeVirtualImage } from 'prisma/basic';

@Injectable()
export class CaferealimagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageuploadService: ImageuploadService
  ) { }

  findAllCafeVirtualImagesByAdmin() {
    return this.prisma.cafeRealImage.findMany({
      orderBy: {
        priority: 'asc',
        id: 'desc'
      }
    });
  }

  uploadCafeVirtualImagesByAdmin(
    cafeId: number,
    upsertDto: UpsertCafeRealImageListDto
  ) {
    if (upsertDto.create.some(dto => dto.cafeInfoId !== cafeId)) new ForbiddenException("Error: Wrong CafeInfoId: " + cafeId);

    return this.prisma.$transaction(async (tx) => {
      const createDto = upsertDto.create;
      const updateDto = upsertDto.update;

      let createdList: CafeVirtualImage[] = [];
      let updatedList: CafeVirtualImage[] = [];

      for (let i = 0; i < createDto.length; i++) {
        const valid = this.imageuploadService.validUploadUrl(createDto[i].url);

        if (!valid) throw new ForbiddenException("Error: Invalid Image: " + createDto[i].url);

        const created = await tx.cafeRealImage.create({
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
        const updated = await tx.cafeRealImage.update({
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
