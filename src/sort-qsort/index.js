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
  if (i === j) {
    return
  }
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const qsortInp = (arr, p = 0, q = arr.length - 1, pivotIndex = 0) => {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');
  if (q - p >= 1) {
    swap(arr, p, pivotIndex)
    const pivot = arr[p];

    let pivotI = p

    for (let i = p; i <= q; i++) {
      if (arr[i] <= pivot) {
        swap(arr, i, pivotI)

      }
    }



  }
};
