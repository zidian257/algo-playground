const swap = (arr, p, q) => {
  const temp = arr[q];
  arr[q] = arr[p];
  arr[p] = temp;
};

const partition = (arr, p, q) => {
  if (q === p + 1) {
    // 如果只有 2 位
    if (arr[p] > arr[q]) {
      swap(arr, p, q);
    }
    return p;
  }

  // 快速排序就是每次在递归区间内，将基准数字归位的过程
  const pivotIndex = Math.floor((p + q) / 2);
  const pivot = arr[pivotIndex]; // 选择 (p+q)/2 为基准

  swap(arr, pivotIndex, q); // 把基准放到最后一位

  let i = p,
    j = q - 1;

  while (i < j) {
    // 终止条件是 i j 相等

    // 先从左边向右找到比 pivot 大的
    while (arr[i] <= pivot && i < j) i++;
    // 从右边向左找到比 pivot 小的
    while (arr[j] >= pivot && i < j) j--;
    // 交换
    swap(arr, i, j);
  }

  // 基准归位
  swap(arr, i, q);

  return i;
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
  if (right > left) {
    // 确保 sort 至少 2 个元素
    const pivotIndex = partition(arr, left, right);
    quick_sort(arr, left, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, right);
  }

  return arr;
};

const quick_sort_non_recursive = (arr, left = 0, right = arr.length - 1) => {
  const stack = [];

  if (right > left) {
    const pivotIndex = partition(arr, left, right);
    stack.push({ left, right: pivotIndex - 1 });
    stack.push({ left: pivotIndex + 1, right });
  }

  while (stack.length > 0) {
    const { left, right } = stack.pop();

    if (right > left) {
      const pivotIndex = partition(arr, left, right);
      stack.push({ left, right: pivotIndex - 1 });
      stack.push({ left: pivotIndex + 1, right });
    }
  }

  return arr;
};
module.exports = { quick_sort, quick_sort_non_recursive };
