const { insertion_sort } = require('./insertion_sort');
const { bubble_sort } = require('./bubble_sort');
const { selection_sort } = require('./selection_sort');
const { counting_sort, counting_sort_common } = require('./counting_sort');
const { radix_sort } = require('./radix_sort');
const { quick_sort } = require('./quick_sort');
const { quick_sort_non_recursive } = require('./quick_sort');
const { merge_sort } = require('./merge_sort');
const { heap_sort } = require('./heap_sort');
const { bucket_sort } = require('./bucket_sort');

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

describe('sorting algorithms', function() {
  test('insertion_sort works', function() {
    expect(insertion_sort(randomize(a))).toEqual(a);
  });

  test('bubble_sort works', function() {
    expect(bubble_sort(randomize(a))).toEqual(a);
  });

  test('selection_sort works', function() {
    expect(selection_sort(randomize(a))).toEqual(a);
  });

  test('counting_sort works', function() {
    expect(counting_sort(randomize(a))).toEqual(a);
  });

  test('counting_sort_common works', function() {
    expect(counting_sort_common(randomize(a))).toEqual(a);
  });

  test('radix_sort works', function() {
    expect(radix_sort(randomize(a), 4)).toEqual(a);
  });

  test('quick_sort works', function() {
    expect(quick_sort(randomize(a))).toEqual(a);
  });

  test('quick_sort_non_recursive works', function() {
    expect(quick_sort_non_recursive(randomize(a))).toEqual(a);
  });

  test('merge_sort works', function() {
    expect(merge_sort(randomize(a))).toEqual(a);
  });

  test('heap_sort works', function() {
    expect(heap_sort(randomize(a))).toEqual(a);
  });

  test('bucket_sort works', function() {
    expect(bucket_sort(randomize(a), 5431)).toEqual(a);
  });
});
