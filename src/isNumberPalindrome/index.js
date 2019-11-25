// 这个题目说的是，给你一个整数，你要判断它是否是一个回文数字。所谓回文数字就是，你正着读和反着读都是同一个数字。
//
// 比如，给你的数字是：
//
// 12321
//
// 无论你从左向右读，还是从右向左读，都是 12321，所以它是一个回文数字，你要返回 true。
//
// 再比如说：
//
// -232
//
// 你从左向右读是 -232，但从右向左读则是 232-，和 -232 不一样，因此它不是一个回文数字，你要返回 false。

const isPalindromeString = num => {
  if (!num) {
    return false;
  }

  const str = num.toString();
  const n = str.length;

  let i = 0;
  let j = n - 1;

  while (i <= j) {
    if (str[i] !== str[j]) return false;
    ++i;
    --j;
  }
  return true;
};

const isPalindromeString2 = num => {
  if (typeof (num) !== 'number') {
    return false;
  }
  let y = 0;
  let tmp = num;

  while (tmp !== 0) {

    y = y * 10 + tmp % 10;

    tmp = Math.floor(tmp / 10);
  }
  return y === num
};

const gg = isPalindromeString2(0);
console.log('gg:', gg);
