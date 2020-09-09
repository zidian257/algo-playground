// 这个题目说的是，给你一个递增排序的整数数组 nums，和一个目标值 target。
// 你要在数组里找到 target，然后返回它的下标。如果找不到则返回 -1。
//
// 比如说，给你的数组是：
//
// -2, 0, 2, 4, 5, 8, 9
//
// 给你的目标值是 5。5 在这个数组中，找到后返回它的下标 4 即可。

const a = [-2, 0, 2, 4, 5, 8, 9];

const binSearch1 = (r, x) => {
  let low = 0;
  let high = a.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (r[mid] > x) high = mid - 1;
    if (r[mid] < x) low = mid + 1;
    else return mid;
  }

  return -1;
};

const binSearch = (arr, x) => {
  let first = 0;
  let last = arr.length - 1;
  let mid;

  while (first < last) {
    mid = first + (last - first) / 2;
    if (arr[mid] < x) {
      first = mid + 1;
    } else last = mid;
  }

  return -1;
};

const lower_bound = (array, first, last, value) => {
  let mid;
  while (first < last) {
    mid = Math.floor(first + (last - first) / 2);
    if (array[mid] < value) {
      mid = first + 1;
    } else mid = last;
  }

  return first;
};

// let mid =

module.exports = { binSearch };
