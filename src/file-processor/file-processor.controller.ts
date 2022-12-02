import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileProcessorService } from './file-processor.service';
import { ProcessFilesDto } from './dto/process-files.dto';

@Controller('file-processor')
export class FileProcessorController {
  constructor(private fileProcessorService: FileProcessorService) {}

  @Get()
  async getFiles() {
    return this.fileProcessorService.getFiles();
  }

  @Post('process-files')
  async processFiles(@Body() processFilesDto: ProcessFilesDto) {
    return this.fileProcessorService.processFiles(processFilesDto.files);
  }
}
