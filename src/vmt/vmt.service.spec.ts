import { Test, TestingModule } from '@nestjs/testing';
import { VmtService } from './vmt.service';

describe('VmtService', () => {
  let service: VmtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VmtService],
    }).compile();

    service = module.get<VmtService>(VmtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
