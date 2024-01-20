import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly searchService: SearchService,
  ) {}

  @Get('search')
  async search(
    @Query("query") query:string,
    @Query("locale") locale:string,
    @Query("lang") lang:string,
  ) {
    const { data } = await firstValueFrom(this.searchService.queryBot(query, locale, lang))
    const search = await this.searchService.createSearch({data: {query, keywords: query.split(" ")}})
    this.searchService.createManyResult({data: data.map(res => ({...res, searchId: search.id}))})
    return data
  }
}