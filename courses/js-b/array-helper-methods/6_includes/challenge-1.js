const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser']
];

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 }
];

const primitiveTypesArray = [
  25,
  'x',
  true,
  undefined,
  null
];


const checkIncludes = (searchItem, array) => {
  if (typeof searchItem === 'object') {
    searchItem = JSON.stringify(searchItem);
    array = array.map(value => JSON.stringify(value));
  }
  return array.includes(searchItem);
}


console.log(checkIncludes(
  {title: 'Orange', quantity: 10},
  fruits
));

console.log(checkIncludes(
  ['javascript', 'es6'],
  tags,
));

console.log(checkIncludes(
  {title: 'Banana'},
  fruits
));

console.log(checkIncludes(99, primitiveTypesArray));
