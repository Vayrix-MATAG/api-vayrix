export declare class PaginationMetaDto {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}
export declare class PaginationResponseDto<T> {
    items: T[];
    meta: PaginationMetaDto;
}
