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

class StackWithLL {
  head = null



}

const stack = new Stack();

stack.push(3);
stack.push(2);
stack.push(1);
stack.push(4);

stack.pop();

stack.pop();
const min = stack.getMin();

console.log('min:', min);
