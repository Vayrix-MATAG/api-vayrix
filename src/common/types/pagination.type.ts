export type PaginationMetaType = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type PaginationResultType<T> = {
  items: T[];
  meta: PaginationMetaType;
};
