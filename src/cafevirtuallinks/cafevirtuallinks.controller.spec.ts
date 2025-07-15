import { Test, TestingModule } from '@nestjs/testing';
import { CafevirtuallinksController } from './cafevirtuallinks.controller';
import { CafevirtuallinksService } from './cafevirtuallinks.service';

describe('CafevirtuallinksController', () => {
  let controller: CafevirtuallinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CafevirtuallinksController],
      providers: [CafevirtuallinksService],
    }).compile();

    controller = module.get<CafevirtuallinksController>(CafevirtuallinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
