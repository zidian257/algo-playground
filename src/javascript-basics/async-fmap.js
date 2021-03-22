let executeCount = 0;

const fn = async nums => {
  executeCount++;

  return nums.map(n => 2 * n + 2);
};

const batch = fn => {
  // todo
  let cachedArr = [];

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn(cachedArr));
    }, 0);
  });

  return async nums => {
    const start = cachedArr.length;
    cachedArr = cachedArr.concat(nums);
    const end = cachedArr.length;

    const data = await p;

    return data.slice(start, end);
  };
};

const batchedFn = batch(fn);

async function main() {
  const [r1, r2, r3] = await Promise.all([
    batchedFn([1, 3, 4]),
    batchedFn([1, 2]),
    batchedFn([1])
  ]);

  console.log('executeCount:', executeCount);
  console.log('r1:', r1);
  console.log('r2:', r2);
  console.log('r3:', r3);
}

main();
