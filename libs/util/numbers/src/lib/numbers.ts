/**
 * @name randomBetween
 * @param min the minimum value inclusive
 * @param max the maximum value inclusive
 * @returns a random number between the min and max values provided
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function calculatePercentage(current?: number, max?: number) {
  if (!current || !max) return 0;
  if (current > max) return 0;
  if (current < 0 || max < 0) return 0;

  return Math.min(Math.round((current / max) * 100), 100);
}

export function toPercentage(current?: number, max?: number) {
  return `${calculatePercentage(current, max)}%`;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
