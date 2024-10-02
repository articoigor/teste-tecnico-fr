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
            processQuotes: jest.fn(),
            processMetrics: jest.fn(),
          },
        },
      ],
    }).compile();

    quoteController = module.get<QuoteController>(QuoteController);
    quoteService = module.get<QuoteService>(QuoteService);
  });

  it('Should process quotes', async () => {
    const mockProcessedResult = { 
      carrier: [ 
        { name: "Correios", final_price: 20.50, service: "SEDEX" } 
      ]
    };

    const serviceMock = quoteService.processQuote as jest.Mock;
    console.log(serviceMock);
    serviceMock.mockReturnValue(mockProcessedResult);

    const mockQuotes: QuoteRequestDto = {
        recipient:{
          "address":{
              "zipcode":"00000000"
          }
        },
        volumes:[
            {
                "amount":1,
                "category": 2,
                "unitary_weight":3,
                "price":1000,
                "sku":"teste-unidade",
                "height":0.2,
                "width":0.2,
                "length":0.2
            }
        ]
    };

    const result = quoteController.processQuote(mockQuotes);

    expect(result).toEqual(mockProcessedResult);

    expect(quoteService.processQuote).toHaveBeenCalledWith(mockQuotes);
  });

  it('should process metrics via the controller', async () => {
    const mockProcessedMetricResult = {
        "lowestQuote": 10,
        "highestQuote": 40,
        "carriersData": [
            {
                "carrierName": "Correios",
                "quotesQtt": 2,
                "totalPrice": 50,
                "medianPrice": 25
            }
        ]
    };

    (quoteService.processMetrics as jest.Mock).mockReturnValue(mockProcessedMetricResult);

    const result = quoteController.processMetrics(null);

    expect(result).toEqual(mockProcessedMetricResult);
    expect(quoteService.processMetrics).toHaveBeenCalledWith(null);
  });
});
