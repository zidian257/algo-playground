const { lengthOfLongestSubstring } = require('./index');

test('get correct result', () => {
  expect(lengthOfLongestSubstring('abrkaabcdefghijjxxx').val).toBe(10);
  expect(lengthOfLongestSubstring('aaaaa').val).toBe(1);
  expect(lengthOfLongestSubstring('').val).toBe(0);
});

