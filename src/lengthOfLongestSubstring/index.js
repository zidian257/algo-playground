// 这个题目说的是，给你一个字符串，你要找到没有重复字符的最长子串，然后返回它的长度。
//
// 比如说给你的字符串 s 是：
//
// abcabcbb
//
// 没有重复字符的最长子串是 abc，这里再往下的字符是 a，和前面这个 a 重复了。
//
// 后面满足条件的子串还有 bca，cab，abc 等，不过它们的长度都是 3 ，因此返回的长度为 3。
//
// 再比如说 ddd，没有重复字符的最长子串就是一个 d，因此你要返回的长度是 1。

const s = 'abcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*&*我试试';

// O(n)
const lengthOfLongestSubstring2N = str => {
  let i = 0;
  let num = 1;
  let maxLength = 0;

  console.log('str.length:', str.length);
  const p = {};

  for (; i < str.length; ++i) {
    p[str[i]] = true;
    for (let j = i + 1; j < str.length; ++j) {
      console.count('logged');
      const record = p[str[j]];
      if (record) {
        num = j - i;
        break;
      } else {
        p[str[j]] = true;
        num += 1;
      }
    }
    maxLength = Math.max(maxLength, num);
    p[str[i]] = false;
    num = 1;
  }

  return maxLength;
};


const gg = lengthOfLongestSubstring2N(s);

console.log('gg:', gg);
