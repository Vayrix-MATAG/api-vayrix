import { SORT_ORDERS } from '../constants/pagination.constants';
export declare class PaginationDto {
    page: number;
    limit: number;
    search?: string;
    sortBy?: string;
    sortOrder: (typeof SORT_ORDERS)[number];
}
