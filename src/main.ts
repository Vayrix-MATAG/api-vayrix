import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { buildSwaggerDocument } from './common/swagger/swagger.config';
import { createDocsAuthMiddleware } from './docs/docs-auth.middleware';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');
  const publicPath = join(process.cwd(), 'public');

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
        },
      },
    }),
  );
  app.use(cookieParser());
  app.useStaticAssets(publicPath);

  app.enableCors({
    origin: configService.get<string[]>('cors.origins') ?? ['*'],
    credentials: true,
  });
  app.setGlobalPrefix(configService.get<string>('apiPrefix') ?? 'api/v1');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new AllExceptionsFilter(), new PrismaExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor());

  const jwtSecret = configService.getOrThrow<string>('jwt.secret');
  app.use(createDocsAuthMiddleware(jwtSecret, publicPath));

  const swaggerConfig = buildSwaggerDocument();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [AppModule, AuthModule, UsersModule],
    operationIdFactory: (_controllerKey, methodKey) => methodKey,
  });

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'list',
    },
    customSiteTitle: 'VAYRIX API ? Documentation',
    customfavIcon: '/assets/vayrix-logo.png',
    customCss: `
      .swagger-ui .topbar { display: none; }
      .swagger-ui .info .title { font-weight: 700; }
      #vayrix-logout-btn {
        position: fixed;
        top: 16px;
        right: 20px;
        z-index: 9999;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: #fff;
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(59, 130, 246, 0.35);
        transition: transform 0.15s, box-shadow 0.2s;
      }
      #vayrix-logout-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 24px rgba(124, 58, 237, 0.4);
      }
      #vayrix-logout-btn svg {
        flex-shrink: 0;
      }
    `,
    customJs: '/swagger-custom.js',
  });

  const port = configService.get<number>('port') ?? 3000;
  await app.listen(port);
  logger.log(`VAYRIX API démarrée sur le port ${port}`);
  logger.log(`Documentation : http://localhost:${port}`);
}

bootstrap();
