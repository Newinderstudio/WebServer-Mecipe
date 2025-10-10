import { Injectable } from '@nestjs/common';
import { CreateMetaViewerInfoDto } from './dto/create-meta-viewer-info.dto';
import { UpdateMetaViewerInfoDto } from './dto/update-meta-viewer-info.dto';

@Injectable()
export class MetaViewerInfosService {
  create(createMetaViewerInfoDto: CreateMetaViewerInfoDto) {
    return 'This action adds a new metaViewerInfo';
  }

  findAll() {
    return `This action returns all metaViewerInfos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metaViewerInfo`;
  }

  update(id: number, updateMetaViewerInfoDto: UpdateMetaViewerInfoDto) {
    return `This action updates a #${id} metaViewerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} metaViewerInfo`;
  }
}
