import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';

function MiddleWareAll(req: Request, res: Response, next: Function) {
  console.log('MiddlewareAll');
  console.log(req.headers);
  
  next();
}
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddleWareAll)
  await app.listen(3000);
}
bootstrap();
