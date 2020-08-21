// You are given two string representing two non-negative integers.
//
// Add the two numbers and return it as a string
//
//   Example:
// Input: '245' + '1564'
// Output: '1809'

const add = (s1, s2) => {
  let p = s1.length - 1;
  let q = s2.length - 1;
  let v1, v2, sum;
  let res = '';
  let carry = 0;

  while (s1[p] || s2[q]) {
    if (s1[p]) {
      v1 = +s1[p];
      p = p - 1;
    } else v1 = 0;

    if (s2[q]) {
      v2 = +s2[q];
      q = q - 1;
    } else v2 = 0;

    sum = v1 + v2 + carry;

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    res = sum.toString() + res;
  }

  return res;
};




module.exports = { add };
