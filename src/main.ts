import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// import cookieSession from 'cookie-session'; // Unhandled promises
const cookieSession = require('cookie-session');

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(
		cookieSession({
			keys: ['cookie-session'],
		}),
	);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	await app.listen(8000);
}
bootstrap();
