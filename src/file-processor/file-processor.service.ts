import { Injectable } from '@nestjs/common';
import { readdir } from 'node:fs/promises';
import { ConfigService } from '@nestjs/config';
import { async as icalAsync } from 'node-ical';
import path from 'path';
const parseFile = icalAsync.parseFile;

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

  async processFiles(files: string[]) {
    for (const filename of files) {
      console.log(
        await parseFile(
          path.resolve(
            this.configService.getOrThrow('INCOMING_FILES_PATH'),
            filename,
          ),
        ),
      );
    }

    return files;
  }
}
