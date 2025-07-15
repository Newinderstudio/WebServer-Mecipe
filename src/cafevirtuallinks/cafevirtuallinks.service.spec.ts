import { Test, TestingModule } from '@nestjs/testing';
import { CafevirtuallinksService } from './cafevirtuallinks.service';

describe('CafevirtuallinksService', () => {
  let service: CafevirtuallinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafevirtuallinksService],
    }).compile();

    service = module.get<CafevirtuallinksService>(CafevirtuallinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
