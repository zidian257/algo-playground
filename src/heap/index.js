// 实现一个 javascript 堆

//     0
//    / \
//   1   2

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
    this.percolatingUp(this.heap.length - 1);
  };

  build = arr => {
    for (let i of arr) {
      this.insert(i);
    }
    this.size = arr.length;
  };

  peak = () => this.heap.slice(1);

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

const gg = new MinHeap();
const mm = gg.heapSort([7, 10, 6, 23, 1, 22, 8, 433, 12]);
console.log('mm:', mm);
