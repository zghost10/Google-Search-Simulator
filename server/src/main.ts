import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost", "http://localhost:8000", "http://localhost:3000"]
  });
  await app.listen(8000);
}
bootstrap();
