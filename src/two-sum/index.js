// Hi, here's your problem today. This problem was recently asked by Facebook:
//
// You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
//
//   Example:
// Given [4, 7, 1 , -3, 2] and k = 5,
// return true since 4 + 1 = 5.

const findTwoSum = (arr, target) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (map.has(diff)) {
      return true;
    }
    map.set(arr[i], i);
  }

  return false;
};

module.exports = {
  findTwoSum
};
