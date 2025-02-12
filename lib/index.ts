export function getNewMax(value: number): number {
  return Math.ceil(value / 0.95);
}

export function getPercentage(value: number, iter: number): number {
  return Math.ceil(value * (iter / 100));
}
