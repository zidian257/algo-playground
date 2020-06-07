// 这个题目说的是，给你一个单链表，你需要反转它，然后返回。
//
// 比如说给你的单链表是：
//
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//
// 你要返回的反转后的链表是：
//
// 5 -> 4 -> 3 -> 2 -> 1 -> null

const Node = (val, next = null) => ({ val, next });
const reverseLinkedList = ln => {
  let dummy = ln;
  let temp;
  let head = null;
  while (dummy) {
    temp = dummy.next;
    dummy.next = head;
    head = dummy;
    dummy = temp;
  }

  return head;
};

module.exports = { Node, reverseLinkedList };
