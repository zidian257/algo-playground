// 这个题目说的是，你要实现一个函数，来计算非负整数 n 的平方根，平方根只需返回整数部分即可。
//
// 比如，使用你实现的函数来计算 9 的平方根是 3：
//
// f(9) = 3
//
// 由于 8 的平方根是 2 点几，使用你实现的函数只需要返回整数部分 2 即可：
//
// sqrt(8) = 2

const sqrt = r => {
  let low = 0;
  let high = r;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let mid2 = mid * mid;

    if (mid2 > r) {
      high = mid - 1;
    } else if (mid2 < r) {
      low = mid + 1;
    } else return mid;
  }
  return high;
};

const gg = sqrt(3);
console.log('gg:', gg);
