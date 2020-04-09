// 这个题目说的是，你要实现一个类，用来求数据流中第 K 大的元素。你需要实现这个类中的两个函数。第一个是构造函数，它接收一个整数数组以及一个整数 K，整数数组作为初始数据流。第二个是 add 函数，接收一个整数表示新流入的数据，然后返回当前第 K 大的元素。
//
// 比如说，给你的 K 是 3，初始的数组是：
//
// 1, 5, 2, 8
//
// 这时假如调用 add 函数增加一个数字 9，数据流变成：
//
// 1, 5, 2, 8, 9
//
// 你要返回第 3 大的元素是 5。
//
// 假如再调用 add 函数增加一个数字 0，数据流变成：
//
// 1, 5, 2, 8, 9, 0
//
// 这时你要返回的第 3 大元素仍然是 5。

const s = [1, 5, 2, 8];

class MinHeap {
  constructor(arr) {
    this.heap = [null];
    this.size = 0;
    if (Array.isArray(arr) && arr.length !== 0) {
      this.build(arr);
    }
  }

  percolatingDown = pos => {
    const target = this.heap[pos];
    let child;

    for (; pos * 2 <= this.size; pos = child) {
      child = pos * 2;
      if (child !== this.size && this.heap[child + 1] < this.heap[child])
        child++;

      if (target > this.heap[child]) this.heap[pos] = this.heap[child];
      else break;
    }
    this.heap[pos] = target;
  };

  percolatingUp = pos => {
    const target = this.heap[pos];
    for (
      ;
      pos > 1 && target < this.heap[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2)
    )
      this.heap[pos] = this.heap[Math.floor(pos / 2)];

    this.heap[pos] = target;
  };

  insert = elem => {
    this.heap.push(elem);
    this.size++;
    this.percolatingUp(this.heap.length - 1);
  };

  build = arr => {
    for (let i of arr) {
      this.insert(i);
    }
    this.size = arr.length;
  };

  peak = () => this.heap.slice(1);

  poll = () => {
    if (this.size === 0) {
      return null;
    }

    const ret = this.heap[1];

    this.heap[1] = this.heap[this.size];
    this.size--;

    this.percolatingDown(1);
    this.heap.pop();

    return ret;
  };

  heapSort = arr => {
    if (arr.length !== 0) {
      this.build(arr);
    }

    for (let i = this.size; i > 0; i--) {
      this._swap(i, 1);
      this.size--;
      this.percolatingDown(1);
    }
    return this.peak();
  };
  _swap = (a, b) => {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  };
}

class KthLargestEleInStream {
  constructor(arr, k) {
    this.heap = new MinHeap();
    this.size = k;

    if (!Array.isArray(arr)) {
      throw 'not an array';
    }

    this.build(arr);
  }

  build = arr => {
    for (let item of arr) {
      this.insert(item);
    }
  };

  insert = elem => {

    if (this.heap.size !== this.size) {
      this.heap.insert(elem);
    } else {
      if (this.heap.peak()[0] < elem) {
        this.heap.poll();
        this.heap.insert(elem);
      }
    }

    return this.heap.peak()[0]
  };
}

const foo = new KthLargestEleInStream([1, 5, 2, 8], 3);


console.log('foo.insert(9):', foo.insert(9));
console.log('foo.insert(0):', foo.insert(0));
console.log('foo', foo);
