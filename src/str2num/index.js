// string to number

// 这个题目说的是，给你一个字符串，你要把它转成一个 int 类型的数字。这个字符串里可能会包含空格，字母或是其它字符。
//
// 一个可以有效地转成数字的字符串包含以下特点：
//
// 1. 可以有前导空格或前导 0，但不能有其它前导字符
// 2. 可能会有一个加号或减号表示正负，也可能没有，连续的多个加号或减号则视为不合法
// 3. 紧接着是一段连续的数字，如果没有数字则示为不合法
// 4. 数字后的其它字符都可以忽略
// 5. 如果数字大于 int 的最大值或小于 int 的最小值，返回相应的极值即可
// 6. 字符串如果不能合法地转为整数，则返回 0

// +03

const str2num = str => {
  let num = 0;
  let positive = true;
  const len = str.length;
  let i = 0;
  let start = 0;

  while (i < len && str[i] === ' ') ++i;
  if (i === len) return 0;

  if (str[i] === '+') {
    ++i;
  } else if (str[i] === '-') {
    positive = false;
    ++i;
  }

  while (i < len && str[i] === '0') ++i;
  start = i;

  while (i < len && '9' >= str[i] && str[i] >= '0') {
    num = num * 10 + +str[i];
    ++i;
  }
  if (i === start) return 0;

  if (i - start > 10 || Math.abs(num) > Number.MAX_VALUE) {
    if (positive) return Number.MAX_VALUE;
    else return Number.MIN_VALUE;
  }

  if (positive) return num;
  return -num;
};

const mm = str2num('   -003000303');

console.log('mm:', mm);
