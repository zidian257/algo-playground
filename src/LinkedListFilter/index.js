// 这个题目说的是，给你一个单链表和一个数字，你要删除节点上数字等于给定数字的那些节点，然后返回删除节点后的单链表。
//
// 比如说，给你的单链表是：
//
// 1 -> 2 -> 4 -> 1 -> 8 -> 1
//
// 要删除的数字是 1。那么删除 1 后，你要返回的单链表是：
//
// 2 -> 4 -> 8

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const formLL = arr => {
  const ret = new LN(0);
  let tmp = ret;
  for (let i = 0; i < arr.length; ++i) {
    tmp.next = new LN(arr[i]);
    tmp = tmp.next;
  }

  return ret.next;
};

const ll = formLL([1, 2, 4, 1, 8, 1]);

const llFilter = (l, item) => {
  const ret = new LN();
  ret.next = l;

  let tmp = ret;

  while (tmp.next) {
    if (tmp.next.val === item) {
      tmp.next = tmp.next.next;
    } else {
      tmp = tmp.next;
    }
  }

  return ret.next;
};

const gg = llFilter(ll, 1);

console.log('gg:', gg);
