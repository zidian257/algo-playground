// 归并排序是一种采用了 分治 思想的排序算法。
//
// 归并排序分为三个过程：
//
// 将数列划分为两部分（在均匀划分时时间复杂度为 O(nlog(n)) ）；
// 递归地分别对两个子序列进行归并排序；
// 合并两个子序列。
// 不难发现，归并排序的核心是如何合并两个子序列，前两步都很好实现。
//
// 其实合并的时候也不难操作。注意到两个子序列在第二步中已经保证了都是有序的了
// 第三步中实际上是想要把两个有序的序列合并起来

const temp = []; // 辅助存储数组

const merge_sort = (arr, start = 0, end = arr.length - 1) => {
  if (end <= start) return; // 至少 sort 2 个数，1 个数没必要

  // 划分的中点
  const mid = Math.floor((start + end) / 2);

  merge_sort(arr, start, mid);
  merge_sort(arr, mid + 1, end);

  let i = end; // 从最右侧，即两个有序数组中的最大值开始
  let p = mid;
  let q = end;

  // 左侧数组和右侧数组的最左边为边界
  while (p >= start && q >= mid + 1) {
    if (arr[p] < arr[q]) {
      // 借助辅助数组
      // 原地操作不可行
      temp[i--] = arr[q--];
    } else {
      temp[i--] = arr[p--];
    }
  }

  // p 或者 q 可能会先到达边界
  // 搬运剩余的有序数组
  while (q >= mid + 1) temp[i--] = arr[q--];
  while (p >= start) temp[i--] = arr[p--];

  // 还原辅助数组
  for (let j = start; j <= end; j++) {
    arr[j] = temp[j];
  }

  return arr;
};

module.exports = { merge_sort };
