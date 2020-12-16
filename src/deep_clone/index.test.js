const { deepClone } = require('./index');

// string to string
describe('deep clone work for', function() {
  test('json object to json object', function() {
    expect(deepClone({ a: { a: { a: 4 } } })).toEqual({ a: { a: { a: 4 } } });
  });

  test('deep json object to json object', function() {
    expect(
      deepClone({
        a: { a: { a: [4, { b: 3 }] } }
      })
    ).toEqual({
      a: { a: { a: [4, { b: 3 }] } }
    });
  });

  test('json references should be different', function() {
    const ob = { l1: { l2: { l3: [4, { b: 3 }] } } };
    expect(deepClone(ob).l1).not.toBe(ob.l1);
    expect(deepClone(ob).l1.l2).not.toBe(ob.l1.l2);
    expect(deepClone(ob).l1.l2.l3).not.toBe(ob.l1.l2.l3);
  });

  test('circular structure', function() {
    const ob = {
      a: 3,
      c: {
        a: 3,
        b: {
          p: [3, 4, 5]
        }
      }
    };
    ob.b = ob.c.b.p;
    ob.c.b.p[4] = ob.b
    expect(deepClone(ob)).toEqual(ob);
  });
});
