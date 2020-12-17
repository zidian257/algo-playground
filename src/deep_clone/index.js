exports.deepClone = a => {
  const toString = x => Object.prototype.toString.call(x);
  // const getDetailType = x => toString(x).slice(8, -1);

  const getType = x => typeof x;

  // number string boolean undefined null bigint symbol
  const isPrimitive = x => {
    if (getType(x) === 'function') {
      throw new Error('function is not supported');
    }
    return (
      getType(x) === 'number' ||
      getType(x) === 'string' ||
      getType(x) === 'boolean' ||
      getType(x) === 'undefined' ||
      getType(x) === 'bigint' ||
      getType(x) === 'symbol' ||
      x === null
    );
  };

  // 原生类型
  if (isPrimitive(a)) {
    return a;
  }

  const b = Array.isArray(a) ? [] : {};
  const visited_map = new Map();

  // object
  const stack = [[a, b]];
  visited_map.set(a, b);

  while (stack.length > 0) {
    const [p, q] = stack.pop();

    for (let key in p) {
      if (p.hasOwnProperty(key)) {
        if (isPrimitive(p[key])) {
          q[key] = p[key];
        } else {
          if (visited_map.has(p[key])) {
            q[key] = visited_map.get(p[key]);
          } else {
            q[key] = Array.isArray(p[key]) ? [] : {};
            visited_map.set(p[key], q[key]);
            stack.push([p[key], q[key]]);
          }
        }
      }
    }
  }

  return b;
};
