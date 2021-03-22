const list = Array(9).fill('off');

// const id = setInterval(() => {
//   console.log('list', list);
// }, 500);

const asyncCall = anything =>
  new Promise((resolve, reject) => {
    const rdm = Math.random() * 5 * 1000;
    console.log(`${anything} starting, rdm ${rdm}`);
    list[anything] = 'on';

    setTimeout(() => {
      list[anything] = 'off';
      resolve(anything);
    }, rdm);
  });


function sendRequest(urls, limit, cb) {
  let responses = [];
  let promisesWannabes = [];
  let resolvedCalls = 0;

  const genOnePromise = (url, index) => async () => {
    responses[index] = await asyncCall(url);
    resolvedCalls += 1;

    if (promisesWannabes.length > 0) {
      promisesWannabes.shift()();
    }

    if (resolvedCalls === urls.length) {
      cb(responses);
    }
  };

  promisesWannabes = urls.map((url, index) => genOnePromise(url, index));

  for (let i = 0; i < limit; i++) {
    if (promisesWannabes.length > 0) {
      promisesWannabes.shift()();
    }
  }
}

sendRequest([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, console.log);
