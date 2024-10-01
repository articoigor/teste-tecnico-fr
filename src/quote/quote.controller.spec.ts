import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from '../quote/quote.controller';
import { QuoteService } from 'src/services/quote.service';

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
      expect(quoteController.processQuote()).toBe('Hello World!');
    });
  });
});
