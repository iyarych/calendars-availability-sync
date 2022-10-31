import { Injectable } from '@nestjs/common';
import { readdir } from 'node:fs/promises';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileProcessorService {
  constructor(private configService: ConfigService) {}

  async getFiles() {
    const files = (
      await readdir(
        this.configService.getOrThrow<string>('INCOMING_FILES_PATH'),
        {
          withFileTypes: true,
        },
      )
    ).map((dirent) => dirent.name);

    return files;
  }
}
