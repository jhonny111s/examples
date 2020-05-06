import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// nest js crea toda una estructura e implementa mejores practicas a la hora de separar el codigo
// nestjs usa injeccion de dependencias, y la forma de hacer es por medio de decoradores
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
