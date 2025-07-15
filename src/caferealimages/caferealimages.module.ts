import { Module } from '@nestjs/common';
import { CaferealimagesService } from './caferealimages.service';
import { CaferealimagesController } from './caferealimages.controller';

@Module({
  controllers: [CaferealimagesController],
  providers: [CaferealimagesService]
})
export class CaferealimagesModule {}
