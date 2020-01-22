// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7

const base = [
  [4, 3],
  [1, 2]
];

const transpose = arr => {
  const h = arr.length;
  const w = arr[0].length;

  const ret = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      ret[h - i - 1][h - j - 1] = arr[i][j];
    }
  }

  return ret;
};

const formBase = n => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return base;
  }

  const b = formBase(n - 1);

  const transposed = transpose(b);

  let num = n * n;

  const ret = [];
  const l1 = [];
  let i;
  for (i = 0; i < n; i++) {
    l1.push(num);
    num -= 1;
  }

  ret.push(l1);

  for (i = 1; i < n; i++) {
    ret.push(transposed[i - 1]);
    ret[i].push(num);
    num -= 1;
  }

  return ret;
};

const zhuanquanquan = n => {
  const bb = formBase(n);

  const h = bb.length;
  const w = bb[0].length;

  let log = '';
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      log += n * n + 1 - bb[i][j] + '   ';
    }
    console.log(log);
    log = '';
  }
};

console.log('zhuanquanquan 5')
zhuanquanquan(5);
