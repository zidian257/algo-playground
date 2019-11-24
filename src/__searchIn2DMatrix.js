// 这个题目说的是，给你一个二维数组 matrix，和一个目标值 target。你要在数组里找到这个目标值，然后返回它的行/列下标。如果找不到，则返回 [-1,-1]。
//
// 这个数组的每一行都是从左向右递增，每一列都是从上到下递增。和「二维数组的二分搜索」不同，这道题目并不保证每一行的第一个数都比上一行的最后一个数要大。
//
// 比如说，给你的二维数组是：
//
// 1, 3, 5, 7, 9
// 2, 4, 6, 8, 10
// 3, 5, 7, 9, 11
// 给你的目标值是 4。目标值 4 在这个数组中，找到后返回它的下标 [1, 1] 即可。
//
// 如果给你的目标值是 100，显然它不在这个二维数组中，你要返回 [-1，-1]。

const matrix = [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11]];

const searchIn2DArray = (arr, target) => {
  let noFind = [-1, -1];
  const matrixWidth = matrix[0].length;
  const matrixHeight = matrix.length;

  if (!matrix || matrixHeight === 0) {
    return noFind;
  }

  // 指向右上角
  let i = 0,
    j = matrixWidth - 1;

  while (i < matrixHeight && j >= 0) {
    if (target < matrix[i][j]) --j;
    else if (target > matrix[i][j]) ++i;
    if (target === matrix[i][j]) return [i, j];
  }

  return noFind;
};

const ret = searchIn2DArray(matrix, 11);
console.log("ret:", ret);
