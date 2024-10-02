import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { AxiosResponse } from "axios";
import { SupabaseService } from "src/database/supabase.service";
import { FreteRapidoRequestDto } from "src/utils/dtos/freteRapido.dto";
import { QuoteModel } from "src/utils/dtos/quote.dto";


@Injectable()
export class QuoteRepository {
    constructor(private readonly httpService: HttpService,
                private readonly supabaseService: SupabaseService
    ) {}

    async processQuote(quoteDto: FreteRapidoRequestDto): Promise<AxiosResponse> {
        try {
          return this.httpService.axiosRef.post(process.env.FRETE_RAPIDO_API_URI, quoteDto);
        } catch (error) {
          console.error('Error calling quoting API', error);
          throw error;
        }
    }

    async recordData(quotes: QuoteModel[]): Promise<any> {
      try{
        let client = this.supabaseService.getClient();

        const data = await client
        .from('quotes') 
        .insert(quotes);   

        return data;
      } catch(e){
        console.log(e);
        throw new Error(e);
      }
    }

    async getRecords(last_quotes: number): Promise<any> {
      try{
        let client = this.supabaseService.getClient();

        return client
        .from('quotes') 
        .select('*')                
        .order('created_at', { ascending: false })
        .limit(last_quotes ? last_quotes : Infinity);
      } catch(e){
        console.log(e);
        throw new Error(e);
      }
    }
}
