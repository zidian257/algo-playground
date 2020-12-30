// koa 的 compose

// 使用场景
const mid1 = async (ctx, next) => {
  console.log('in mid1:');
  await next();
  console.log('out mid1:');
};

const mid2 = async (ctx, next) => {
  console.log('in mid2:');
  await next();
  console.log('out mid2:');
};

const compose = (...fns) => {
  fns.forEach(fn => {
    if (typeof fn !== 'function') throw new TypeError('fn must be a function');
  });

  return (ctx, next) => {
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      let fn = fns[i];
      if (i === fns.length) fn = next;
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
};

const myCompose = (...fns) => {
  return (ctx, next) => {
    const createNext = (newNext, oldNext) => {
      return async function() {
        return await newNext(ctx, oldNext);
      };
    };

    let ret = next;
    while (fns.length > 0) {
      const fn = fns.pop();
      // 其实可以使用 reduce
      ret = createNext(fn, ret);
    }

    return ret();
  };
};

const myCompose2 = (...fns) => {
  return (ctx, next) => {
    // 从右边开始 reduce
    return fns.reduceRight(
      // 重点是，每次都返回一个函数，而不是函数执行的结果
      (prev, curr) => () => curr(ctx, prev),
      next
    )();
  };
};

const composed = myCompose2(mid1, mid2);

const sleep = ms =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });

composed({}, async () => {
  console.log('end');

  await sleep(1000);
});
