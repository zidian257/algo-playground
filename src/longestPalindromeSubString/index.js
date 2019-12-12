// 这个题目说的是，给你一个字符串，你要在它所有的回文子串中，找到长度最长的子串，并返回它。
//
// 比如说，给你的字符串是：
//
// abcbab
//
// 你要返回的最长回文子串是：
//
// abcba

const s = 'babcbab';

const longestPalindrome = str => {
  let maxCount = 0;
  let ret = str[0];

  let p;
  let q;
  let count = 1;

  for (let i = 0; i < str.length; ++i) {
    p = i;
    q = i;
    count = 1;

    while (str[p] && str[q] && str[p] === str[q]) {
      count += 2;
      if (count > maxCount) {
        maxCount = count;
        ret = str.substring(p, q + 1);
      }
      p--;
      q++;
    }

    p = i;
    q = i + 1;
    count = 2;

    while (str[p] && str[q] && str[p] === str[q]) {
      count += 2;
      if (count > maxCount) {
        maxCount = count;
        ret = str.substring(p, q + 1);
      }
      p--;
      q++;
    }
  }

  return ret;
};

const gg = longestPalindrome(s);

console.log('gg:', gg);
