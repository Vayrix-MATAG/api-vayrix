"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQuery = void 0;
const common_1 = require("@nestjs/common");
exports.PaginationQuery = (0, common_1.createParamDecorator)((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query;
    return {
        page: query.page ? Number(query.page) : 1,
        limit: query.limit ? Number(query.limit) : 10,
        search: query.search,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder === 'asc' || query.sortOrder === 'desc'
            ? query.sortOrder
            : 'desc',
    };
});
//# sourceMappingURL=pagination-query.decorator.js.map