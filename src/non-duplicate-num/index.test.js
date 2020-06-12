const { findNonDupNum } = require('./index');

const arr = [4, 3, 2, 4, 1, 3, 2];
test('findNonDupNum', () => {
  expect(findNonDupNum(arr)).toBe(1);
});
