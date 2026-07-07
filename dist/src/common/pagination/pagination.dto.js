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
exports.PaginationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const pagination_constants_1 = require("../constants/pagination.constants");
class PaginationDto {
    page = pagination_constants_1.PAGINATION_DEFAULTS.PAGE;
    limit = pagination_constants_1.PAGINATION_DEFAULTS.LIMIT;
    search;
    sortBy;
    sortOrder = pagination_constants_1.PAGINATION_DEFAULTS.SORT_ORDER;
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        default: pagination_constants_1.PAGINATION_DEFAULTS.PAGE,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Object)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        default: pagination_constants_1.PAGINATION_DEFAULTS.LIMIT,
        minimum: 1,
        maximum: pagination_constants_1.PAGINATION_DEFAULTS.MAX_LIMIT,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(pagination_constants_1.PAGINATION_DEFAULTS.MAX_LIMIT),
    __metadata("design:type", Object)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Recherche textuelle globale',
        example: 'nengue',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Champ de tri',
        example: 'dateCreation',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: pagination_constants_1.SORT_ORDERS,
        default: pagination_constants_1.PAGINATION_DEFAULTS.SORT_ORDER,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(pagination_constants_1.SORT_ORDERS),
    __metadata("design:type", Object)
], PaginationDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=pagination.dto.js.map