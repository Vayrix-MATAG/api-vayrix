import { Injectable } from '@nestjs/common';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from './api-response.interface';

@Injectable()
export class ApiResponseService {
  success<T, M = unknown>(
    data: T,
    message = 'Succès',
    meta: M | null = null,
  ): ApiSuccessResponse<T, M> {
    return {
      success: true,
      message,
      data,
      meta,
    };
  }

  error(message: string, errors: unknown[] = []): ApiErrorResponse {
    return {
      success: false,
      message,
      errors,
    };
  }
}
