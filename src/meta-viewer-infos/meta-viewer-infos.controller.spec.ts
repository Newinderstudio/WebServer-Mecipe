import { Test, TestingModule } from '@nestjs/testing';
import { MetaViewerInfosController } from './meta-viewer-infos.controller';
import { MetaViewerInfosService } from './meta-viewer-infos.service';

describe('MetaViewerInfosController', () => {
  let controller: MetaViewerInfosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaViewerInfosController],
      providers: [MetaViewerInfosService],
    }).compile();

    controller = module.get<MetaViewerInfosController>(MetaViewerInfosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
