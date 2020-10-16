// 桶排序
// 时间复杂度
// 桶排序的平均时间复杂度为 O(n + n²/ k + k) （将值域平均分成 n 块 + 排序 + 重新合并元素）
// k 约等于 n 时为 O(n)
// 桶排序的最坏时间复杂度为O(n²)  。


const insertion_sort = arr => {
  if (arr.length === 0) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    const toInsertValue = arr[i];
    let j = i;
    while (j > 0 && toInsertValue < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = toInsertValue;
  }
  return arr;
};

const bucket_sort = (arr, w, count = 10) => {
  const bucket_size = Math.floor(w / count + 1);

  const buckets = [];
  buckets.length = count;
  for (let i = 0; i < arr.length; i++) {
    const b = buckets[Math.floor(arr[i] / bucket_size)];

    if (Array.isArray(b)) {
      b.push(arr[i]);
    } else buckets[Math.floor(arr[i] / bucket_size)] = [arr[i]];
  }

  let p = 0
  for (let i = 0; i < count; i++) {
    buckets[i] = buckets[i] || [];
    insertion_sort(buckets[i]);

    for (let j = 0; j < buckets[i].length; j++) {
      arr[p++] = buckets[i][j];
    }
  }

  return arr;
};

module.exports = { bucket_sort };
