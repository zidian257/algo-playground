// 这个题目说的是，给你一个单链表，你需要反转它，然后返回。
//
// 比如说给你的单链表是：
//
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//
// 你要返回的反转后的链表是：
//
// 5 -> 4 -> 3 -> 2 -> 1 -> null

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
const foo = new LN(1, new LN(2, new LN(3)));

const reverseLinkedList = node => {
  let curr = node;
  let pre = null;
  let temp;

  while (curr) {
    temp = curr.next;

    curr.next = pre;

    pre = curr;
    curr = temp;
  }

  return pre;
};

const gg = reverseLinkedList(foo);

console.log("gg:", gg);
