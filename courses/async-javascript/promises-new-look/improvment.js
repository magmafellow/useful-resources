const promise = new Promise((resolve, reject) => {
  // resolve() changes the status of the promise from 'pending' to 'fulfilled'

  // reject() changes the status of the promise from 'pending' to 'rejected'
  // after an async operation functions

  setTimeout(() => {
    // Food truck was not found.
    // Change status from 'pending' to 'fulfilled'
    reject('Not bringing tacos. Food truck not there')
  }, 5000);
  
});

const onRejection = (error) => {
  // reject was called
  console.log(error);
  console.log('Start cooking pasta');
};

const onFulfillment = (result) => {
  // resolve was called
  console.log('Set up the table to eat tacos');
};

promise.then(onFulfillment);
promise.catch(onRejection);
