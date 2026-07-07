import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ApiResponseService } from '../responses/api-response.service';

/** Enveloppe toutes les réponses dans un format API cohérent */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, unknown> {
  constructor(private readonly apiResponseService: ApiResponseService) {}

  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(map((data) => this.apiResponseService.success(data)));
  }
}
