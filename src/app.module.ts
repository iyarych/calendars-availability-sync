import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { FileProcessorModule } from './file-processor/file-processor.module';

@Module({
  imports: [BooksModule, FileProcessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
