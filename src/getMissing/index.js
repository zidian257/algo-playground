// 这个题目说的是，从 0 到 n 这 n+1 个整数中去掉一个，然后把剩下的 n 个整数放进一个长度为 n 的数组，给你这个数组，你要找到那个去掉的整数。
//
// 比如说，给你的数组是：
//
// 4, 1, 0, 2
//
// 这里的数组长度是 4，说明这是从 0 到 4 中去掉一个数字后形成的数组。数组中缺失的数字是 3，因此我们要返回 3。


const number = [0, 2,4 ,3,1,5]

const getMissingNumber = list => {

  let temp = 0
  for (let i = 1; i<= list.length; ++i) {
    temp = temp^i^list[i - 1]

  }

  return temp;


}

const gg = getMissingNumber(number)

console.log('gg:', gg);
