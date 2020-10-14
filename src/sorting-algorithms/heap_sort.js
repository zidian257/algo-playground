const swap = (arr, p, q) => {
  const temp = arr[q];
  arr[q] = arr[p];
  arr[p] = temp;
};

const max_heapify = (arr, start, end) => {
  let dad = start;
  let son = dad * 2 + 1;

  while (son <= end) {
    if (son + 1 <= end && arr[son] < arr[son + 1]) {
      // 两个子树节点，挑一个大的
      son++;
    }

    if (arr[dad] > arr[son]) return;
    // 不需要调整，是完整堆
    else {
      // 需要调整
      // 交换 父子节点
      swap(arr, dad, son);

      // 交换后，继续排序子树
      dad = son;
      son = dad * 2 + 1;
    }
  }
};

const heap_sort = arr => {
  const lastParentIndex = Math.floor((arr.length - 1) / 2);
  for (let i = lastParentIndex; i >= 0; i--) {
    // 从最后一个父节点开始，逐个向左建堆
    max_heapify(arr, i, arr.length - 1);
  }

  // 建最大堆完成，每次取出堆顶元素，放在指针那一位
  // 再重新建堆
  // 指针左移
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, i, 0);
    max_heapify(arr, 0, i - 1);
  }

  return arr;
};

module.exports = { heap_sort };
