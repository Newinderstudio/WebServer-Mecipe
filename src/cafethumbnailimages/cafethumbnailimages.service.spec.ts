import { Test, TestingModule } from '@nestjs/testing';
import { CafethumbnailimagesService } from './cafethumbnailimages.service';

describe('CafethumnailimagesService', () => {
  let service: CafethumbnailimagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafethumbnailimagesService],
    }).compile();

    service = module.get<CafethumbnailimagesService>(CafethumbnailimagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
