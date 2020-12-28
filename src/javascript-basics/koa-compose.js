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

const myCompose = (fns) => {


  return





}


const composed = compose(mid1, mid2);

composed({}, async () => console.log('end'));
