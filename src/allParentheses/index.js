// 这个题目说的是，给你 n 对括号，你要返回这 n 对括号的所有合法排列方式。
//
// 比如说，n 等于 3 时，合法的排列有 5 个：
//
//  ((()))
//  (()())
//  (())()
//  ()(())
//  ()()()

const generate = (ret, str, left, right) => {
  if (left === 0 && right === 0) {
    ret.push(str);
  } else {
    left > 0 && generate(ret, str + '(', left - 1, right);
    right > left && generate(ret, str + ')', left, right - 1);
  }
};

const allParentheses = n => {
  if (n <= 0) {
    return [];
  }
  const ret = [];
  generate(ret, '', n, n);

  return ret;
};

const gg = allParentheses(4);

console.log('gg:', gg);
