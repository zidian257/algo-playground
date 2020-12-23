// non async compose

// var greet = compose(hello, toUpperCase);
// greet('kevin');
// 从右边开始计算
const composeLeft = (...fns) => {
  return function(...args) {
    return fns.reduce((accu, curr, index) => {
      if (index === 0) {
        return curr(...args);
      } else {
        return curr(accu);
      }
    }, 0);
  };
};

const hello = str => console.log(str + ' world!!!');

const toUpperCase = str => str.toUpperCase();

const greet = composeLeft(toUpperCase, hello);

greet('bh');

// 从左边开始计算
const compose = (...fns) => {
  return function(...args) {
    let ret = args;
    let first = true;
    while (fns.length > 0) {
      const fn = fns.pop();
      ret = first ? fn(...args) : fn(ret);
      first = false;
    }
    return ret;
  };
};

const greet2 = compose(hello, toUpperCase);

greet2('bh');
