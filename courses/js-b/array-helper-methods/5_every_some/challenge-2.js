function arraysAreEqual(arr1, arr2) {
  return arr1.every((item, index, arr) => item === arr2[index] && arr.length === arr2.length);
}

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];


console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false
