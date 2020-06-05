const { isValidParentheses } = require('./index');

test('isValidParentheses', () => {
  const t = '[[]]';
  const t1 = '[](){}'
  const t2 = '[{}]([]){}'
  const f = '[{}]}';
  expect(isValidParentheses(t)).toBe(true);
  expect(isValidParentheses(f)).toBe(false);
  expect(isValidParentheses(t1)).toBe(true);
  expect(isValidParentheses(t2)).toBe(true);

});
