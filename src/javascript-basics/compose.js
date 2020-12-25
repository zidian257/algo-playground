// compose
// compose(g,f) 等价于 args => g(f(args))
// 函数运行顺序从右向左

// 实现与 redux compose 一致
const compose = (...fns) => {
  fns.forEach(fn => {
    if (typeof fn !== 'function') {
      throw new TypeError('fn should be a function');
    }
  });

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((prev, curr) => (...args) => prev(curr(...args)));
};

// compose 用法 1
// 与 pipe 一致的功能
const upper = str => str.toUpperCase();
const hello = str => console.log('hello, ' + str);

const greet = compose(hello, upper);
greet('iuy');

// compose 用法 2
// 作为中间件引擎的存在
// 实现一个洋葱模型

const mid1 = next => options => {
  options.mid1 = true;
  return next(options).then(r => r);
};

const mid2 = next => options => {
  return next(options).then(r => {
    r.mid2 = true;
    return r;
  });
};

const loggerBefore = next => options => {
  console.log('options', options);
  return next(options).then(r => r);
};

const loggerAfter = next => options => {
  return next(options).then(r => {
    console.log('res', r);
    return r;
  });
};

const req = option => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ resolve: 3 });
    }, 1000);
  });
};

const newReq = compose(loggerAfter, mid2, mid1, loggerBefore)(req);

newReq({ config: '3' });
