import { ApiErrorResponse, ApiSuccessResponse } from './api-response.interface';
export declare class ApiResponseService {
    success<T, M = unknown>(data: T, message?: string, meta?: M | null): ApiSuccessResponse<T, M>;
    error(message: string, errors?: unknown[]): ApiErrorResponse;
}
