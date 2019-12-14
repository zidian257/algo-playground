// 这个题目说的是，给你两个单链表，你要找到它们相交的第一个节点。如果两个链表没有相交，则返回空指针。假设链表无环，并且你不能改变它的原始结构。另外要求算法是线性时间复杂度，空间复杂度要求是 O(1)。
//
// 比如说，两条链表分别是：
//
// A:     1 -> 2
//               \
//                6 -> 7 -> null
//               /
// B: 3 -> 4 -> 5
//
// 你要返回的是 6 这个节点。

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

let ll = new LN(121, new LN(4, new LN(32)));

const l1 = new LN(4, new LN(32, new LN(9, ll)));

const l2 = new LN(2, ll);

const isLinkedListsCrossed = (l1, l2) => {
  if (!l1 || !l2) {
    return null;
  }

  let len1 = 0;
  let len2 = 0;
  let p = l1;
  let q = l2;

  while (p) {
    p = p.next;
    len1 += 1;
  }

  while (q) {
    q = q.next;
    len2 += 1;
  }

  p = l1;
  q = l2;

  const time = Math.max(len1, len2) - Math.min(len1, len2);
  for (let i = 0; i < time; ++i) {
    if (len1 >= len2) {
      p = p.next;
    } else {
      q = q.next;
    }
  }

  while (p && q) {
    if (p === q) {
      return p;
    }
    p = p.next;
    q = q.next;
  }
  return null;
};


const isLinkedListsCrossedWithoutLen = (l1, l2) => {
  let p = l1;
  let q = l2;

  while (p && q) {
    if (p === q) return p;

    p = p.next ? p.next : l2;
    q = q.next ? q.next : l1;
  }
  return false;
};
const ggs = isLinkedListsCrossedWithoutLen(l1, l2);

