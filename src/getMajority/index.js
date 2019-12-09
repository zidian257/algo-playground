// 这个题目说的是，给你一个数组，里面有一个数字出现的次数超过了一半，你要找到这个数字并返回。
//
// 比如说，给你的数组是
//
// 1, 3, 3, 1, 3, 1, 1
//
// 这个数组的长度是 7，这里我们只考虑整数除法，长度 7 除以 2 是 3。数组里面 1 出现了 4 次，超过了一半的数量 3，因此你要返回的就是 1。

const a = [1, 4, 3, 1, 3, 1, 1];

const getMajorityHash = a => {
  const map = new Map();
  let maxCount = 0;
  let maxKey = 0;

  for (let i = 0; i < a.length; ++i) {
    const key = a[i];
    const has = map.has(key);
    if (has) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }

    if (map.get(key) > maxCount) {
      maxCount = map.get(key);
      maxKey = key;
    }
  }

  return maxCount > a.length / 2 ? maxKey : -1;
};

// const gg = getMajorityHash(a);

const getMajority = a => {
  let count = 1;
  let maxKey = a[0];

  for (let i = 1; i < a.length; ++i) {
    const key = a[i];

    if (count === 0) {
      maxKey = key;
    } else if (key === maxKey) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return maxKey;
};

const gg = getMajority(a);

console.log('gg:', gg);
