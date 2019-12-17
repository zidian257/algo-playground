// 这个题目说的是，给你一个非负整数数组，数组中的数字表示高度值，在平面坐标画出来后，连同 X 轴一起，
// 会形成许多的凹槽。你要找到两个高度值，使其形成的凹槽所能容纳的水最多。最后返回容纳的水量。

const arr = [2, 4, 5, 9, 7, 12];

const maxWater = h => {
  let i = 0;
  let j = arr.length - 1;
  let max = 0;
  while (i < j) {
    const gap = Math.max(h[j], h[i]) - Math.min(h[j], h[i]);
    const area = gap * (j - i);

    max = Math.max(area, max);
    i++;
    j--;
  }

  return max;
};

const gg = maxWater(arr);
console.log('gg:', gg);
