const { insertion_sort } = require('./index');

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

describe('insertion_sort', function() {
  test('insertion_sort works', function() {
    expect(insertion_sort(randomize(a))).toEqual(a);
  });
});
