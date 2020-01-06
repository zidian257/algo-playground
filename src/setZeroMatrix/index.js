// 这个题目说的是，给你一个 m x n 的矩阵，你要把这个矩阵中等于 0 的元素所在的行和列都置 0。
//
// 比如说，给你的矩阵 a 是：
//
//  1, 2, 3
// 4, 0, 6
// 0, 8, 9
//
// 这个矩阵中有两个 0，把它们所在的行和列都置 0 后，得到的矩阵是：
//
//  0, 0, 3
// 0, 0, 0
// 0, 0, 0

const m = [
  [1, 2, 3],
  [4, 0, 6],
  [0, 8, 9]
];

const setZeroMatrix = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  let i = 0,
    j = 0;
  const rows = {};
  const cols = {};

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      if (rows[i] || cols[j]) matrix[i][j] = 0;
    }
  }

  return matrix;
};

const gg = setZeroMatrix(m)

console.log('gg:', gg);
