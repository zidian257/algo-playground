const { Node, reverseLinkedList } = require('./index');

// 比如说给你的单链表是：
//
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//
// 你要返回的反转后的链表是：
//
// 5 -> 4 -> 3 -> 2 -> 1 -> null

const n = Node(1, Node(2, Node(3, Node(4, Node(5)))));

test('linked list is reversed', () => {
  let dummy = reverseLinkedList(n);
  const list = [1, 2, 3, 4, 5];
  while (dummy) {
    expect(dummy.val).toBe(list.pop());
    dummy = dummy.next
  }
});
