import { Module } from '@nestjs/common';
import { CaferealimagesService } from './caferealimages.service';
import { CaferealimagesController } from './caferealimages.controller';
// import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';
import { RawimageuploadModule } from 'src/rawimageupload/rawimageupload.module';

@Module({
  imports: [
    PrismaService,
    RawimageuploadModule
  ],
  controllers: [CaferealimagesController],
  providers: [CaferealimagesService]
})
export class CaferealimagesModule { }
