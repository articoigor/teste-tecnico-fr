import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  processQuote(): string {
    return 'Hello World!';
  }
}
