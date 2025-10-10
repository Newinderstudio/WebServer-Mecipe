import { Test, TestingModule } from '@nestjs/testing';
import { MetaViewerInfosService } from './meta-viewer-infos.service';

describe('MetaViewerInfosService', () => {
  let service: MetaViewerInfosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaViewerInfosService],
    }).compile();

    service = module.get<MetaViewerInfosService>(MetaViewerInfosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
