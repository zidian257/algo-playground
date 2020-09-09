const { binSearch } = require('./index');

const a = [-2, 0, 2, 4, 5, 8, 9];

describe('binSearch', function() {
  test('works', function() {
    expect(binSearch(a, 5)).toBe(4);
  });
});
