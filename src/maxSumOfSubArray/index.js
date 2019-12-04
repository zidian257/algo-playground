// 这个题目说的是，给你一个非空整数数组，你要找到和最大的连续子序列，然后返回它的和。
//
// 比如说，给你的数组 a 是：
//
// 2, -8, 3, -2, 4, -10
//
// 和最大的连续子序列是 3, -2, 4,  他们的和是 5。

const arr = [2, -8, 3, -2, 4, -10];



// O(n4)
const m1 = arr => {
  const len = arr.length;

  let sums = [];

  for (let i = 0; i < len; ++i) {
    for (let j = i; j < len; ++j) {
      let sum = 0;
      for (let p = i; p <= j; ++p) {
        sum += arr[p];
      }
      sums.push(sum);
    }
  }
  return sums.sort()[sums.length - 1];
};

const maxSumOfSubArray = arr => {
  let cur = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; ++i) {
    cur = cur <= 0 ? arr[i] : cur + arr[i];
    max = Math.max(max, cur);
  }

  return max;
};

const gg = maxSumOfSubArray(arr)

console.log('gg:', gg);
