// 这个题目说的是，给你两个整数，在不使用 +/- 这两个运算符的前提下，求它们的和。

const getSumRecursive = (a, b) => {
  return b === 0 ? a : getSumRecursive(a ^ b, (a & b) << 1);
};

const getSum = (a, b) => {
  while (b !== 0) {
    let temp = a;
    a = temp ^ b;
    b = (temp & b) << 1;
  }
  return a;
};

const g = getSum(12, -12);
