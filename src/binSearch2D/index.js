// 这个题目说的是，给你一个二维数组 matrix，和一个目标值 target。你要在数组里找到这个目标值，然后返回它的行/列下标。如果找不到，则返回 [-1,-1]。
//
// 这个数组的每一行都是递增的，并且每一行的第一个数都比上一行的最后一个数要大。也就是，这个数组可以看成，从左到右、从上到下，呈 Z 字形递增。
//
// 比如说，给你的二维数组是：
//
// 1, 3, 5
// 7, 9, 11
//
// 给你的目标值是 9。9 在这个数组中，找到后返回它的下标 [1, 1] 即可。
//
// 如果给你的目标值是 100。显然它不在这个二维数组中，你要返回 [-1，-1]

const s = [
  [1, 3, 5, 6],
  [7, 8, 89, 100]
  // [123, 444, 999]
];

const binSearch2D = (arr, x) => {
  if (!arr) return [-1, -1];

  const rowLen = arr.length;
  const colLen = arr[0].length;

  const total = colLen * rowLen;

  let low = 0;
  let high = total - 1;
  let p, q, mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    p = Math.floor(mid / colLen);
    q = mid % colLen;

    if (arr[p][q] > x) high = mid - 1;
    else if (arr[p][q] < x) low = mid + 1;
    else return [p, q];
  }

  return [-1, -1];
};

const gg = binSearch2D(s, 2);


console.log('gg:', gg);
