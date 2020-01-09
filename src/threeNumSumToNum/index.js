// 这个题目说的是，给你一个整数数组，你要找到数组中三个数相加等于 0 的所有可能组合。返回的答案里，每个组合都是唯一的，不能重复。
//
// 比如说，给你的数组是：
//
// -1, 0, -1, 0, 1, 0, -4
//
// 这个数组中有两个组合，使得三个数相加等于 0。第一个组合是：
//
// -1, 0, 1
//
// 虽然数组里有 3 个 0，两个 -1，但不管用哪个 0 或 -1，组合 -1,0,1 都只算一个。另一个有效的组合是：
//
// 0, 0, 0

const a = [1, -1, 0, -1, 0, 1, 0, -4];

// -4, -1, 0, 1

const threeNumToSumOn3 = nums => {
  let x, y, z;
  const len = nums.length;
  const ret = [];

  nums = nums.sort((a, b) => a - b);
  const set = {};

  for (x = 0; x < len; x++) {
    for (y = x + 1; y < len; y++) {
      for (z = y + 1; z < len; z++) {
        if (nums[x] + nums[y] + nums[z] === 0) {
          if (!set[`${nums[x]}-${nums[y]}-${nums[z]}`]) {
            set[`${nums[x]}-${nums[y]}-${nums[z]}`] = true;
            ret.push([nums[x], nums[y], nums[z]]);
          }
        }
      }
    }
  }

  return ret;
};

const threeNumToSumOn2 = nums => {
  const ret = [];
  nums = nums.sort((a, b) => a - b);
  console.log('nums:', nums);
  const len = nums.length;
  let x, y, z;
  for (z = len - 1; z >= 2; z--) {
    if (nums[z] < 0) {
      break;
    }
    x = 0;
    y = z - 1;
    while (x < y) {
      if (nums[x] + nums[y] + nums[z] === 0) {
        ret.push([nums[x], nums[y], nums[z]]);
        while (x < y && nums[x] === nums[x + 1]) ++x;
        while (x < y && nums[y] === nums[y - 1]) --y;
        ++x;
        --y;
      } else if (nums[x] + nums[y] + nums[z] < 0) {
        ++x;
      } else {
        --y;
      }
    }

    while (z >= 2 && nums[z] === nums[z - 1]) z--;
  }
  return ret;
};

const gg = threeNumToSumOn2(a);

console.log('gg:', gg);
