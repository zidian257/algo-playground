// const a1 = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];

const getFirst = (arr, target) => {
  let mid;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] === target) {
      right = mid - 1;
    }
  }

  if (left >= arr.length || arr[left] !== target) {
    return -1;
  }

  return left;
};

const getLast = (arr, target) => {
  let mid;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] === target) {
      left = mid + 1;
    }
  }

  if (right < 0 || arr[right] !== target) {
    return -1;
  }

  return right;
};

const getRange = (arr, target) => {
  const first = getFirst(arr, target);
  const last = getLast(arr, target);

  return [first, last];
};

module.exports = { getRange };
