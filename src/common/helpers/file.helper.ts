export function bytesToMb(bytes: number): number {
  return Number((bytes / (1024 * 1024)).toFixed(2));
}

export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}
