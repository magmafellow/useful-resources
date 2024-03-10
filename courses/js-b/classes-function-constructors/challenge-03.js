/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */

class CustomArray extends Array {
  customPush (newEl) {
    console.log(`Initial length is ${this.length}`);
    const lengthOfArr = this.length;
    this[lengthOfArr] = newEl;
    console.log(`Updated length is ${this.length}`);
    this.length = lengthOfArr + 1;
    console.log(`New element ${newEl} was added to CustomArray`);
  }
}

const arr = new CustomArray();

arr.customPush(15);
arr.push(20);

console.log(arr);

arr.customPush(42);
arr.push(88);

console.log(arr);

arr.push(100);

console.log(arr);
