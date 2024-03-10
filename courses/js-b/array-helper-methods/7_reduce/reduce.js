// // example 1
// const myNumbers = [5, 10, 3, 15];

// const sum = arr => arr.reduce(
//   (accumulator, number) => accumulator + number,
//   0
// );

// console.log(sum(myNumbers));


// // example 2 - reduce array of objects
// const persons = [
//   {
//     name: 'Veronica',
//     age: 25
//   },
//   {
//     name: 'John',
//     age: 21
//   },
//   {
//     name: 'Mike',
//     age: 27
//   }
// ];

// const personsNames = arrayOfPersons => 
//   arrayOfPersons.reduce((names, person) => {
//     console.log('step');
//     names.push(person.name);
//     return names;
// }, []);

// console.log(personsNames(persons));


// example 3 - remove duplicates
const fruits = ['banana', 'orange', 'apple', 'apple', 'orange', 'mango'];

const uniqueFruits = arrayOfFruits => arrayOfFruits.reduce((uniqueElements, fruit) => {
  if (!uniqueElements.includes(fruit)) uniqueElements.push(fruit);
  return uniqueElements;
}, []);

console.log(uniqueFruits(fruits));
