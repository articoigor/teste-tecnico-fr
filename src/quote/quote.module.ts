import { Module } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { QuoteService } from './quote.service';
import { SupabaseModule } from 'src/database/supabase.module';
import { HttpModule } from '@nestjs/axios';
import { QuoteController } from './quote.controller';

@Module({
  imports: [SupabaseModule, HttpModule],
  controllers: [QuoteController],
  providers: [QuoteRepository, QuoteService],
})

export class QuoteModule {}