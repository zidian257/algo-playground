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

    this.build(arr);
    // for (let i of arr) {
    //   this.add(i);
    // }
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

  percolatingDown = pos => {

  };

  percolatingUp = pos => {
    const target = this.heapArr[pos];
    for (
      ;
      pos > 1 && target < this.heapArr[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2)
    )
      this.heapArr[pos] = this.heapArr[Math.floor(pos / 2)];

    this.heapArr[pos] = target;
  };

  insert = elem => {
    this.heapArr.push(elem);
    this.percolatingUp(this.heapArr.length - 1);
  };

  build = arr => {
    for (let i of arr) {
      this.insert(i);
    }
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

const gg = new MinHeap([7, 4, 3, 2, 53, 5, 6, 1]);

console.log('gg.peak():', gg.peak());
