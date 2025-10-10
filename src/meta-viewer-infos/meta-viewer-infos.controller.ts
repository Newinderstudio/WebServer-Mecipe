import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaViewerInfosService } from './meta-viewer-infos.service';
import { CreateMetaViewerInfoDto } from './dto/create-meta-viewer-info.dto';
import { UpdateMetaViewerInfoDto } from './dto/update-meta-viewer-info.dto';

@Controller('meta-viewer-infos')
export class MetaViewerInfosController {
  constructor(private readonly metaViewerInfosService: MetaViewerInfosService) {}

  @Post()
  create(@Body() createMetaViewerInfoDto: CreateMetaViewerInfoDto) {
    return this.metaViewerInfosService.create(createMetaViewerInfoDto);
  }

  @Get()
  findAll() {
    return this.metaViewerInfosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaViewerInfosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetaViewerInfoDto: UpdateMetaViewerInfoDto) {
    return this.metaViewerInfosService.update(+id, updateMetaViewerInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaViewerInfosService.remove(+id);
  }
}
