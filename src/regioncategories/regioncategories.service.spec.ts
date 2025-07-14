import { Test, TestingModule } from '@nestjs/testing';
import { RegioncategoriesService } from './regioncategories.service';

describe('RegioncategoriesService', () => {
  let service: RegioncategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegioncategoriesService],
    }).compile();

    service = module.get<RegioncategoriesService>(RegioncategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
