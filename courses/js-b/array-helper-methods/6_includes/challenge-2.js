const myNumbers = [123, 50, 27];

const pushIfUnique = (inputArray, newElement) => {
  if (newElement === undefined) return 'Pass value to the pushIfUnique() function';
  if (!inputArray.includes(newElement)) {
    inputArray.push(newElement);
    return `${newElement} was added`;
  }
  return 'Warning! duplicate in the function call'
}

console.log(pushIfUnique(myNumbers, 50));
console.log(pushIfUnique(myNumbers, 1));
console.log(pushIfUnique(myNumbers));
console.log(pushIfUnique(myNumbers));
console.log(myNumbers);
