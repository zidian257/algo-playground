// Hi, here's your problem today. This problem was recently asked by Google:
//
// Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.
//
//   Example 1:
// Input: [3, 3, 2, 1, 3, 2, 1]
// Output: [1, 1, 2, 2, 3, 3, 3]

const sortNums = nums => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count1++;
    } else if (nums[i] === 2) {
      count2++;
    } else if (nums[i] === 3) {
      count3++;
    }
  }

  let p = 0;

  for (i = 0; i < count1; i++, p++) {
    nums[p] = 1;
  }
  for (i = 0; i < count2; i++, p++) {
    nums[p] = 2;
  }
  for (i = 0; i < count3; i++, p++) {
    nums[p] = 3;
  }

  return nums;
};

module.exports = { sortNums };
