import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from '../quote/quote.controller';
import { QuoteService } from './quote.service';
import { QuoteResponseDto } from 'src/utils/dtos/quote.dto';

describe('AppController', () => {
  let quoteController: QuoteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [QuoteService],
    }).compile();

    quoteController = app.get<QuoteController>(QuoteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(quoteController.processQuote(null)).toBe(new QuoteResponseDto([]));
    });
  });
});
