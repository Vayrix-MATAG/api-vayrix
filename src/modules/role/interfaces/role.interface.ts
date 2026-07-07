export interface RoleModel {
  id: bigint;
  nom: string;
  description: string;
}

export interface RoleListParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
