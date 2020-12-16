const { deepClone } = require('./index');

// string to string
describe('deep clone work for', function() {
  test('json object to json object', function() {
    expect(deepClone({ a: 3 })).toEqual({ a: 3 });
  });
});
