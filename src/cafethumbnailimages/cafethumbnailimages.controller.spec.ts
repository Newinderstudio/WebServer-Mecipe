import { Test, TestingModule } from '@nestjs/testing';
import { CafethumbnailimagesController } from './cafethumbnailimages.controller';
import { CafethumbnailimagesService } from './cafethumbnailimages.service';

describe('CafethumnailimagesController', () => {
  let controller: CafethumbnailimagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CafethumbnailimagesController],
      providers: [CafethumbnailimagesService],
    }).compile();

    controller = module.get<CafethumbnailimagesController>(CafethumbnailimagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
