import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { XrplService } from '../xrpl/xrpl.service';
import { PrismaService } from '../prisma/prisma.service';

// To change if needed
const sourceTag = 74920348;

@Injectable()
export class VmtService implements OnModuleInit {
  private logger: Logger = new Logger(VmtService.name);

  constructor(
    private readonly xrplService: XrplService,
    private readonly prismaService: PrismaService,
  ) {}

  async onModuleInit() {
    if (!this.xrplService.isConnected()) {
      return;
    }

    // Subscribe to wallet which will receive XRP from clients
    await this.xrplService.request({
      command: 'subscribe',
      streams: ['transactions'],
    });

    this.xrplService.on('transaction', async (event) => {
      // Apply your own logic here
      if (event.transaction.SourceTag === sourceTag) {
        const txnHash = event.transaction.hash;

        // Simply recording the XRPL transaction hashes in the DB
        try {
          await this.prismaService.xrplTxn.create({
            data: { hash: txnHash },
          });

          this.logger.log(
            `Transaction with source tag ${sourceTag} and hash ${txnHash} detected and saved in DB`,
          );
        } catch (error) {
          throw new Error(error);
        }
      }
    });
  }

  async getTxnHashes() {
    return this.prismaService.xrplTxn.findMany();
  }
}
