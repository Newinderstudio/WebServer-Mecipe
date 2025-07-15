import { Module } from '@nestjs/common';
import { CafethumbnailimagesService } from './cafethumbnailimages.service';
import { CafethumbnailimagesController } from './cafethumbnailimages.controller';
import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  imports: [
    PrismaService,
    ImageuploadModule
  ],
  controllers: [CafethumbnailimagesController],
  providers: [CafethumbnailimagesService]
})
export class CafethumbnailimagesModule { }
