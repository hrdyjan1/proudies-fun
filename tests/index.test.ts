import { sum, min } from '..';

describe('Calculate sum of two numbers', () => {
  test('simple sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Calculate difference of two numbers', () => {
  test('simple minus', () => {
    expect(min(3, 2)).toBe(1);
  });
});
