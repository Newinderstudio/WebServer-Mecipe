import { Module } from '@nestjs/common';
import { CafevirtualimagesService } from './cafevirtualimages.service';
import { CafevirtualimagesController } from './cafevirtualimages.controller';

@Module({
  controllers: [CafevirtualimagesController],
  providers: [CafevirtualimagesService]
})
export class CafevirtualimagesModule {}
