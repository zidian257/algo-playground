// 这个题目说的是，给你一个区间集合，你要把有重叠的区间合并起来。
//
// 比如说，给你的区间集合是：
//
// [1, 8]
//   [2, 4]
//   [9, 10]
//   [10, 16]
//
// 这 4 个区间里，[1, 8] 区间包含了 [2, 4] 区间，于是它们合并后是 [1, 8]。
//
// [9, 10] 区间和 [10, 16] 区间相邻，合并起来后是 [9, 16]。最后得到合并后的区间有两个：
//
// [1, 8]
//   [9, 16]

const intervals = [
  [1, 8],
  [2, 4],
  [9, 10],
  [10, 16],
  [4, 7]
];

const merge = intervals => {
  const sortedInterval = intervals.sort(
    (interval1, interval2) => interval1[0] - interval2[0]
  );
  let ret = [];

  for (let interval of sortedInterval) {
    if (ret.length === 0) {
      ret.push(interval);
      continue;
    }
    const [left, right] = interval;
    let [, rightMax] = ret[ret.length - 1];

    if (left > rightMax) {
      ret.push([left, right]);
    } else {
      if (right > rightMax) {
        ret[ret.length - 1][1] = right;
      }
    }
  }

  return ret;
};

const gg = merge(intervals);
console.log('gg:', gg);
