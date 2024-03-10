setTimeout(() => {
  console.log('First');
});

const promise = fetch('www/endpoint.com');
promise.then((value) => {
  console.log('Promise value is ', value);
});

let i = 0;
while(i < 1000000) {
  i = i + 1;
}

console.log('Second');
