const insertion_sort = arr => {
  if (!Array.isArray(arr)) {
    return;
  }
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    // start from index 1 other than 0
    const toInsertValue = arr[i];
    let j = i;

    while (j > 0 && toInsertValue < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = toInsertValue
  }

  return arr
};

module.exports = { insertion_sort };
