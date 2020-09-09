const { add } = require('./index');

const getRandom = x => Math.floor(Math.random() * x);

const a = getRandom(20003320).toString();
const b = getRandom(23).toString();

const c = (+a + +b).toString();

describe('add two numbers as a string', () => {
  it('works ', function() {
    expect(add(a, b)).toBe(c);
  });
});
