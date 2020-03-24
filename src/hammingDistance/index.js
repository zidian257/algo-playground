// 描述
// 这个题目说的是，给你两个整数，你要计算出它们的二进制表示中，相应的二进制位有多少个是不同的。这个不同的个数，也称为这两个整数的汉明距离。
//
// 比如说，给你的两个整数是 3 和 8。它们的二进制表示分别是：
//
// 3: 0011
// 8: 1000
//
// 这两个数有 3 个二进制位是不相同的，因此它们的汉明距离是 3。

const countNumberOfOne = x => {
  let count = 0;
  while (x !== 0) {
    count++;
    x = x & (x - 1);
  }

  return count;
};

const hanmmingDistance = (m, n) => {
  return countNumberOfOne(m ^ n);
};

const mm = hanmmingDistance(3, 4);

console.log('mm:', mm);
