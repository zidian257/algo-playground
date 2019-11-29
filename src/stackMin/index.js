class Stack {
  _stack = [];
  _min = [Number.MAX_VALUE];

  push(val) {
    const minLength = this._min.length;
    if (val < this._min[minLength - 1]) {
      this._min.push(val);
    }
    this._stack.push(val);
    console.log('this:', this);
  }

  pop() {
    const stackLength = this._stack.length;
    const minLength = this._min.length;
    if (this._stack[stackLength - 1] === this._min[minLength - 1]) {
      this._min.pop();
    }
    this._stack.pop();
    console.log('this:', this);
  }

  peak() {
    const stackLength = this._stack.length;
    return this._stack[stackLength - 1];
  }
  getMin() {
    const minLength = this._min.length;
    return this._min[minLength - 1];
  }
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
// null
// 12 > max > null   min 12
// 20 > 12 > max > null   min 12
// 2 > 12 > 20 > 12 > max > null  min 2

class StackWithLL {
  head = null;
  min = Number.MAX_VALUE;

  push(val) {
    if (val <= this.min) {
      this.head = new Node(this.min, this.head);
      this.min = val;
    }
    this.head = new Node(val, this.head);
  }

  pop() {
    if (this.head.val === this.min) {
      this.min = this.head.next.val;
      this.head = this.head.next.next;
    } else {
      this.head = this.head.next;
    }
  }

  peak() {
    return this.head.val;
  }

  getMin() {
    return this.min;
  }
}

const stack = new StackWithLL();

stack.push(3);
stack.push(2);
stack.push(1);
stack.push(4);


const min = stack.getMin();

console.log('min:', min);
