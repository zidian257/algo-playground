// 这个题目说的是，给你两个非空的单链表，它们代表两个非负整数，并且逆序表示。你要将这两个数求和，并将结果以链表形式返回。你不需要考虑前导 0 这种情况，也就说 3 不会表示成 003 这样子。
//
// 比如说给你的两个链接表是：
//
// 1 -> 2 -> 3
// 6 -> 7 -> 8 -> 9
//
// 1 -> 2 -> 3 表示的整数是 321，6 -> 7 -> 8 -> 9 表示的整数是 9876。我们需要输出的是它们求和后的链表：
//
// 7 -> 9 -> 1 -> 0 -> 1

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

let ll1 = new LN(3, new LN(9, new LN(5)));

let ll2 = new LN(3, new LN(4));

const sum = (l1, l2) => {
  const ret = new LN();
  let carry = 0;
  let root = ret;

  while (root) {
    const t = carry + (l1.val || 0) + (l2.val || 0);

    const v = t % 10;

    if (t / 10 >= 1) {
      carry = 1;
    } else carry = 0;

    if (t > 0) {
      root.next = new LN(v);
    }
    root = root.next;

    if (l1.next) {
      l1 = l1.next;
    } else {
      l1 = {
        next: {}
      };
    }

    if (l2.next) {
      l2 = l2.next;
    } else {
      l2 = {
        next: {}
      };
    }
  }

  return ret.next;
};

const gg = sum(ll1, ll2);
console.log('gg:', gg);
