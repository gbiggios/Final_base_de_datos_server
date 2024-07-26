import { Test, TestingModule } from '@nestjs/testing';
import { RepertorioService } from './repertorios.service';

describe('RepertoriosService', () => {
  let service: RepertorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepertorioService],
    }).compile();

    service = module.get<RepertorioService>(RepertorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
