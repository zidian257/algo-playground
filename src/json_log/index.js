const json_log_recursive = a => {
  // safely json stringify
  // 递归版
  const isObject = x => typeof x === 'object' && x !== null;

  // 环检测
  const visited_set = new Set();

  // number string boolean undefined null bigint
  const isSupportPrimitive = x =>
    typeof x === 'number' ||
    typeof x === 'string' ||
    typeof x === 'boolean' ||
    typeof x === 'undefined' ||
    typeof x === 'bigint' ||
    x === null;

  const str_arr = [];

  const walk = (o, target_arr) => {
    if (isObject(o)) {
      if (visited_set.has(o)) {
        target_arr.push('[[circular structure]]');
        return;
      }

      visited_set.add(o);
      target_arr.push(Array.isArray(o) ? '[' : '{');

      for (let key in o) {
        if (o.hasOwnProperty(key)) {
          if (!Array.isArray(o)) {
            target_arr.push(`"${key}"`, ':');
          }
          walk(o[key], target_arr);
          target_arr.push(',');
        }
      }
      // 去除最后一个逗号
      target_arr.splice(target_arr.length - 1, 1);
      target_arr.push(Array.isArray(o) ? ']' : '}');
    } else if (isSupportPrimitive(o)) {
      if (o === undefined) {
        o = null;
      }
      if (typeof o === 'string') {
        o = `"${o}"`;
      }

      target_arr.push(`${o}`);
    } else {
      throw new Error('not supported');
    }
  };

  walk(a, str_arr);

  return str_arr.join('');
};

module.exports = {
  json_log_recursive
};
