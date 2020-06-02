// You are given two linked-lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
//   Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const Node = (num, next = null) => ({ val: num, next });

const l1 = Node(2);
l1.next = Node(4);
l1.next.next = Node(3);

const l2 = Node(5);
l2.next = Node(6);
l2.next.next = Node(4);

const addTwoNumber = (node1, node2) => {
  let carry = 0;
  let cur = 0;
  const ret = Node(null);
  let pointer = ret;

  let l1 = node1;
  let l2 = node2;

  while (l1 || l2) {
    let l1val = 0;
    let l2val = 0;
    if (l1) {
      l1val = l1.val;
    }

    if (l2) {
      l2val = l2.val;
    }

    cur = l1val + l2val + carry;
    carry = 0;
    if (cur >= 10) {
      cur = cur - 10;
      carry = 1;
    }

    pointer.next = Node(cur);

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    pointer = pointer.next;
  }

  return ret.next;
};

module.exports = { addTwoNumber, Node, l1, l2 };
