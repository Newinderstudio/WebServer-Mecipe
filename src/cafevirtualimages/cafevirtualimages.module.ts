import { Module } from '@nestjs/common';
import { CafevirtualimagesService } from './cafevirtualimages.service';
import { CafevirtualimagesController } from './cafevirtualimages.controller';
// import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';
import { RawimageuploadModule } from 'src/rawimageupload/rawimageupload.module';

@Module({
  imports: [
    PrismaService,
    RawimageuploadModule
  ],
  controllers: [CafevirtualimagesController],
  providers: [CafevirtualimagesService]
})
export class CafevirtualimagesModule { }
