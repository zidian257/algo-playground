// 这个题目说的是，给你一个递增排序的整数数组 nums，和一个目标值 target。
// 你要在数组里找到 target，然后返回它的下标。如果找不到则返回 -1。
//
// 比如说，给你的数组是：
//
// -2, 0, 2, 4, 5, 8, 9
//
// 给你的目标值是 5。5 在这个数组中，找到后返回它的下标 4 即可。

const a = [-2, 0, 2, 4, 5, 8, 9];

const bin_search = (nums, target) => {
  if (!nums) {
    return -1;
  }
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      return mid;
    }
  }
  return -1;
};

const left_bound = (nums, target) => {
  if (!nums) {
    return -1;
  }
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      right = mid - 1;
    }
  }

  if (nums[left] !== target || left > nums.length) {
    return -1;
  }

  return left;
};

const right_bound = (nums, target) => {
  if (!nums) {
    return -1;
  }
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      left = mid + 1;
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1;
  }

  return right;
};

module.exports = { bin_search, left_bound, right_bound };
