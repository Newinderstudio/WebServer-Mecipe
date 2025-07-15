import { Test, TestingModule } from '@nestjs/testing';
import { CaferealimagesService } from './caferealimages.service';

describe('CaferealimagesService', () => {
  let service: CaferealimagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaferealimagesService],
    }).compile();

    service = module.get<CaferealimagesService>(CaferealimagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
