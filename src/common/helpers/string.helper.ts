export function toTitleCase(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function compactWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}
