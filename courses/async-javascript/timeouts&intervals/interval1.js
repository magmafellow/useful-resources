const greet = () => {
  console.log(`Hello guys`);
};

setInterval(greet, 1700);

console.log('Hello from global execution context!');

// hello every 2 second
