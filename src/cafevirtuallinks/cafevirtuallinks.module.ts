import { Module } from '@nestjs/common';
import { CafevirtuallinksService } from './cafevirtuallinks.service';
import { CafevirtuallinksController } from './cafevirtuallinks.controller';

@Module({
  controllers: [CafevirtuallinksController],
  providers: [CafevirtuallinksService]
})
export class CafevirtuallinksModule {}
