import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaViewerInfoDto } from './create-meta-viewer-info.dto';

export class UpdateMetaViewerInfoDto extends PartialType(CreateMetaViewerInfoDto) {}
