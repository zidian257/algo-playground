// 这个题目说的是，给你一个单链表和数字 n，你要移除单链表倒数第 n 个节点，然后返回单链表。
//
// 比如说，给你的单链表是：
//
//  dummy -> 1 -> 2 -> 4 -> 8
//
// 给你的数字 n 是 3，单链表中倒数第 3 个节点是 2，移除 2 以后的单链表是：
//
// 1 -> 4 -> 8

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const L1 = new LN(1, new LN(3));

const removeNthFromEnd = (n, l) => {
  const ret = new LN();
  ret.next = l;

  let p, q;

  p = q = ret;

  let i = 0;
  for (; i < n; i++) {
    if (!p.next) {
      return ret.next;
    }
    p = p.next;
  }

  while (p.next) {
    q = q.next;
    p = p.next;
  }

  q.next = q.next.next;

  return ret.next;
};

const gg = removeNthFromEnd(3, L1);

console.log('gg:', gg);
