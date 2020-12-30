// Function 元编程

// implementation of Function.prototype.call
// Array.prototype.push.call(thisArg, ...args)
// 参数是 1 this ,其余的是调用的参数个数
Function.prototype.call1 = function() {
  // 手写 call 的要点
  // 如若不能使用 es3+ 以及 bind call
  // 则需要借助 eval 来实现

  // 1. 考虑 this 为 null 的情况
  const context = arguments[0] || {};
  // 2. fn 挂在到 this 上，这样调用即指明了 函数的 this
  context.fn = this;

  const argStrArr = [];

  // 3. 配合 eval 完成函数参数调用
  for (let i = 1; i < arguments.length; i++) {
    argStrArr.push(`arguments[${i}]`);
  }

  const fnStr = `context.fn(${argStrArr.toString()})`;
  const result = eval(fnStr);
  // 4. 从 this 上删除 fn
  delete context.fn;
  return result;
};

// implementation of Function.prototype.apply
// Array.prototype.push.apply(thisArg, args)
// 参数是 1 this 2 参数列表数组
Function.prototype.apply1 = function(context, args) {
  // 手写 apply 的要点：
  // 如若不能使用 es3+ 以及 bind call
  // 则需要借助 eval 来实现

  // 1. 考虑 context 为 null 的情况
  context = context || {};

  // 2. fn 挂在到 this 上，这样调用即指明了 函数的 this
  context.fn = this;

  const argStrArr = [];

  // 3. 配合 eval 完成函数参数调用
  for (let i = 0; i < args.length; i++) {
    argStrArr.push(`args[${i}]`);
  }

  const fnStr = `context.fn(${argStrArr.toString()})`;
  const result = eval(fnStr);
  // 4. 从 this 上删除 fn
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
// 通过 new 来依据构造函数创造实例
// function Person (name, age) {
//   this.name = name;
//   this.age = age;
//
//   this.habit = 'Games';
// }
// Person.prototype.say = function() {
//    console.log(this.habit)
// }

// (new Person()).say()
// 实例化以后，可以访问到
// 1. 实例 this 内部
// 2 构造函数的 prototype 内部（包括其集成的原型链）

// new2(Constructor, arg1, arg2 ....)
const new2 = function() {
  const obj = {};
  // 调整 arguments 数组，拿出第一个构造函数
  const Constructor = [].shift.call(arguments);

  // 实例的 __proto__指向 构造函数的原型
  obj.__proto__ = Constructor.prototype;
  // apply 是数组
  const ret = Constructor.apply(obj, arguments);


  const isObject = x => typeof x === 'object';

  // 如果原函数的返回值不是 对象，则返回非对象
  // 否则返回我们新建的实例
  return isObject(ret) ? obj : ret;
};
