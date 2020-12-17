const { json_log_recursive } = require('./index');

const x = { a: 3, b: { c: 4, d: [{ a: 3 }, 4, null, undefined, false, 'gg'] } };

describe('json', () => {
  test('json', function() {
    expect(json_log_recursive(x)).toBe(JSON.stringify(x));
  });
});
