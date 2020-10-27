/**
 * @packageDocumentation Small library focused on functional programming.
 */

/**
 * Calculate the sum of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @public
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Calculate the difference of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @beta
 */
export function min(a: number, b: number): number {
  return a - b;
}

/**
 * Calculate the multiplication of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @internal
 */
export function mul(a: number, b: number): number {
  return a * b;
}
