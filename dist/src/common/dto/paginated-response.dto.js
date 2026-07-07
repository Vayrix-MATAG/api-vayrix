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
exports.PaginatedResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaginatedResponseDto {
    items;
    meta;
    data;
    total;
    page;
    limit;
    totalPages;
    hasNextPage;
    hasPreviousPage;
    constructor(data, total, page, limit) {
        const totalPages = Math.ceil(total / limit) || 1;
        this.items = data;
        this.meta = {
            page,
            limit,
            totalItems: total,
            totalPages,
            hasNext: page < totalPages,
            hasPrevious: page > 1,
        };
        this.data = data;
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.totalPages = totalPages;
        this.hasNextPage = page < totalPages;
        this.hasPreviousPage = page > 1;
    }
}
exports.PaginatedResponseDto = PaginatedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], PaginatedResponseDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            page: 1,
            limit: 10,
            totalItems: 150,
            totalPages: 15,
            hasNext: true,
            hasPrevious: false,
        },
    }),
    __metadata("design:type", Object)
], PaginatedResponseDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], PaginatedResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginatedResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginatedResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginatedResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginatedResponseDto.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PaginatedResponseDto.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PaginatedResponseDto.prototype, "hasPreviousPage", void 0);
//# sourceMappingURL=paginated-response.dto.js.map