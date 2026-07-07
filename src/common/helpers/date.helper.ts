export function toIsoDate(value: Date | string | number): string {
  return new Date(value).toISOString();
}

export function nowIso(): string {
  return new Date().toISOString();
}
