// 描述
// 这个题目说的是，你要实现一个函数，用它来计算浮点数的 n 次方。
//
// 比如说，给你 2 和 11，你要计算出 2 的 11 次方的结果：
//
// f(2, 11) = 211

const pow = (base, n) => {
  let result = 1;
  for (let i = 0; i < n; ++i) result *= base;
  return result;
};

const powFast = (base, n) => {
  let result = 1;
  while (n !== 0) {
    if ((n & 1) === 1) {
      result *= base;
    }
    base *= base;
    n = n >> 1;
  }
  return result;
};

const gg = powFast(2, 2);
console.log("gg:", gg);
