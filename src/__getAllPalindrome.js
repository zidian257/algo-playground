// 这个题目说的是，给你一个字符串，你要计算出它所包含的回文子串个数。只要起始下标或终止下标不同，即使子串相同，我们也认为是不同的回文子串。
//
// 比如说，给你的字符串是：
//
// abc
//
// 这个字符串中总共有 3 个回文子串，分别是 a， b 和 c。因此你要返回的个数是 3。
//
// 再比如说，给你的字符串是：
//
// aba
//
// 这个字符串中总共有 4 个回文子串，分别是 a，b，a，和 aba。因此你要返回的个数是 4。

const str = "aba";

const isPalindrome = str => {
  const length = str.length;

  let i = 0,
    j = length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    ++i;
    --j;
  }

  return true;
};

// O(n3)
const getAllPalindrome = str => {
  if (!str || typeof str !== "string") {
    return 0;
  }
  let count = 0;
  const length = str.length;
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length + 1; ++j) {
      if (isPalindrome(str.substring(i, j))) {
        ++count;
      }
    }
  }
  return count;
};

const expandCount = (str, leftIndex, rightIndex) => {
  let count = 0;
  while (
    str[leftIndex] &&
    str[rightIndex] &&
    str[leftIndex] === str[rightIndex]
  ) {
    count++;
    leftIndex -= 1;
    rightIndex += 1;
  }

  return count;
};

// O(n2) S(1)
const getAllPalindromeExpand = str => {
  if (!str || typeof str !== "string") {
    return 0;
  }

  const length = str.length;
  let count = 0;

  for (let i = 0; i < length; ++i) {
    count += expandCount(str, i, i);
    count += expandCount(str, i, i + 1);
  }
  return count;
};

const name = (i, j) => `${i}-${j}`;

// O(n2) S(n2)
const getAllPalindromeDP = str => {
  if (!str || typeof str !== "string") {
    return 0;
  }
  let count = 0;
  const length = str.length;
  const d = {};

  for (let i = length - 1; i >= 0; --i) {
    for (let j = i; j < length; ++j) {
      if (i === j) {
        d[name(i, j)] = true;
      } else if (i + 1 === j) {
        d[name(i, j)] = str[i] === str[j];
      } else {
        d[name(i, j)] = str[i] === str[j] && d[name(i + 1, j - 1)];
      }

      if (d[name(i, j)]) {
        count++;
      }
    }
  }

  return count;
};

const gg = getAllPalindromeDP("abaa");
console.log("gg:", gg);
