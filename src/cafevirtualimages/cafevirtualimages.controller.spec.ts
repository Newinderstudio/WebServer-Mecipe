import { Test, TestingModule } from '@nestjs/testing';
import { CafevirtualimagesController } from './cafevirtualimages.controller';
import { CafevirtualimagesService } from './cafevirtualimages.service';

describe('CafevirtualimagesController', () => {
  let controller: CafevirtualimagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CafevirtualimagesController],
      providers: [CafevirtualimagesService],
    }).compile();

    controller = module.get<CafevirtualimagesController>(CafevirtualimagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
