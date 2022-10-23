import { Test, TestingModule } from '@nestjs/testing';
import { FileProcessorController } from './file-processor.controller';
import { FileProcessorService } from './file-processor.service';

describe('FileProcessorController', () => {
  let fileProcessorController: FileProcessorController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [FileProcessorController],
      providers: [FileProcessorService],
    }).compile();

    fileProcessorController = moduleRef.get<FileProcessorController>(
      FileProcessorController,
    );
  });

  it('should be defined', () => {
    expect(fileProcessorController).toBeDefined();
  });
});
