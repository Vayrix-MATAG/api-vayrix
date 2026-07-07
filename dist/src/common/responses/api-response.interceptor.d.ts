import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponseService } from './api-response.service';
export declare class ApiResponseInterceptor<T> implements NestInterceptor<T, unknown> {
    private readonly apiResponseService;
    constructor(apiResponseService: ApiResponseService);
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<unknown>;
}
