import { Test, TestingModule } from '@nestjs/testing';
import { MetaVeiwersService } from './meta-veiwers.service';

describe('MetaVeiwersService', () => {
  let service: MetaVeiwersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaVeiwersService],
    }).compile();

    service = module.get<MetaVeiwersService>(MetaVeiwersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
