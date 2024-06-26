import { Module } from '@nestjs/common';
import { XrplService } from './xrpl.service';
import { XrplController } from './xrpl.controller';

@Module({
  controllers: [XrplController],
  providers: [XrplService],
  exports: [XrplService],
})
export class XrplModule {}
