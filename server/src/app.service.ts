import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Search, Prisma } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async searches(
    searchFindManyArgs?: Prisma.SearchFindManyArgs,
  ): Promise<Search[] | null> {
    return this.prisma.search.findMany(searchFindManyArgs);
  }
}