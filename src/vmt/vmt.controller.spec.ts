import { Test, TestingModule } from '@nestjs/testing';
import { VmtController } from './vmt.controller';
import { VmtService } from './vmt.service';

describe('VmtController', () => {
  let controller: VmtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VmtController],
      providers: [VmtService],
    }).compile();

    controller = module.get<VmtController>(VmtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
