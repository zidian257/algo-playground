const t = [2, 3, 23, 5, 6, 22, 1];
const s = [2, 3, 23, 5, 6, 7, 1];

const qsort = arr => {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const lt = [];
  const gt = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      gt.push(arr[i]);
    } else lt.push(arr[i]);
  }

  return [...qsort(lt), pivot, ...qsort(gt)];
};

const f = qsort(t);
console.log('f:', f);

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, left, right, pivotIndex = left) => {
  const pivot = arr[pivotIndex];

  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
};

const qsortInp = (arr, left = 0, right = arr.length - 1) => {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');
  let index;
  const length = arr.length;
  if (length > 1) {
    index = partition(arr, left, right);

    if (index - left > 1) {
      qsortInp(arr, left, index - 1);
    }

    if (right - index > 0) {
      qsortInp(arr, index, right);
    }
  }

  return arr;
};

const gg = qsortInp(s)
console.log('gg:', gg);
