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

/** Convertit les BigInt en string pour la sérialisation JSON */
function stringifyBigInt(obj: unknown): unknown {
  if (obj === null || obj === undefined) {
    return obj;
  }
  
  if (typeof obj === 'bigint') {
    return obj.toString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(stringifyBigInt);
  }
  
  if (typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = stringifyBigInt((obj as Record<string, unknown>)[key]);
      }
    }
    return result;
  }
  
  return obj;
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
          return stringifyBigInt(payload);
        }

        const responsePayload = payload as ResponsePayload<T>;
        const hasEnvelopeShape =
          responsePayload &&
          typeof responsePayload === 'object' &&
          ('data' in responsePayload ||
            'message' in responsePayload ||
            'meta' in responsePayload);

        if (hasEnvelopeShape) {
          const result = this.apiResponseService.success(
            (responsePayload.data as T) ?? (payload as T),
            responsePayload.message ?? 'Succès',
            responsePayload.meta ?? null,
          );
          return stringifyBigInt(result);
        }

        return stringifyBigInt(this.apiResponseService.success(payload as T));
      }),
    );
  }
}
