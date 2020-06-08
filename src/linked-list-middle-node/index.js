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

const Node = (val, next = null) => ({ val, next });

const node = Node(0, Node(2, Node(4, Node(8))));
const node1 = Node(0, Node(2, Node(4, Node(8, Node(10)))));


const getMiddle = n => {
  let p1 = n;
  let p2 = n;

  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p2 === null) {
      return p1
    }
  }

  return p1;
};


getMiddle(node)
module.exports = { getMiddle, Node };
