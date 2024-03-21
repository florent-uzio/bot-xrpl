import { Module } from '@nestjs/common';
import { VmtService } from './vmt.service';
import { VmtController } from './vmt.controller';
import { XrplModule } from '../xrpl/xrpl.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [XrplModule, PrismaModule],
  controllers: [VmtController],
  providers: [VmtService],
})
export class VmtModule {}
