import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SearchService } from './app.service';
import { PrismaService } from './prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    HttpModule
  ],
  controllers: [AppController],
  providers: [PrismaService, SearchService],
})
export class AppModule {}
