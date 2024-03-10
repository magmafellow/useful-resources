// Promises

const promise = new Promise((resolve, reject) => {
  // async operation - Friend went to take tacos
  setTimeout(() => {
    // Food truck found
    // Change status from `pending` to `fulfilled`
    resolve();
  }, 5000);
});

const onFulfillment = () => {
  // resolve was called
  console.log('Set up the table to eat tacos');
};

const onRejection = () => {
  // reject was called
  console.log('Start cooking pasta');
};

promise.then(onFulfillment);
promise.catch(onRejection);
