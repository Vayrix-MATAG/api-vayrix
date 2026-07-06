import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponseDto } from '../dto/api-response.dto';
export declare class TransformInterceptor<T> implements NestInterceptor<T, ApiResponseDto<T>> {
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponseDto<T>>;
}
