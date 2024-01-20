import { Controller, Get } from '@nestjs/common';
import { SearchService } from './app.service';
import { Search } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly searchService: SearchService,
  ) {}

  @Get('search')
  async search(): Promise<Search[]> {
    return this.searchService.searches()
  }
}