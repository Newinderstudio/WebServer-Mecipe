import { Test, TestingModule } from '@nestjs/testing';
import { MetaVeiwersGateway } from './meta-veiwers.gateway';
import { MetaVeiwersService } from './meta-veiwers.service';

describe('MetaVeiwersGateway', () => {
  let gateway: MetaVeiwersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaVeiwersGateway, MetaVeiwersService],
    }).compile();

    gateway = module.get<MetaVeiwersGateway>(MetaVeiwersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
