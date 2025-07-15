import { Module } from '@nestjs/common';
import { CaferealimagesService } from './caferealimages.service';
import { CaferealimagesController } from './caferealimages.controller';
import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  imports: [
    PrismaService,
    ImageuploadModule
  ],
  controllers: [CaferealimagesController],
  providers: [CaferealimagesService]
})
export class CaferealimagesModule { }
