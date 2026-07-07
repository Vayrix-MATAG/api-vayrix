import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponseService } from '../responses/api-response.service';
export declare class TransformInterceptor<T> implements NestInterceptor<T, unknown> {
    private readonly apiResponseService;
    constructor(apiResponseService: ApiResponseService);
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<unknown>;
}
