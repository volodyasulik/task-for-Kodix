const dotenvFlow = require('dotenv-flow');
import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
const passport = require('passport');
const session = require('express-session');
import { CONFIG } from './modules/common/config.config';
import { SessionOptions } from 'express-session';
const cookieParser = require('cookie-parser');

async function bootstrap(): Promise<void> {
  dotenvFlow.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableShutdownHooks();
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(passport.initialize());
  app.use(cookieParser());

  const sessionSettings: SessionOptions = {
    secret: process.env[CONFIG.SESSION_SECRET]!,
    resave: false,
    saveUninitialized: false,
  };

  app.use(session(sessionSettings));

  await app.listen(process.env['PORT'] ?? 8080);
}
bootstrap();
