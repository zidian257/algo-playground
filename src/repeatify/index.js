// 'ff'.repeatify(3, '#')  ff#ff#ff

String.prototype.repeatify = function(num, s) {
  let ret = []
  for (let i = 0; i < num; i ++) ret.push(this.toString())

  return ret.join(s)
}


const ss = 'ff'.repeatify(3, '#')

console.log('ss:', ss);
