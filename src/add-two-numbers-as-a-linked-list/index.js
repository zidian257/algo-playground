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
  if (!node1) {
    return node2;
  }
  if (!node2) {
    return node1;
  }

  let l1 = node1,
    l2 = node2,
    carry = 0,
    sum = 0,
    v1 = 0,
    v2 = 0,
    res = Node(),
    curr = res;

  while (l1 || l2) {
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    } else {
      v1 = 0;
    }

    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    } else v2 = 0;

    sum = v1 + v2 + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else carry = 0;

    curr.next = Node(sum);
    curr = curr.next;
  }

  return res.next;
};

module.exports = { addTwoNumber, Node, l1, l2 };
