const { longestPalindrome } = require('./index');

const str = 'sabcbab';
test('alg works', () => {
  expect(longestPalindrome(str)).toBe('abcba');
});
