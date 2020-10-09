const swap = (arr, p, q) => {
  const temp = arr[q];
  arr[q] = arr[p];
  arr[p] = temp;
};

const partition = (arr, p, q) => {
  const pivot = arr[q]; // selecting last element as pivot

  // let storeIndex = q;
  // for (let i = p; i < q; i++) {
  //   if (arr[i] > pivot) {
  //
  //   }
  // }
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
module.exports = { quick_sort };
