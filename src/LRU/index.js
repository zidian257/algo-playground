// 描述
// 这个题目说的是，你要实现一个 LRU 缓存，提供 get 和 put 两个操作，并且要求两个操作的时间复杂度都是 O(1)。
// 另外为了简单起见，在这个题目中，key 和 value 都是整数值，并且 value 只为正整数。因此在 get 操作中，当 key 不存在时，返回 -1 即可。

const node = (key, val, next, prev) => ({ key, val, next, prev });

const moveToHead = (head, node) => {
  if (head === node) return head.prev;

  // detach
  node.prev.next = node.next;
  node.next.prev = node.prev;

  // attach
  head.next.prev = node;
  node.next = head.next;
  head.next = node;
  node.prev = head;

  return head;
};

const LRU = capacity => {
  const ret = {
    head: node(-1, -1, null, null)
  };
  let curr = ret.head;
  const map = new Map();

  for (let i = 0; i < capacity - 1; ++i) {
    curr.next = node(-1, -1, null, curr);
    curr = curr.next;
  }

  curr.next = ret.head;
  ret.head.prev = curr;

  ret.get = key => {
    if (!map.has(key)) return -1;
    const n = map.get(key);
    ret.head = moveToHead(ret.head, n);
    return n.val;
  };

  ret.put = (key, value) => {
    if (map.has(key)) {
      const n = map.get(key);
      n.val = value;
      ret.head = moveToHead(ret.head, n);
    } else {
      if (ret.head.val !== -1) map.delete(ret.head.k);

      ret.head.val = value;
      ret.head.key = key;
      map.set(key, ret.head);
      ret.head = ret.head.prev;
    }
  };
  return ret;
};

const gg = LRU(4);
gg.put(1, 1);
gg.put(2, 2);
gg.put(3, 3);
gg.put(4, 4);

gg.get(3)
console.log('head:', gg.get(4));
