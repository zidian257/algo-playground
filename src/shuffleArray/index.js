// 这个题目说的是，给你一个整数数组表示一副牌，你要写一个随机洗牌函数来返回这个数组的一个排列。
// 并且要保证每次返回的排列都是等概率的。假设已经给你一个完美的随机数生成器。

const arr = [23, 43, 677, 321, 3, 4, 7];

const rnd = n => Math.floor(n * Math.random());
// const rnd = n => 0;

const swap = (array, x, y) => {
  if (x === y) {
    return;
  }
  let temp = array[y];
  array[y] = array[x];
  array[x] = temp;
};

function shuffle(a) {
  const ret = a.slice();

  const length = ret.length;
  let j;

  for (let i = length - 1; i > 0; i--) {
    j = rnd(i + 1);
    swap(ret, i, j);
  }
  return ret;
}

const gg = shuffle(arr);
// const gg = rnd(3);

console.log('gg:', gg);
