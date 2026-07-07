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
exports.ApiResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const api_response_service_1 = require("./api-response.service");
let ApiResponseInterceptor = class ApiResponseInterceptor {
    apiResponseService;
    constructor(apiResponseService) {
        this.apiResponseService = apiResponseService;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((payload) => {
            if (payload &&
                typeof payload === 'object' &&
                'success' in payload) {
                return payload;
            }
            const responsePayload = payload;
            const hasEnvelopeShape = responsePayload &&
                typeof responsePayload === 'object' &&
                ('data' in responsePayload ||
                    'message' in responsePayload ||
                    'meta' in responsePayload);
            if (hasEnvelopeShape) {
                return this.apiResponseService.success(responsePayload.data ?? payload, responsePayload.message ?? 'Succès', responsePayload.meta ?? null);
            }
            return this.apiResponseService.success(payload);
        }));
    }
};
exports.ApiResponseInterceptor = ApiResponseInterceptor;
exports.ApiResponseInterceptor = ApiResponseInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_response_service_1.ApiResponseService])
], ApiResponseInterceptor);
//# sourceMappingURL=api-response.interceptor.js.map