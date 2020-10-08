// counting sort is a stable sorting algorithms
// 计数排序是一个稳定排序。
// 计数排序不是比较排序，因此不被 O(nlog(n)) 的下界限制。



// 计数排序（Counting Sort）是一种线性时间的排序算法。
//
// 它的工作原理是使用一个额外的数组 C ，其中第 i 个元素是待排序数组 arr 中值等于 i 的元素的个数
// 然后根据数组 C 来将 A 中的元素排到正确的位置。
//
// 计数排序的工作过程分为三个步骤：
//
// 计算每个数出现了几次；
// 求出每个数出现次数的前缀和；
// 利用出现次数的前缀和，从右至左计算每个数的排名。

module.exports.counting_sort = arr => {
  // js version
  const c = [];
  const d = [];

  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    if (c[j]) {
      c[j]++;
    } else c[j] = 1;
  }

  for (let i = 0; i < c.length; i++) {
    if (c[i]) {
      while (c[i] > 0) {
        d.push(i);
        c[i]--;
      }
    }
  }

  return d;
};

module.exports.counting_sort_common = arr => {
  // common version
  const c = [];
  const d = [];

  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    if (c[j]) {
      c[j]++;
    } else c[j] = 1;
  }


  for (let i = 1; i < c.length; i++) {
    c[i - 1] = c[i - 1] || 0;
    c[i] = c[i - 1] + (c[i] || 0);
  }

  // c 数组目前是 arr 的 ranking
  // 数组结构: { index: 值, item: ranking 排位 }
  // 按照从 arr.length - 1 开始数
  // 依次把 arr[i] 的 ranking 从 c 取出
  // 把 arr[i] 按照 ranking 塞进 d[ranking] 中
  for (let i = arr.length - 1; i >= 0; i--) {
    const target = arr[i];
    const rank = c[target];
    d[rank] = target;
    c[target] = rank - 1;
  }



  // d[] 是一个 ranking 数组，下标即为原先的 c[] 中的 ranking
  // ranking 这个概念是没有 0 的
  // 计数是从 1 开始的
  // 所以不需要 d[0]

  d.shift()
  return d;
};
