// 这个题目说的是，给你一个 n 阶的楼梯，每次你可以爬 1 阶或 2 阶，你要求出爬完这个楼梯有多少种不同的方法。
//
// 比如说，楼梯只有 1 阶，显然你只有一种爬法，就是爬 1 阶，然后到顶。
//
// 再比如说，楼梯有 2 阶，那么你可以用两次 1 阶爬到顶，也可以用一次 2 阶爬到顶。共 2 种爬法。

// f(n) = f(n-1) + f(n-2)

const climbStairRecursive = n => {
  if (n === 1 || n === 0) {
    return 1;
  } else return climbStairRecursive(n - 1) + climbStairRecursive(n - 2);
};

const climbStairDP = n => {
  if (n < 2) return 1;

  let first = 1;
  let second = 1;
  let third;

  for (let i = 2; i <= n; ++i) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
};

const gg = climbStairDP(20) === climbStairRecursive(20);
console.log('gg:', gg);
