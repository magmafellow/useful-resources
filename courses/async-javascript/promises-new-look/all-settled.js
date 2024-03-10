const promise1 = Promise.resolve(42);
const promise2 = 'abc';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'error occured');
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log('Results are - ', values);
}).catch((error) => {
  console.log('This error occured - ', error);
})
