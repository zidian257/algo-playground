// 这个题目说的是，给你一个字符串，你要在它所有的回文子串中，找到长度最长的子串，并返回它。
//
// 比如说，给你的字符串是：
//
// abcbab
//
// 你要返回的最长回文子串是：
//
// abcba

// const first = () =>
//   new Promise((resovle, reject) => {
//     console.log(1)
//     const p = new Promise((resovle, reject) => {
//       console.log(2)
//       setTimeout(() => {
//         console.log(3)
//         resovle(4)
//       }, 0)
//       resovle(5)
//     })
//     resovle(6)
//     p.then(arg => {
//       console.log(arg)
//     })
//   })
// first().then(arg => {
//   console.log(arg)
// })
// console.log(7)

// const longestPalindrome = str => {
//   let maxCount = 0;
//   let ret = str[0];
//
//   let p;
//   let q;
//   let count = 1;
//
//   for (let i = 0; i < str.length; ++i) {
//     p = i;
//     q = i;
//     count = 1;
//
//     while (str[p] && str[q] && str[p] === str[q]) {
//       count += 2;
//       if (count > maxCount) {
//         maxCount = count;
//         ret = str.substring(p, q + 1);
//       }
//       p--;
//       q++;
//     }
//
//     p = i;
//     q = i + 1;
//     count = 2;
//
//     while (str[p] && str[q] && str[p] === str[q]) {
//       count += 2;
//       if (count > maxCount) {
//         maxCount = count;
//         ret = str.substring(p, q + 1);
//       }
//       p--;
//       q++;
//     }
//   }
//
//   return ret;
// };

const expand = (str, left, right) => {
  while (str[left] === str[right] && left >= 0 && right <= str.length - 1) {
    left--;
    right++;
  }
  return right - left - 1;
};

// aba
// abba

const longestPalindrome = str => {
  if (typeof str !== 'string') {
    return -1;
  }
  if (str.length < 2) {
    return str;
  }

  let start;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const len1 = expand(str, i, i);
    const len2 = expand(str, i, i + 1);

    const len = Math.max(len1, len2);

    if (len > max) {
      max = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return str.substring(start, start + max);
};

module.exports = { longestPalindrome };
