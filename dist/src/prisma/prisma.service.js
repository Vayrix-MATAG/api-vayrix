"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const client_1 = require("../../generated/prisma/client");
const logger_service_1 = require("../common/logger/logger.service");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    logger;
    pool;
    constructor(configService, logger) {
        const connectionString = configService.getOrThrow('database.url');
        const pool = new pg_1.Pool({
            connectionString,
            max: configService.get('database.poolMax') ?? 10,
        });
        const adapter = new adapter_pg_1.PrismaPg(pool);
        super({ adapter });
        this.logger = logger;
        this.pool = pool;
    }
    async onModuleInit() {
        await this.$connect();
        this.logger.log('Connexion Prisma initialisée', PrismaService_1.name);
    }
    async onModuleDestroy() {
        await this.$disconnect();
        await this.pool.end();
        this.logger.log('Connexion Prisma fermée', PrismaService_1.name);
    }
    async enableShutdownHooks() {
        process.on('beforeExit', async () => {
            await this.onModuleDestroy();
        });
    }
    withTransaction(fn) {
        return this.$transaction((tx) => fn(tx));
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        logger_service_1.LoggerService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map