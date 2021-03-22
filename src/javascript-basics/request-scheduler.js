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
  let rsps = [];
  let fns = [];
  let resolved = 0;

  const genOnePromise = (url, index) => async () => {
    rsps[index] = await asyncCall(url);
    resolved += 1;

    if (fns.length > 0) {
      fns.shift()();
    }

    if (resolved === urls.length) {
      cb(rsps);
    }
  };

  fns = urls.map((url, index) => genOnePromise(url, index));

  for (let i = 0; i < limit; i++) {
    if (fns.length > 0) {
      fns.shift()();
    }
  }
}

sendRequest([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, console.log);
