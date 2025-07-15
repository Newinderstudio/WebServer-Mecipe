import { Module } from '@nestjs/common';
import { CafevirtuallinksService } from './cafevirtuallinks.service';
import { CafevirtuallinksController } from './cafevirtuallinks.controller';
import { ImageuploadModule } from 'src/imageupload/imageupload.module';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  imports: [
    PrismaService,
    ImageuploadModule
  ],
  controllers: [CafevirtuallinksController],
  providers: [CafevirtuallinksService]
})
export class CafevirtuallinksModule { }
