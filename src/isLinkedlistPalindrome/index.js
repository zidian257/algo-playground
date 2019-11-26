// 这个题目说的是，给你一个单链表表示的数，你要判断它是不是一个回文数字。回文数字就是正着读和反着读都相同的数字。
//
// 比如说，给你的链表是：
//
// 4 -> 2
//
// 它表示 42，反过来是 24，不是一个回文数字，因此你要返回 false。
//
// 再比如说，给你的链表是：
//
// 4 -> 2 -> 2 -> 4
//
// 它表示 4224，反过来也是 4224，它是一个回文数字，因此你要返回 true。

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new LN(2, new LN(4));
const l2 = new LN(4, new LN(2, new LN(2, new LN(4))));
const l3 = new LN(2, new LN(4, new LN(2)));

const isLinkedListPalindromeStack = linklist => {
  let stack = [];
  let temp = linklist;

  while (temp) {
    stack.push(temp.val);
    temp = temp.next;
  }
  temp = linklist;
  while (temp) {
    if (stack.pop() !== temp.val) {
      return false;
    }
    temp = temp.next;
  }
  return true;
};

const isLinkedListPalindrome = linklist => {
  let temp = linklist;
  let length = 0;
  let pre = null;

  while (temp) {
    length += 1;
    temp = temp.next;
  }

  let curr = linklist;

  for (let i = 0; i < length / 2; ++i) {
    temp = curr.next;
    curr.next = pre;

    pre = curr;
    curr = temp;
  }

  if (length % 2 === 1) {
    pre = pre.next;
  }

  while (pre && curr) {
    if (pre.val !== curr.val) {
      return false;
    }
    pre = pre.next;
    curr = curr.next;
  }
  return true;
};

const gg = isLinkedListPalindrome(l1);

console.log('gg:', gg);
