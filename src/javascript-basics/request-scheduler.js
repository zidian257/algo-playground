const list = Array(9).fill('off');

setInterval(() => {
  console.log('list', list);
}, 500);

const asyncCall = anything =>
  new Promise((resolve, reject) => {
    const rdm = (Math.random() * 5) * 1000;
    console.log(`${anything} starting, rdm ${rdm}`);
    console.log('list', list);
    list[anything] = 'on';

    setTimeout(() => {
      list[anything] = 'off';
      resolve(anything);
    }, rdm);
  });

const sendRequestRecursive = (urls, limit, cb) => {
  // urls = [u1, u2, ...]
  // active quests = 0
  const responses = [];

  let countOfActiveRequests = 0;

  const sendSingleRequest = async (url, index) => {
    if (countOfActiveRequests < limit) {
      countOfActiveRequests += 1;
      let r = await asyncCall(url);
      countOfActiveRequests -= 1;
      responses[index] = r;

      if (countOfActiveRequests === 0) {
        cb(responses);
      }
    } else {
      setTimeout(() => {
        sendSingleRequest(url, index);
      }, 0);
    }
  };

  urls.forEach(sendSingleRequest);
};

const sendRequestIterate = (urls, limit, cb) => {
  // urls = [u1, u2, ...]
  // active quests = 0

  const length = urls.length;
  let nextIndex = 0;
  let activeRequests = 0;
  const responses = [];

  const sendOneRequest = async (_, index) => {
    if (activeRequests < limit && nextIndex <= length - 1) {
      activeRequests += 1;
      nextIndex += 1;
      const r = await asyncCall(urls[index]);
      activeRequests -= 1;
      responses[index] = r;

      if (activeRequests === 0 && nextIndex > length - 1) {
        cb(responses);
        return;
      }

      if (activeRequests < limit && nextIndex <= length - 1) {
        sendOneRequest(_, nextIndex);
      }
    }
  };

  urls.forEach(sendOneRequest);
};

// sendRequestRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, console.log);

sendRequestIterate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, console.log);
