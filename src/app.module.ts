import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { XrplModule } from './xrpl/xrpl.module';
import { VmtModule } from './vmt/vmt.module';

@Module({
  imports: [XrplModule, VmtModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
