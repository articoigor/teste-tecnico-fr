import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { QuoteRequestDto } from 'src/utils/dtos/quote.dto';


describe('QuoteController', () => {
  let quoteController: QuoteController;
  let quoteService: QuoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [
        {
          provide: QuoteService,
          useValue: {
            processQuote: jest.fn(), 
            processMetrics: jest.fn(),
          },
        },
      ],
    }).compile();

    quoteController = module.get<QuoteController>(QuoteController);
    quoteService = module.get<QuoteService>(QuoteService);
  });

  it('should process quotes', async () => {
    const mockProcessedResult = {
      carrier: [
        { name: 'Correios', final_price: 20.50, service: 'SEDEX' },
      ],
    };

    (quoteService.processQuote as jest.Mock).mockReturnValue(mockProcessedResult);

    const mockQuotes: QuoteRequestDto = {
      recipient: {
        address: {
          zipcode: '00000000',
        },
      },
      volumes: [
        {
          amount: 1,
          category: 2,
          unitary_weight: 3,
          price: 1000,
          sku: 'teste-unidade',
          height: 0.2,
          width: 0.2,
          length: 0.2,
        },
      ],
    };

    const result = await quoteController.processQuote(mockQuotes);

    expect(result).toEqual(mockProcessedResult);
    expect(quoteService.processQuote).toHaveBeenCalledWith(mockQuotes);
  });

  it('should not process quotes', async () => {
    const invalidRequestBody = {
      recipient: {
        address: {
          zipcode: '00000000',
        },
      },
      volumes: [
        {
          amount: 1,
          category: undefined, 
          unitary_weight: 'três', 
          price: '1000', 
          sku: 'teste-unidade',
          height: 0.2,
          width: 0.2,
          length: 0.2,
        },
      ],
    };

    try {
      await quoteController.processQuote(invalidRequestBody as any);
    } catch (error) {
      expect(error.response).toEqual({
        message: [
          'O campo category é de preenchimento obrigatório.',
          'O campo price deveria ser do tipo number',
          'O campo unitary_weight deveria ser do tipo number',
        ],
        error: 'Bad Request',
        statusCode: 400,
      });
    }
  });

  it('should process metrics (no last quote informed)', async () => {
    const mockProcessedMetricResult = {
      lowestQuote: 10,
      highestQuote: 40,
      carriersData: [
        {
          carrierName: 'Correios',
          quotesQtt: 2,
          totalPrice: 50,
          medianPrice: 25,
        },
      ],
    };

    (quoteService.processMetrics as jest.Mock).mockReturnValue(mockProcessedMetricResult);

    const result = await quoteController.processMetrics({});

    expect(result).toEqual(mockProcessedMetricResult);
    expect(quoteService.processMetrics).toHaveBeenCalledWith(undefined);
  });
});
