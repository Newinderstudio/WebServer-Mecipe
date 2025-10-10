import { Module } from '@nestjs/common';
import { MetaViewerInfosService } from './meta-viewer-infos.service';
import { MetaViewerInfosController } from './meta-viewer-infos.controller';

@Module({
  controllers: [MetaViewerInfosController],
  providers: [MetaViewerInfosService]
})
export class MetaViewerInfosModule {}
