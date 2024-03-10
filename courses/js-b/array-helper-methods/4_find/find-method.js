const myArray = [10, [], {}, 'abc', true, 15];

const res = myArray.find(element => typeof element === 'number');

console.log(res);