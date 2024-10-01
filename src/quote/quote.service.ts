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
}
