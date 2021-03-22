let executeCount = 0;

const fn = async nums => {
  executeCount++;

  return nums.map(n => 2 * n + 2);
};

const batch = fn => {
  let cachedArr = [];

  // 使用 setTimout 是推到 MacroTask 队列
  // const p = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(fn(cachedArr));
  //   }, 0);
  // });

  // 使用 Promise.resolve 是推到 MicroTask 队列
  // 两者相同的地方，是在于使用了同一个 promise 实例，在不同的地方调用 then 方法
  // 使得 promise 进行了 branching
  const p = Promise.resolve().then(_ => fn(cachedArr));

  return nums => {
    const start = cachedArr.length;
    cachedArr = cachedArr.concat(nums);
    const end = cachedArr.length;

    return p.then(data => data.slice(start, end));
  };
};

const batchedFn = batch(fn);

async function main() {
  const [r1, r2, r3, r4] = await Promise.all([
    batchedFn([1, 3, 4]),
    batchedFn([1, 2]),
    batchedFn([1]),
    batchedFn([1])
  ]);

  console.log('executeCount:', executeCount);
  console.log('r1:', r1);
  console.log('r2:', r2);
  console.log('r3:', r3);
  console.log('r4:', r4);
}

main();
