import { Test, TestingModule } from '@nestjs/testing';
import { RegioncategoriesController } from './regioncategories.controller';
import { RegioncategoriesService } from './regioncategories.service';

describe('RegioncategoriesController', () => {
  let controller: RegioncategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegioncategoriesController],
      providers: [RegioncategoriesService],
    }).compile();

    controller = module.get<RegioncategoriesController>(RegioncategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
