export type ApiSuccessType<T = unknown, M = unknown> = {
  success: true;
  message: string;
  data: T;
  meta: M | null;
};

export type ApiErrorType = {
  success: false;
  message: string;
  errors: unknown[];
};
