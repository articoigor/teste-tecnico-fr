import { Body, Controller, Post } from '@nestjs/common';
import { QuoteDto } from 'src/utils/dtos/quote.dto';
import { QuoteService } from 'src/services/quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly appService: QuoteService) {}

  @Post("/quote")
  processQuote(@Body() quoteDto: QuoteDto): string {
    console.log(quoteDto);

    return this.appService.processQuote();
  }
}
