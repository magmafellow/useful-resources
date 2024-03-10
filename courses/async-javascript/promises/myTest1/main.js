const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('From setTimeout() method');
    resolve('Big deal');
  }, 3000);
});

console.log('From global exe context');
console.log(promise);
promise
  .then((res) => {
  console.log('I did it', res);
  setTimeout(() => {console.log('Inside setTimeout in promise')}, 3000)
  return 10;
})
  .then((r) => {
    console.log('I did it 2', r);
  })
