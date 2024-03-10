// every & some array methods

// example #1

// const myNumbers = [-3, -5, -1, -10, -7];

// const isPositiveNumber = (num) => num > 0 && typeof num === 'number';

// const allPositiveCheck = myNumbers.every(isPositiveNumber);
// console.log(allPositiveCheck ? 'All numbers are POSITIVE' : 'Not at all!');

// const somePositiveCheck = myNumbers.some(isPositiveNumber);
// console.log(somePositiveCheck ? 'Some number is positive' : 'Absolutely no');

// example #2
const items = [
  {
    title: 'Computer',
    quantity: 14
  },
  {
    title: 'Phone',
    quantity: 6
  },
  {
    title: 'Headphones',
    quantity: 15
  }
];

// all items have quantity > 5
if (items.every((item) => item.quantity > 5)) {
  console.log('All items are available');
}
// all items have quantity > 0 and some items have 0 < quantity <= 5
if (items.every((item) => item.quantity > 0) && items.some((item) => item.quantity <= 5)) {
  console.log('Some items may be sold soon');
}
// some items have quantity 0
if (items.some((item) => item.quantity === 0)) {
  console.log('Some items have been sold out!');
}
