export interface ApiSuccessResponse<T = unknown, M = unknown> {
  success: true;
  message: string;
  data: T;
  meta: M | null;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors: unknown[];
}

export type ApiResponse<T = unknown, M = unknown> =
  | ApiSuccessResponse<T, M>
  | ApiErrorResponse;
