export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
  SORT_ORDER: 'desc' as const,
};

export const SORT_ORDERS = ['asc', 'desc'] as const;
