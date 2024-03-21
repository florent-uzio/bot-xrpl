import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { XrplModule } from './xrpl/xrpl.module';

@Module({
  imports: [XrplModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
