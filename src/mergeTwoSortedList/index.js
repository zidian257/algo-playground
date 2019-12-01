// 这个题目说的是，给你两个递增排序的链表，你要把它们合成一个链表，并且保持递增排序。另外要求，新链表上的节点使用的就是旧的两个链表上的节点，不能创建新节点。
//
// 比如说，给你的两个链表 L1 和 L2，分别是：
//
// L1: 1 -> 3
//
// L2: 2 -> 4 -> 6
//
// 合并后的链表就是：
//
// 1 -> 2 -> 3 -> 4 -> 6

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const L1 = new LN(1, new LN(3));
const _L2 = new LN(1, new LN(3));
const L2 = new LN(2, new LN(4, new LN(6)));
const _L1 = new LN(2, new LN(4, new LN(6)));

// L1: 2 -> 4 -> 6
// L2: 1 -> 3
const mergeTwoSortedList = (l1, l2) => {
  const dummy = new LN();
  let p,
    head1 = l1,
    head2 = l2;

  p = dummy;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1;
      head1 = head1.next;
    } else {
      p.next = head2;
      head2 = head2.next;
    }
    p = p.next;
  }
  if (!head1) {
    p.next = head2;
  }
  if (!head2) {
    p.next = head1;
  }

  return dummy.next;
};

const gg = mergeTwoSortedList(L1, L2);
const mm = mergeTwoSortedList(_L1, _L2);

console.log('mm:', mm);
console.log('gg:', gg);
