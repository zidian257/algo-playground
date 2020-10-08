// 通常而言，基数排序比基于比较的排序算法（比如快速排序）要快。但由于需要额外的内存空间
// 因此当内存空间稀缺时，原地置换算法（比如快速排序）或许是个更好的选择

// 稳定性
// 基数排序是一种稳定的排序方法

// 空间复杂度
// 基数排序的空间复杂度为 O(k + n),其中 k 是 key 的个数

// 基数排序（Radix Sort）是一种非比较型的排序算法，最早用于解决卡片排序的问题。
//
// 它的工作原理是从左至右，将待排序的元素拆分为 k 个关键字
// （比较两个元素时，先比较第一关键字，如果相同再比较第二关键字……）
// 然后先对第 k 关键字进行稳定排序，再对第 k - 1 关键字进行稳定排序，再对第 k - 2 关键字进行稳定排序……
// 最后对第一关键字进行稳定排序，这样就完成了对整个待排序序列的稳定排序。

const radix_sort = (arr, total) => {
  const getKthKey = (num, k) => {
    const str = num.toString().padStart(total, '0');
    return +str[k - 1];
  };

  const counting_sort_kth = (arr, k) => {
    const c = []; // ranking 数组结构: { index: 值, item: ranking 排位 }
    const d = []; // 返回数组

    for (let i = 0; i < arr.length; i++) {
      const t = getKthKey(arr[i], k);
      c[t] = (c[t] || 0) + 1;
    }

    // 前缀和
    for (let i = 1; i < c.length; i++) {
      c[i - 1] = c[i - 1] || 0;
      c[i] = c[i - 1] + (c[i] || 0);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const target = getKthKey(arr[i], k);
      const rank = c[target];
      d[rank] = arr[i];
      c[target] = rank - 1;
    }

    d.shift();
    return d;
  };

  let res = arr
  for (let i = total; i >= 0; i--) {
    res = counting_sort_kth(res, i);
  }

  return res;
};

module.exports = { radix_sort };
