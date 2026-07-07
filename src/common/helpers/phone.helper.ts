export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '').trim();
}

export function isLikelyInternationalPhone(phone: string): boolean {
  return /^\+\d{8,15}$/.test(normalizePhone(phone));
}
