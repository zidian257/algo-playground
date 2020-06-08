// 这个题目说的是，给你一个单链表，你要返回它正中间的节点。如果链表节点数量是偶数个，这个时候正中间有两个节点，你要返回它们中第二个节点。
//
// 比如说，给你的单链表是：
//
// 0 -> 1 -> 2 -> 4 -> 8
//
// 你要返回的正中间节点是 2。如果给你的链表有偶数个节点，比如：
//
// 0 -> 1 -> 2 -> 4
//
// 正中间的节点是 1 和 2，你要返回它们中第二个节点，也就是节点 2。

const { getMiddle, Node } = require('./index');

const node = Node(0, Node(2, Node(4, Node(8))));
const node1 = Node(0, Node(2, Node(4, Node(8, Node(10)))));

test('get middle works', () => {
  expect(getMiddle(node).val).toBe(4);
  expect(getMiddle(node1).val).toBe(4);
});
