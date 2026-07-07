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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../generated/prisma/client");
const logger_service_1 = require("../logger/logger.service");
let PrismaExceptionFilter = class PrismaExceptionFilter {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.BAD_REQUEST;
        let message = 'Erreur de base de données';
        switch (exception.code) {
            case 'P2002':
                status = common_1.HttpStatus.CONFLICT;
                message = 'Une ressource avec ces données existe déjà';
                break;
            case 'P2025':
                status = common_1.HttpStatus.NOT_FOUND;
                message = 'Ressource introuvable';
                break;
            case 'P2003':
                status = common_1.HttpStatus.BAD_REQUEST;
                message = 'Référence invalide';
                break;
            default:
                break;
        }
        this.logger.warn(`[${exception.code}] ${request.method} ${request.url} -> ${message}`);
        response.status(status).json({
            success: false,
            statusCode: status,
            message,
            path: request.url,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], PrismaExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map