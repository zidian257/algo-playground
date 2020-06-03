const { lengthOfLongestSubstring } = require('./index');

test('get correct result', () => {
  expect(lengthOfLongestSubstring('abrkaabcdefghijjxxx')).toBe(10);
  expect(lengthOfLongestSubstring('aaaaa')).toBe(1);
  expect(lengthOfLongestSubstring('')).toBe(0);
});

