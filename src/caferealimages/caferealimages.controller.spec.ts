import { Test, TestingModule } from '@nestjs/testing';
import { CaferealimagesController } from './caferealimages.controller';
import { CaferealimagesService } from './caferealimages.service';

describe('CaferealimagesController', () => {
  let controller: CaferealimagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaferealimagesController],
      providers: [CaferealimagesService],
    }).compile();

    controller = module.get<CaferealimagesController>(CaferealimagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
