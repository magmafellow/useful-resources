console.log('First');

const promise = fetch('www/udemy.com/vishwas');
promise.then(value => {
  console.log('Promise value is ', value);
});

console.log('Second');
