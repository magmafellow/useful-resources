/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((accumulator, newValue) => accumulator + newValue, 0);
  }

  onlyNumbers() {
    // returns instance of ExtendedArray. Same input - the same output.
    return this.filter(val => typeof val === 'number');
  }
}

const mySpecArray = new ExtendedArray(3, 10, 150, 2);

console.log(mySpecArray);
