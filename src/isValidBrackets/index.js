// 这个题目说的是，给你一个括号序列，里面包含小括号，中括号和大括号。你要判断这个括号序列是否有效。有效的括号序列要求，每个左括号都必须有一个同类的右括号与它正确配对。另外，空字符串认为是有效的括号序列。
//
// 比如说，给你的序列是：
//
// ()[]{}
//
// 小括号/中括号/大括号的左右括号都能正确配对，因此这是一个有效的括号序列。
//
// 再比如说给你的序列是：
//
// ([)]
//
// 这里面虽然正好有一对小括号和一对中括号，但它们的顺序不对，括号间无法正确配对，因此这不是一个有效的括号序列。

const str = '[]{{()}}';

const isValidBrackets = str => {
  let i = 0;
  const stack = [];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '(') stack.push(')');
    else if (str[i] === '[') stack.push(']');
    else if (str[i] === '{') stack.push('}');
    else if (stack.length === 0 || str[i] !== stack.pop()) return false;
  }

  return stack.length === 0;
};

const gg = isValidBrackets(str);
console.log('gg:', gg);
