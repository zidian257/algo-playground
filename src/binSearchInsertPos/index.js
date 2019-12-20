// 描述
// 这个题目说的是，给你一个递增排序的整数数组 nums，和一个目标值 target。
// 你要在数组里找到 target，然后返回它的下标。如果找不到，则返回目标值应该插入的位置的下标，要求插入目标值后，数组仍然保持有序。

const a = [-2, 0, 2, 4, 5, 8, 9, 10];

const binSearchInsert = (r, x) => {
  if (!r) {
    return -1;
  }

  let low = 0;
  let high = r.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (r[mid] > x) high = mid - 1;
    else if (r[mid] < x) low = mid + 1;
    else return mid;
  }

  return low
};


const gg = binSearchInsert(a, 3)
console.log('gg:', gg);
