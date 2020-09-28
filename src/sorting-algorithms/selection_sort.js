const swap = (arr, p, q) => {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
};

const selection_sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }

    swap(arr, i, smallestIndex);
  }

  return arr;
};

module.exports = { selection_sort };
