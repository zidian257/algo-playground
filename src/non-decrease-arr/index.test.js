//
// [13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.
//
//   [13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.

const { isNonDecreasing } = require('./index');
const arr1 = [13, 4, 7];
const arr2 = [5, 1, 3, 2, 5];

test('non-decreasing array', () => {
  expect(isNonDecreasing(arr1)).toBe(true);
  expect(isNonDecreasing(arr2)).toBe(false);
});
