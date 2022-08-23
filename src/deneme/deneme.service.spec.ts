import { Test, TestingModule } from '@nestjs/testing';
import { DenemeService } from './deneme.service';

describe('DenemeService', () => {
  let service: DenemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DenemeService],
    }).compile();

    service = module.get<DenemeService>(DenemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
