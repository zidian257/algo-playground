// 丑数
// 质因数只包含 2 3 5 的整数

const isUglyNum = num => {
  while (num % 2 === 0) num = num / 2;
  while (num % 3 === 0) num = num / 3;
  while (num % 5 === 0) num = num / 5;

  return num === 1;
};
