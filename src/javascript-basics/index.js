// Function 元编程

// implementation of Function.prototype.call
// Array.prototype.push.call(thisArg, ...args)
Function.prototype.call1 = function() {
  const context = arguments[0] || {};
  context.fn = this;

  const argStrArr = [];

  for (let i = 1; i < arguments.length; i++) {
    argStrArr.push(`arguments[${i}]`);
  }

  const fnStr = `context.fn(${argStrArr.toString()})`;
  const result = eval(fnStr);
  delete context.fn;
  return result;
};

// implementation of Function.prototype.apply
// Array.prototype.push.apply(thisArg, args)
Function.prototype.apply1 = function(context, args) {
  context = context || {};
  context.fn = this;

  const argStrArr = [];

  for (let i = 0; i < args.length; i++) {
    argStrArr.push(`args[${i}]`);
  }

  const fnStr = `context.fn(${argStrArr.toString()})`;
  const result = eval(fnStr);
  delete context.fn;
  return result;
};

// implementation of Function.prototype.bind
// const newPush = Array.prototype.push.bind(thisArg)
Function.prototype.bind1 = function(context) {
  const self = this;
  const args1 = Array.prototype.slice.call(arguments, 1);
  const noop = function() {};

  const fn = function() {
    const args2 = Array.prototype.slice.call(arguments);

    // 当作为 构造函数 调用时，新建实例的 this 是构造函数的实例
    // 以此来判断是否作为构造函数来调用
    const calledAsConstructor = this instanceof fn;

    // 作为构造函数时，this 不是指定的 context
    // 而是实例的 this
    return self.apply(
      calledAsConstructor ? this : context,
      args1.concat(args2)
    );
  };

  // 此时还需要保存 原函数的原型
  // 同时也要切断与 原函数的 prototype 关系
  noop.prototype = this.prototype;
  fn.prototype = new noop();

  return fn;
};

// new 关键字实现
const new2 = function() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);


  const isObject = x => typeof x === 'object';

  // 如果原函数的返回值不是 对象，则返回非对象
  // 否则返回我们新建的实例
  return isObject ? obj : ret;
};
