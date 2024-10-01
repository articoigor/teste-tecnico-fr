import { Body, Controller, Post } from '@nestjs/common';
import { QuoteRequestDto, QuoteResponseDto } from 'src/utils/dtos/quote.dto';
import { QuoteService } from './quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post("/quote")
  processQuote(@Body() quoteDto: QuoteRequestDto): Promise<QuoteResponseDto> {
    return this.quoteService.processQuote(quoteDto);
  }
}
