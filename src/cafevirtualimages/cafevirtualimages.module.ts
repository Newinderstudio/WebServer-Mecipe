import { Module } from '@nestjs/common';
import { CafevirtualimagesService } from './cafevirtualimages.service';
import { CafevirtualimagesController } from './cafevirtualimages.controller';
import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  imports: [
    PrismaService,
    ImageuploadModule
  ],
  controllers: [CafevirtualimagesController],
  providers: [CafevirtualimagesService]
})
export class CafevirtualimagesModule { }
