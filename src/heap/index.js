// 实现一个 javascript 堆

//     0
//    / \
//   1   2

class CBTree {
  // complete binary tree
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class MinHeap {
  // heap
  constructor(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw 'N/A';
    }
    this.heapArr = [null];
    for (let i of arr) {
      this.add(i);
    }
  }

  add = elem => {
    this.heapArr.push(elem);
    let targetIndex = this.heapArr.length - 1;
    let parentIndex;

    while (this._getParentIndex(targetIndex) > 0 && targetIndex > 1) {
      parentIndex = this._getParentIndex(targetIndex);

      if (this.heapArr[targetIndex] < this.heapArr[parentIndex]) {
        this._swap(targetIndex, parentIndex);
      } else {
        break;
      }
      targetIndex = parentIndex;
    }
  };

  percolatingDown = () => {
    // todo
  };

  percolatingUp = () => {
    // todo
  };

  peak = () => this.heapArr.slice(1);

  _getParentIndex = index => Math.floor(index / 2);

  _swap = (a, b) => {
    let tmp = this.heapArr[a];
    this.heapArr[a] = this.heapArr[b];
    this.heapArr[b] = tmp;
  };

  size = () => this.heapArr.length - 1;

  delMin = () => {
    // todo
  };
}

const gg = new MinHeap([1, 2, 4, 3, 23, 53, 5, 6]);

console.log('gg.peak():', gg.peak());
