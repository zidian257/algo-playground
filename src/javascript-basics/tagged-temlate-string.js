const template = (strings, ...keys) => {
  const result = [strings[0]];

  keys.forEach((key, i) => {
    result.push(key);
    result.push(strings[i + 1]);
  });

  return result.join('');
};


const d = 'd'

const f= 'f'
const s = template`dfsd ${d} ${f}..`

console.log('s:', s);
