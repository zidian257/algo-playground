// 这个题目说的是，给你一个整数数组，并且这个数组是按递增排序的，你要找到数组中的两个整数，它们的和等于给定的目标值，然后返回它们的下标。题目假设给你的数组总是有且只有一个解，而且同一个元素不能使用两次。另外，返回结果的下标要从 1 开始。
//
// 比如说给你的数组是：
//
// 1, 2, 3, 6, 8, 11
//
// 目标值是 10。那么，满足条件的两个整数是，2 和 8，它们的和是 10。所以你要返回它们的下标是 [2, 5]。

const array = [1, 2, 3, 6, 8, 11];
const sum = 10;

const getTwoSumToGivenNumberSorted = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  const noFind = [-1, -1];

  while (i < j) {
    if (arr[i] + arr[j] > target) --j;
    if (arr[i] + arr[j] < target) ++i;
    if (arr[i] + arr[j] === target) {
      return [i + 1, j + 1];
    }
  }
  return noFind;
};

const ret = getTwoSumToGivenNumberSorted(array, sum);
console.log("ret:", ret);
