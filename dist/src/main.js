"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const prisma_exception_filter_1 = require("./common/filters/prisma-exception.filter");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const swagger_config_1 = require("./common/swagger/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    const configService = app.get(config_1.ConfigService);
    const logger = new common_1.Logger('Bootstrap');
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: configService.get('cors.origins') ?? ['*'],
        credentials: true,
    });
    app.setGlobalPrefix(configService.get('apiPrefix') ?? 'api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(), new prisma_exception_filter_1.PrismaExceptionFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(), new transform_interceptor_1.TransformInterceptor());
    const swaggerConfig = (0, swagger_config_1.buildSwaggerDocument)();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, {
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
    });
    const port = configService.get('port') ?? 3000;
    await app.listen(port);
    logger.log(`VAYRIX API d�marr�e sur le port ${port}`);
    logger.log(`Swagger disponible sur http://localhost:${port}/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map