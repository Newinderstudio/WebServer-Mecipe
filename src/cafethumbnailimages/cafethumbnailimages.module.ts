import { Module } from '@nestjs/common';
import { CafethumbnailimagesService } from './cafethumbnailimages.service';
import { CafethumbnailimagesController } from './cafethumbnailimages.controller';

@Module({
  controllers: [CafethumbnailimagesController],
  providers: [CafethumbnailimagesService]
})
export class CafethumbnailimagesModule {}
