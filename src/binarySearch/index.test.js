const { bin_search, left_bound, right_bound } = require('./index');

const a = [-2, 0, 2, 4, 5, 8, 9];
const b = [1, 2, 2, 2, 4, 5];

describe('bin_search', function() {
  test('bin_search works', function() {
    expect(bin_search(a, 5)).toBe(4);
    expect(bin_search(a, 11)).toBe(-1);
    expect(bin_search(a, -100)).toBe(-1);
  });
  test('left_bound works', function() {
    expect(left_bound(b, 5)).toBe(5);
    expect(left_bound(b, 2)).toBe(1);
    expect(left_bound(b, 1)).toBe(0);
    expect(left_bound(b, 12)).toBe(-1);
    expect(left_bound(b, -100)).toBe(-1);

  });

  test('right_bound works', function() {
    expect(right_bound(b, 5)).toBe(5);
    expect(right_bound(b, 2)).toBe(3);
    expect(right_bound(b, 1)).toBe(0);
    expect(right_bound(b, 12)).toBe(-1);
    expect(right_bound(b, -100)).toBe(-1);
  });
});
