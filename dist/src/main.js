"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = require("path");
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const prisma_exception_filter_1 = require("./common/filters/prisma-exception.filter");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const swagger_config_1 = require("./common/swagger/swagger.config");
const docs_auth_middleware_1 = require("./docs/docs-auth.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    const configService = app.get(config_1.ConfigService);
    const logger = new common_1.Logger('Bootstrap');
    const publicPath = (0, path_1.join)(process.cwd(), 'public');
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", 'data:', 'https:'],
                connectSrc: ["'self'"],
            },
        },
    }));
    app.use((0, cookie_parser_1.default)());
    app.useStaticAssets(publicPath);
    app.enableCors({
        origin: configService.get('cors.origins') ?? ['*'],
        credentials: true,
    });
    app.setGlobalPrefix(configService.get('apiPrefix') ?? 'api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(), new prisma_exception_filter_1.PrismaExceptionFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(), new transform_interceptor_1.TransformInterceptor());
    const jwtSecret = configService.getOrThrow('jwt.secret');
    app.use((0, docs_auth_middleware_1.createDocsAuthMiddleware)(jwtSecret, publicPath));
    const swaggerConfig = (0, swagger_config_1.buildSwaggerDocument)();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, {
        include: [app_module_1.AppModule, auth_module_1.AuthModule, users_module_1.UsersModule],
        operationIdFactory: (_controllerKey, methodKey) => methodKey,
    });
    swagger_1.SwaggerModule.setup('docs', app, document, {
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
    const port = configService.get('port') ?? 3000;
    await app.listen(port);
    logger.log(`VAYRIX API d�marr�e sur le port ${port}`);
    logger.log(`Documentation : http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map