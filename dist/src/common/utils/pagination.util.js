"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationParams = getPaginationParams;
exports.buildPaginatedResult = buildPaginatedResult;
exports.buildSearchFilter = buildSearchFilter;
exports.buildSearchOr = buildSearchOr;
function getPaginationParams(options) {
    const page = options.page > 0 ? options.page : 1;
    const limit = options.limit > 0 ? options.limit : 10;
    const sortBy = options.sortBy ?? 'createdAt';
    const sortOrder = options.sortOrder ?? 'desc';
    return {
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    };
}
function buildPaginatedResult(data, total, page, limit) {
    return { data, total, page, limit };
}
function buildSearchFilter(search, fields) {
    if (!search?.trim()) {
        return undefined;
    }
    return { contains: search.trim(), mode: 'insensitive' };
}
function buildSearchOr(search, fields) {
    if (!search?.trim()) {
        return undefined;
    }
    const filter = buildSearchFilter(search, fields);
    if (!filter) {
        return undefined;
    }
    return fields.map((field) => ({ [field]: filter }));
}
//# sourceMappingURL=pagination.util.js.map