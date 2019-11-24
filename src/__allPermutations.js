// 数组的全排列
// 这个题目说的是，给你一个整数数组，并且数组中没有重复元素，你要返回这个数组所有可能的排列。
//
// [0,1,2]
//
// [0,1,2]
// [0,2,1]
// [1,0,2]
// [1,2,0]
// [2,0,1]
// [2,1,0]
const arr = [0, 1, 2];

const swap = (arr, i, j) => {
  console.log("i:", i);
  console.log("j:", j);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const getPermutesRecursive = (arr, start, result = []) => {
  if (start === arr.length) {
    console.log("arr:", arr);
    result.push(arr.concat());
  } else {
    for (let i = start; i < arr.length; ++i) {
      swap(arr, start, i);
      getPermutesRecursive(arr, start + 1, result);
      swap(arr, start, i);
    }
  }
};
const getAllPermutes = arr => {
  let result = [];
  if (arr) {
    const array = arr.concat();
    getPermutesRecursive(array, 0, result);
  }
  return result;
};

const gg = getAllPermutes([12, 4, 5, 6]);

console.log("gg:", gg);
