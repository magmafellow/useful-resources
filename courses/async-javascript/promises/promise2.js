// Promises
// part 2

const promise = new Promise((resolve, reject) => {
  // async operation - Friend went to take tacos
  setTimeout(() => {
    // Food truck found
    // Change status from `pending` to `fulfilled`
    resolve('Bringing tacos');
  }, 5000);
});

const onFulfillment = (result) => {
  // resolve was called
  console.log(result);
  console.log('Set up the table to eat tacos');
};

const onRejection = () => {
  // reject was called
  console.log('Start cooking pasta');
};

promise.then(onFulfillment).catch(onRejection);
// Promises can be chained
