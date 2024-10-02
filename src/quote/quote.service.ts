import { Injectable } from '@nestjs/common';
import { formatQuoteRequest } from 'src/utils/helpers/quote.helper';
import { QuoteRequestDto, QuoteResponseDto } from 'src/utils/dtos/quote.dto';
import { transformResToModel } from 'src/utils/helpers/quote.helper';
import { QuoteRepository } from './quote.repository';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository
  ) {}

  async processQuote(quoteDto: QuoteRequestDto): Promise<QuoteResponseDto> {
    try{
      const formattedReq = formatQuoteRequest(quoteDto);

      const response = await this.quoteRepository.processQuote(formattedReq);
      
      if(!response){
        throw new Error("Não foi possível consultar a API de cotação.");
      }

      const quoteModel = transformResToModel(response.data.dispatchers.offers);

      const res = await this.quoteRepository.recordData(quoteModel);

      if(res.status == 201){
        return new QuoteResponseDto(quoteModel);
      } else {
        throw new Error("Não foi possível armanezar os dados da atual cotação.");
      }
    } catch(e){
      console.log(e);
    }
  }

  async processMetrics(last_quotes: number): Promise<any>{
    try{
      const res = await this.quoteRepository.getRecords(last_quotes);

      const data = res.data;

      return this.extractCarriers(data);
    } catch(e){
      console.log(e);
    }
  }

  extractCarriers(data: any[]): any {
    const carriersMap = new Map();

    let lowestQuote = Infinity;

    let highestQuote = 0;

    for(const quote of data){
      if(!carriersMap.has(quote.name)) carriersMap.set(quote.name, {
        carrierName: quote.name,
        prices: [], 
      });

      lowestQuote = Math.min(lowestQuote, quote.final_price);

      highestQuote = Math.max(highestQuote, quote.final_price);

      carriersMap.get(quote.name).prices.push(quote.final_price);
    }

    const carriersArr = Array.from(carriersMap.values());

    const carrier = carriersArr.map((carrier) => {
      const qtt = carrier.prices.length;

      const priceSumm = carrier.prices.reduce((acc: number, curr: number) => acc + curr, 0);

      return {
        carrierName: carrier.carrierName,
        quotesQtt: qtt,
        totalPrice: priceSumm,
        medianPrice: priceSumm / qtt
      };
    });

    return {
      lowestQuote: lowestQuote,
      highestQuote: highestQuote,
      carriersData: carrier
    }
  }
}
