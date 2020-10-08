const a = [1, 2, 3, 4, 5, 6, 7, 324, 5431];

const randomize = arr => {
  const len = arr.length;
  const swap = (arr, p, q) => {
    const temp = arr[q];
    arr[q] = arr[p];
    arr[p] = temp;
  };
  const copy = a.slice(0);

  const times = Math.floor(Math.random() * 10) + 10;

  for (let i = 0; i < times; i++) {
    const start = Math.floor(Math.random() * len);
    const end = Math.floor(Math.random() * len);
    swap(copy, start, end);
  }
  return copy;
};

const { findKthLargestNum } = require('./index');

describe('finding kth largest number', function() {
  test('it works', function() {
    expect(findKthLargestNum(randomize(a), 9)).toBe(5431);
    expect(findKthLargestNum(randomize(a), 10)).toBe(-1);
  });
});
