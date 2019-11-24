// 这个题目说的是，给你一个整数数组和一个目标值，你要找到数组里两个整数，它们的和等于目标值。然后返回这两个整数的下标。
//
// 比如说给你的整数数组是：
//
// 1, 2, 3, 6, 8, 11
//
// 目标值是 10。那么，满足条件的两个整数是，2 和 8，它们的和是 10。所以你要返回它们的下标是 1 和 4。

const array = [1, 2, 3, 6, 8, 11];
const sum = 10;
const getTwoSumToGivenNumber = (arr, target) => {
  const noFind = [-1, -1];
  if (arr.length === 0) {
    return noFind;
  }

  const hashMap = {};

  for (let i = 0; i < arr.length; ++i) {
    if (Reflect.has(hashMap, target - arr[i])) {
      return [Reflect.get(hashMap, target - arr[i]), i];
    }
    Reflect.set(hashMap, arr[i], i);
  }
  return noFind;
};

console.log(getTwoSumToGivenNumber(array, sum));
