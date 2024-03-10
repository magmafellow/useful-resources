const greet = () => {
  console.log(`Hello guys`);
};

const intervalId = setInterval(greet, 500);
console.log('Hello from global execution context!');
clearInterval(intervalId);

// nothing will be logged as greet never runs
