// 判断单链表是否有环

class LN {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

let cir = new LN(3);
cir.next = cir;

let ll = new LN(3, new LN(4, cir));
const isLinkedListCircular = list => {
  let s1 = list;
  let s2 = s1;

  while (s1 && s2 && s2.next) {
    if (s1 === s2) {
      return true;
    }
    s1 = s1.next;
    s2 = s2.next.next;
  }

  return false;
};

const gg = isLinkedListCircular(ll);
console.log('gg:', gg);
