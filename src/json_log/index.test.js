const { json_log_recursive } = require('./index');

const x = { a: 3, b: { c: 4, d: [{ a: 3 }, 4, null, undefined, false, 'gg'] } };

describe('json', () => {
  test('json', function() {
    expect(json_log_recursive(x)).toBe(JSON.stringify(x));
  });

  test('circular', () => {
    const a = { b: {}, c: {} };
    a.b.f = a.c;
    a.c.f = a.b;

    const ret = json_log_recursive(a);
    expect(ret).toBe(
      '{"b":{"f":{"f":"[[circular structure]]"}},"c":{"f":{"f":"[[circular structure]]"}}}'
    );
  });
});
