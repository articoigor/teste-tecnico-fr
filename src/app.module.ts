import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    QuoteModule
  ],
})

export class AppModule {}
