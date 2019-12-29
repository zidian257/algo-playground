// 这个题目说的是，你要实现 C 语言里面的 strstr 函数，这个函数接收两个字符串，你要找到第二个字符串在第一个字符串中的开始下标，
// 如果找不到则返回 -1。
//
// 比如说，给你的两个字符串分别是：
//
// marvel studio 和 studio
//
// 第二个字符串存在于第一个字符串中，于是你要返回它在第一个字符串中的开始下标 7。
//
// 再比如说给你的字符串是：
//
// doctor strange 和 master
//
// 第二个字符串没有在第一个字符串中出现，因此返回 -1。

const strstr = (s1, s2) => {
  for (let i = 0; i < s1.length; ++i) {
    let p = i;
    let q = 0;
    while (s1[p] === s2[q] && q < s2.length) {
      p++;
      q++;
    }
    if (q === s2.length) {
      return i;
    }
  }
  return -1;
};


const gg = strstr('marvels studio', 'studio')
console.log('gg:', gg);
