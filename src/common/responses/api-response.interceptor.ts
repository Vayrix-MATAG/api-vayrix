import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ApiResponseService } from './api-response.service';

interface ResponsePayload<T = unknown> {
  message?: string;
  data?: T;
  meta?: unknown;
}

@Injectable()
export class ApiResponseInterceptor<T>
  implements NestInterceptor<T, unknown>
{
  constructor(private readonly apiResponseService: ApiResponseService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<unknown> {
    return next.handle().pipe(
      map((payload) => {
        if (
          payload &&
          typeof payload === 'object' &&
          'success' in (payload as object)
        ) {
          return payload;
        }

        const responsePayload = payload as ResponsePayload<T>;
        const hasEnvelopeShape =
          responsePayload &&
          typeof responsePayload === 'object' &&
          ('data' in responsePayload ||
            'message' in responsePayload ||
            'meta' in responsePayload);

        if (hasEnvelopeShape) {
          return this.apiResponseService.success(
            (responsePayload.data as T) ?? (payload as T),
            responsePayload.message ?? 'Succès',
            responsePayload.meta ?? null,
          );
        }

        return this.apiResponseService.success(payload as T);
      }),
    );
  }
}
