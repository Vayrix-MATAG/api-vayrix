import { PaginationDto } from './pagination.dto';
import { PaginationResponseDto } from './pagination-response.dto';
export declare class PaginationService {
    buildResponse<T>(items: T[], totalItems: number, pagination: Pick<PaginationDto, 'page' | 'limit'>): PaginationResponseDto<T>;
}
