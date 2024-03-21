import { Controller, Get } from '@nestjs/common';
import { VmtService } from './vmt.service';

@Controller('vmt')
export class VmtController {
  constructor(private readonly vmtService: VmtService) {}

  /**
   * Gets all the transaction hashes recorded in the DB
   * @returns an array of XRPL transaction hashes
   */
  @Get('hashes')
  async getTxnHashes() {
    return await this.vmtService.getTxnHashes();
  }
}
