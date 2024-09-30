import { Module } from '@nestjs/common';
import { QuoteService } from './services/quote.service';
import { QuoteController } from './controllers/quote.controller';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class AppModule {}
