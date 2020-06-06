const { getRange } = require('./index');

const a1 = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
const t1 = 9;
const a2 = [100, 150, 150, 153],
  t2 = 150;

const a3 = [1, 2, 3, 4, 5, 6, 10],
  t3 = 9;

test('getRange', () => {
  expect(getRange(a1, t1)).toEqual([6, 8]);
  expect(getRange(a1, 1)).toEqual([0, 0]);
  expect(getRange(a2, t2)).toEqual([1, 2]);
  expect(getRange(a3, t3)).toEqual([-1, -1]);
});
