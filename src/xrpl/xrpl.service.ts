import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client } from 'xrpl';

const XRPL_LABS_TESTNET = 'wss://testnet.xrpl-labs.com/';

@Injectable()
export class XrplService extends Client implements OnModuleInit {
  private readonly logger = new Logger(XrplService.name);

  constructor() {
    super(XRPL_LABS_TESTNET);
  }

  async onModuleInit() {
    await this.connect();

    if (this.isConnected()) {
      this.logger.log(`XRPL Service connected to ${this.url}`);
    } else {
      const errorMessage = `XRPL Service could not connect to ${this.url}`;
      throw new Error(errorMessage);
    }
  }
}
