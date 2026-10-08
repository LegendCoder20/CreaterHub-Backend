import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import chalk from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Only allow the DTO Defined Fields
      transform: true,
    }),
  );

  let port = process.env.PORT ?? 8000;
  await app.listen(port);
  console.log(
    chalk.bgYellow.white(`🚀 Server is Running on http://localhost:${port}`),
  );
}
await bootstrap();
