import { Test, TestingModule } from '@nestjs/testing';
import { EnsayosController } from './ensayos.controller';

describe('EnsayosController', () => {
  let controller: EnsayosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnsayosController],
    }).compile();

    controller = module.get<EnsayosController>(EnsayosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
