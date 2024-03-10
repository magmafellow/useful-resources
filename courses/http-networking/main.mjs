// prom.then(message => console.log(message, 'here'));

function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Good'), 1000);
  })
}

const res = await getPromise();

console.log('Program is over');
