// 这个题目说的是，给你一个排好序的整数数组，里面的数字都出现两次，只有一个数字出现了一次，我们管它叫单身数字，你要写代码找到这个单身数字。
//
// 比如说给你的有序数组是：
//
// 1, 1, 2, 2, 4, 4, 6, 8, 8
//
// 这个数组里 6 只出现了一次，因此你要返回的数字就是 6。

const t = [1, 1, 2, 2, 4, 4, 6, 8, 8];

const singleNumInSortedArrayXOR = a => {
  let result = 0;

  t.forEach(i => {
    result = result ^ i;
  });

  return result;
};

const singleNumInSortedArrayBinSearch = a => {
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (a[mid] === a[mid + 1] && mid + 1 < a.length) {
    } else if (a[mid] === a[mid - 1] && mid - 1 >= 0) {
      mid = mid - 1;
    } else {
      return a[mid];
    }

    if ((mid - low) % 2 === 1) {
      high = mid - 1;
    } else {
      low = mid + 2;
    }
  }
  return -1;
};

const gg = singleNumInSortedArrayBinSearch(t);
console.log('gg:', gg);
