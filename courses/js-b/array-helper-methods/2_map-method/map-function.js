const myNumbers = [1, 5, 7];

// for loop
// let mySquaredNumbers = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   mySquaredNumbers.push(myNumbers[i] * myNumbers[i]);
// }

// map() standalone
// const squaredNumbers = myNumbers.map((item) => item * item);


// map() with external function
// const squareNumbers = value => value * value
// let mySquaredNumbers = myNumbers.map(squareNumbers);


// map() with external function with index
// const squareNumbers = (value, index) => {
//   console.log('Element at the index', index, 'is', value);
//   return value * value;
// }
// let mySquaredNumbers = myNumbers.map(squareNumbers);


// map() with Math.pow()
// let mySquaredNumbers = myNumbers.map(item =>
//   Math.pow(item, 2)
// );


// index in the Math.pow method will be treated as exponent value
let mySquaredNumbers = myNumbers.map(Math.pow);

console.log(mySquaredNumbers);
