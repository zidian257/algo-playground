// 这个题目说的是，给你一个字符串，你要判断它是否是回文字符串。字符串里只考虑字母和数字，其它的字符可以无视。另外，对于字母，可以忽略大小写。
//
// 比如说，给你的字符串是：
//
// " race a E-car "
//
// 只考虑字母数字并且忽略大小写，它是一个回文字符串，因此返回 true。再比如说，给你的字符串是
//
// " race a car "
//
// 对比到最后，中间的 e 和 a 不相等，因此不是一个回文字符串，返回 false。

const isAlphabetOrNumber = c =>
  (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "0");

const isEqualIgnoreCase = (a, b) => {
  if (a >= "A" && a <= "Z") {
    a = a.toLowerCase();
  }
  if (b >= "A" && b <= "Z") {
    b = b.toLowerCase();
  }

  return a === b;
};

const isPalindrome = string => {
  if (string.length === 1 || string.length === 0) {
    return true;
  }
  let i = 0;
  let j = string.length - 1;
  for (; i < j; ++i, --j) {
    while (i < j && !isAlphabetOrNumber(string[i])) ++i;
    while (i < j && !isAlphabetOrNumber(string[j])) --j;
    if (i < j && !isEqualIgnoreCase(string[i], string[j])) return false;
  }
  return true;
};

console.log('isPalindrome("race a e car"):', isPalindrome("race a e car"));
console.log('isPalindrome(""):', isPalindrome(""));
