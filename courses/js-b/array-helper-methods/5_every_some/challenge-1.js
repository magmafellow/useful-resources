const a = [5, 'abc', 10, 1];
const b = [5, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arrayCheck = (inputArray) => {
  let allNumbers;
  allNumbers = inputArray.every((item) => typeof item === 'number');
  
  let inAsc;
  inAsc = inputArray.every((item, index, arr) => item <= (arr[index+1] === undefined ? 1000000 : arr[index+1]));

  let inDesc;
  inDesc = inputArray.every((item, index, arr) => item >= (arr[index+1] === undefined ? -1000000 : arr[index+1]));
  
  if (!allNumbers) {
    return 'Some elements are not numbers';
  } else if (inAsc) {
    return 'Array is sorted in Ascending order';
  } else if (inDesc) {
    return 'Array is sorted in Descending order';
  }
  return 'Array consists of numbers and is not sorted';
}

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));
console.log(arrayCheck(d));
