// Hi, here's your problem today. This problem was recently asked by Facebook:
//
// Given a list of numbers, where every number shows up twice except for one number, find that one number.
//
// Example:
// Input: [4, 3, 2, 4, 1, 3, 2]
// Output: 1
const sum = arr => arr.reduce((prev, curr) => prev + curr, 0);

const xor = arr => arr.reduce((prev, curr) => prev ^ curr);
// const findNonDupNum = arr => {
//   const singledArr = [...new Set(arr)];
//
//   return 2 * sum(singledArr) - sum(arr);
// };

const findNonDupNum = xor

module.exports = {
  findNonDupNum
};
