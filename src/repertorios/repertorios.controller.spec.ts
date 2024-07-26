import { Test, TestingModule } from '@nestjs/testing';
import { RepertoriosController } from './repertorios.controller';

describe('RepertoriosController', () => {
  let controller: RepertoriosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepertoriosController],
    }).compile();

    controller = module.get<RepertoriosController>(RepertoriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
