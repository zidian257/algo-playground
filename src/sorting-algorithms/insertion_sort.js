// 稳定性
// 插入排序是一个稳定排序。
//
// 时间复杂度
// 插入排序的最坏时间复杂度和平均时间复杂度都为 O(n2) ，但其最优时间复杂度为 O(n)，在数列几乎有序时效率很高。

const insertion_sort = arr => {
  if (!Array.isArray(arr)) {
    return;
  }
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    // start from index 1 other than 0
    const toInsertValue = arr[i];
    let j = i;

    while (j > 0 && toInsertValue < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = toInsertValue
  }

  return arr
};

module.exports = { insertion_sort };
