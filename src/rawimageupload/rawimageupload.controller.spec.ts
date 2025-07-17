import { Test, TestingModule } from '@nestjs/testing';
import { RawimageuploadController } from './rawimageupload.controller';
import { RawimageuploadService } from './rawimageupload.service';

describe('RawimageuploadController', () => {
  let controller: RawimageuploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawimageuploadController],
      providers: [RawimageuploadService],
    }).compile();

    controller = module.get<RawimageuploadController>(RawimageuploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
