import { Test, TestingModule } from '@nestjs/testing';
import { RawimageuploadService } from './rawimageupload.service';

describe('RawimageuploadService', () => {
  let service: RawimageuploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RawimageuploadService],
    }).compile();

    service = module.get<RawimageuploadService>(RawimageuploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
