import { Test, TestingModule } from '@nestjs/testing';
import { DenemeController } from './deneme.controller';
import { DenemeService } from './deneme.service';

describe('DenemeController', () => {
  let controller: DenemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DenemeController],
      providers: [DenemeService],
    }).compile();

    controller = module.get<DenemeController>(DenemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
