// non async compose

// var greet = compose(hello, toUpperCase);
// greet('kevin');

const compose = (...fns) => {
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

const greet = compose(toUpperCase, hello);

greet('bh');
