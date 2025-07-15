import { Test, TestingModule } from '@nestjs/testing';
import { CafevirtualimagesService } from './cafevirtualimages.service';

describe('CafevirtualimagesService', () => {
  let service: CafevirtualimagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafevirtualimagesService],
    }).compile();

    service = module.get<CafevirtualimagesService>(CafevirtualimagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
