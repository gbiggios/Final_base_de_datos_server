import { Test, TestingModule } from '@nestjs/testing';
import { EnsayosService } from './ensayos.service';

describe('EnsayosService', () => {
  let service: EnsayosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnsayosService],
    }).compile();

    service = module.get<EnsayosService>(EnsayosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
