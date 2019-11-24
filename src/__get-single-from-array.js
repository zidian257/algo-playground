// 这个题目说的是，给你一个非空的整数数组，这个数组中有一个整数只出现了一次，其它的整数都出现两次，你要找出这个只出现一次的整数。

const arr = [15, 6, 7, 7, 8, 8, 6];
const singleNumberWithSet = arr => {
  const set = new Set(arr);

  let arrSum = arr.reduce((accu, current) => accu + current, 0);
  let setSum = 0;
  set.forEach(item => {
    setSum += 2 * item;
  });
  return setSum - arrSum;
};

const singleNumberWithXor = arr => arr.reduce((accu, curr) => accu ^ curr);

const five = singleNumberWithXor(arr);

console.log("five:", five);
