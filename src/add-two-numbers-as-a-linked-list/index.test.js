// You are given two linked-lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
//   Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// 4 -> 5
// 9

const { addTwoNumber, Node, l1, l2 } = require('./index.js');

test('Node constructor works', () => {
  expect(Node(3).val).toBe(3);
});

const l3 = Node(4);
l3.next = Node(5);
const l4 = Node(9);

test('add works', () => {
  const ret = addTwoNumber(l1, l2);
  const ret2 = addTwoNumber(l3, l4);
  expect(ret.val).toBe(7);
  expect(ret.next.val).toBe(0);
  expect(ret.next.next.val).toBe(8);
  expect(ret2.val).toBe(3);
  expect(ret2.next.val).toBe(6);
});


test('linked list length', () => {
  const ret = addTwoNumber(l1, l2);
  expect(ret.next.next.next).toBe(null);
});
