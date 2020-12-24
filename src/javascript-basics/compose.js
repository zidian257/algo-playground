// non async compose

// var greet = compose(hello, toUpperCase);
// greet('kevin');
// 从右边开始计算
const pipe = (...fns) => {
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

const greet = pipe(toUpperCase, hello);

// greet('bh');

// 从右边开始计算
const compose = (...fns) => {
  return function(...args) {
    let ret;
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

// greet2('bh');

// async compose
//

// Un.request(config).then();
//
// Un.request = composeP(mid1, mid2, request);

const mid1 = (config, next) => {
  // do something with config
  return next(config).then(res => {
    // do something with return value
    res.a = 3;
    return res;
  });
};

const mid2 = async (config, next) => {
  // do something with config

  const res = await next(config);

  res.b = 4;
  return res;
};

//
// const request = composeP([mid1, mid2, request])
// request(these).then(that)

const composeP = (middleware, request) => {
  return config => {





    return middleware.reduce((accu, curr) => {
      return curr(config, accu);
    }, request);
  };
};

const originRq = config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        origin: 32
      });
    }, 1999);
  });
};

const logger =  (config, next) => {
  console.log('config:', config);
  return next(config).then(r => {
    console.log(r);

    return r;
  });
};

const request = composeP([mid1, mid2, logger], originRq);

request({
  cf: 32
});
