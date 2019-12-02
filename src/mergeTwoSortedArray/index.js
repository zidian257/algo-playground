// 这个题目说的是，给你两个递增排序的数组，你要把第二个数组合并到第一个，并使其仍然保持递增排序。两个数组中的元素个数会显式地给出，并且第一个数组的大小可以容纳下两个数组中所有的元素。
//
// 比如说给你的两个数组是：
//
// 2, 4, _, _
// 1, 3
//
// 它们都有 2 个元素。并且第一个数组后面有足够的空间来填充第二个数组。把第二个数组合并到第一个数组后，得到的是：
//
// 1, 2, 3, 4

let a1 = [2, 4, , , , , ,];
let a2 = [1, 3];

// 2, 4, 2, 4

const mergeTwoSortedArray = (arr1, m, arr2, n) => {
  let i = m + n - 1;
  let p = m - 1,
    q = n - 1;

  while (p >= 0 && q >= 0) {
    if (arr1[p] > arr2[q]) {
      arr1[i--] = arr1[p--];
    } else {
      arr1[i--] = arr2[q--];
    }
  }

  while (q >= 0) arr1[i--] = arr2[q--];
  return arr1;
};

const gg = mergeTwoSortedArray(a1, 2, a2, 2);
console.log('gg:', gg);
