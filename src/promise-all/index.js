const nancy = promises => {
  const resolvedValues = [];
  const stats = [];



  if (!Array.isArray(promises)) return Promise.resolve(resolvedValues);
  if (promises.length === 0) return Promise.resolve(resolvedValues);

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const p = promises[i];

      p.then(v => {
        resolvedValues[i] = v;
        stats[i] = true;

        const allDone = checkIfAllDone(stats, promises.length);

        if (allDone) {
          resolve(resolvedValues);
        }
      }).catch(e => reject(e));
    }
  });
};

const checkIfAllDone = (arr, length) => {
  let ret = true;
  for (let j = 0; j < length; j++) {
    if (!arr[j]) return false;
  }

  return ret;
};


const p1 = Promise.resolve(4)
const p2 = Promise.resolve(1)


nancy([p1, p2]).then(v => console.log(v))
