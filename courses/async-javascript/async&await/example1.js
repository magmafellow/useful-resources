// async & await
// async functions always return a promise
async function greet() { return 'Hello' }
greet();
// or this
async function greet2() {
  return Promise.resolve('Hello');
}

greet2()
  .then(res => {
    console.log(res);
  })
