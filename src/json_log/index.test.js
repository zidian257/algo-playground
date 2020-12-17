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

  test('circular1', () => {
    const a = { b: {}, c: {} };
    a.b.x = a.c;
    a.b.f = a.c;

    const ret = json_log_recursive(a);
    expect(ret).toBe('{"b":{"x":{},"f":{}},"c":{}}');
  });

  test('circular2', () => {
    const a = { b: {}, c: {} };
    a.b.f = a.c;
    a.c.f = a.b;
    a.c.g = a.b;

    const ret = json_log_recursive(a);

    console.log('ret:', ret);
    // expect(ret).toBe('{"b":{"x":{},"f":{}},"c":{}}');
  });
});
