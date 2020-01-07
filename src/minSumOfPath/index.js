// 这个题目说的是，给你一个 m x n 的整数矩阵，你要计算从矩阵的左上角到右下角的所有路径中，最小的路径和。路径的移动方向只能是向右或向下。
//
// 比如说，给你的矩阵 a 是：
//
//  1, 2, 1
//  8, 4, 1
// -8, 2, 1
//
// 对于这个矩阵，从左上角走到右下角，和最小的一条路径是 1,8,-8,2,1，它的和是 4，因此你需要返回 4。

const matrix = [
  [1, 2, 1],
  [8, 4, 1],
  [-8, 2, 1]
];

const set = obj => x => y => value => {
  obj[`${x}-${y}`] = value;
};

const get = obj => x => y => obj[`${x}-${y}`];

const minSumOfPath = a => {
  const m = a.length;
  const n = a[0].length;

  const b = {};

  const setb = set(b);
  const getb = get(b);
  let i = 0;
  let j = 0;

  setb(0)(0)(a[0][0]);

  for (i = 1; i < n; ++i) {
    setb(0)(i)(a[0][i] + getb(0)(i - 1));
  }

  for (i = 1; i < m; ++i) {
    setb(i)(0)(a[i][0] + getb(i - 1)(0));
  }

  for (i = 1; i < n; ++i) {
    for (j = 1; j < m; ++j) {
      setb(i)(j)(Math.min(getb(i)(j - 1), getb(i - 1)(j)) + a[i][j]);
    }
  }

  return getb(n - 1)(m - 1);
};

const minSumOfPath2D = a => {
  const m = a.length;
  const n = a[0].length;

  const b = [];

  let i = 0;
  let j = 0;

  b[0] = a[0][0];

  for (i = 1; i < n; ++i) {
    b[i] = b[i - 1] + a[0][i];
  }

  for (i = 1; i < m; ++i) {
    b[0] = a[i][0] + b[0];
    for (j = 1; j < n; ++j) {
      b[j] = Math.min(b[j - 1], b[j]) + a[i][j];
    }
  }

  return b[m - 1];
};

const gg = minSumOfPath2D(matrix);

console.log('gg:', gg);
