import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: string | null = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
