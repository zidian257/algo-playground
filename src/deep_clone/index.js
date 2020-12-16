exports.deepClone = a => {
  const toString = x => Object.prototype.toString.call(x);
  const getDetailType = x => toString(x).slice(7, -1);

  const getType = x => typeof x;

  // number string boolean undefined null bigint symbol
  const isPrimitive = x =>
    getType(x) === 'number' ||
    getType(a) === 'string' ||
    getType(a) === 'boolean' ||
    getType(a) === 'undefined' ||
    getType(a) === 'bigint' ||
    getType(a) === 'symbol' ||
    a === null;

  if (getType(a) === 'function') {
    throw new Error('not supported function');
  }

  // 原生类型
  if (isPrimitive(a)) {
    return a;
  }

  const b = Array.isArray(a) ? [] : {}
  const visited_value_key_store = new Map()

  // object
  const stack = [a]
  let curr

  while(stack.length > 0) {

    curr = stack.pop()

    if (visited_value_key_store.has(curr)) {
      // 已经遍历过了
      const key = visited_value_key_store.get(curr)
      b[key] = curr
    } else {


    }





  }



};
