const swap = (arr, p, q) => {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
};

const bubble_sort = arr => {
  let flag = true;

  while (flag) {
    flag = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        swap(arr, i + 1, i);
        flag = true;
      }
    }
  }

  return arr
};

module.exports = { bubble_sort };
