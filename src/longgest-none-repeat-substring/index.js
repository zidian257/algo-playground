// Given a string, find the length of the longest substring without repeating characters.
// abrkaabcdefghijjxxx
// 10

function lengthOfLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  if (str.length === 1) {
    return 1;
  }
  // abrkaabcdefghijjxxx
  let i = 1;
  let max = 1;
  let currMax = max;
  let prev, curr;
  // 123
  while (i < str.length) {

    prev = str[i - 1];
    curr = str[i];

    if (curr !== prev) {
      currMax += 1;
      i++;
    } else {
      currMax = 1;
      while (prev === curr && i < str.length) {
        i++;
        curr = str[i];
      }
    }
    max = Math.max(currMax, max);
  }

  return max;
}

lengthOfLongestSubstring('abrkaabcdefghijjxxx');

module.exports = { lengthOfLongestSubstring };
