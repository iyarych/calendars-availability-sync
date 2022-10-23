import { Controller, Get } from '@nestjs/common';
import { FileProcessorService } from './file-processor.service';

@Controller('file-processor')
export class FileProcessorController {
  constructor(private fileProcessorService: FileProcessorService) {}

  @Get()
  async getFiles() {
    return this.fileProcessorService.getFiles();
  }
}
