module.exports.findKthLargestNum = (nums, k) => {
  // O(n + w)
  // w 是值域
  const c = [];

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    c[target] = c[target] ? c[target] + 1 : 1;
  }

  for (let i = 1; i < c.length; i++) {
    c[i - 1] = c[i - 1] || 0;
    c[i] = c[i - 1] + (c[i] || 0);
  }

  for (let i = 0; i < c.length; i++) {
    if (c[i] === k) {
      return i;
    }
  }
  return -1;
};
