import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Search } from '@prisma/client';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class SearchService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService
  ) {}
  
  queryBot(
    query: string, 
    locale: string, 
    lang: string
  ): Observable<AxiosResponse<SearchResult[]>> {
    return this.httpService.get(`http://127.0.0.1:5000/search?query=${query.split(" ").join("+")??""}&locale=${locale??"br"}&lang=${lang??"pt"}`)
  }

  async createSearch(
    searchCreateArgs?: Prisma.SearchCreateArgs,
  ): Promise<Search | null> {
    return this.prisma.search.create(searchCreateArgs);
  }

  async createManyResult(
    resultCreateManyArgs?: Prisma.ResultCreateManyArgs,
  ): Promise<{count: number} | null> {
    return this.prisma.result.createMany(resultCreateManyArgs);
  }
}