// Hi, here's your problem today. This problem was recently asked by Facebook:
//
// You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
//
//   Example:
// Given [4, 7, 1 , -3, 2] and k = 5,
// return true since 4 + 1 = 5.

const arr = [4, 7, 1, -3, 2];
const target = 5;

const { findTwoSum } = require('./index');

test('two sum', () => {
  expect(findTwoSum(arr, target)).toBe(true);
});
