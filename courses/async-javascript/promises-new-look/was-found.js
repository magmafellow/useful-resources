const promise = new Promise((resolve, reject) => {
  // resolve() changes the status of the promise from 'pending' to 'fulfilled'

  // reject() changes the status of the promise from 'pending' to 'rejected'
  // after an async operation functions

  setTimeout(() => {
    // Food truck found.
    // Change status from 'pending' to 'fulfilled'
    resolve() //
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
