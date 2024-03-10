const url = 'https://jsonplaceholder.typicode.com/todos';

// async function iterateTodos () {
//   const todosResponse = await fetch(url);
//   console.log(todosResponse.text());
//   const arrayOfTodos = await todosResponse.json();

//   for (const item of arrayOfTodos) {
//     console.log(item.id);
//   }

//   const sumOfAllIds = arrayOfTodos.reduce((acc, nextObj) => acc + nextObj.id, 0);

//   console.log(`Sum of all Ids is as follows: \n ----> -<${sumOfAllIds}>-`);

//   return undefined;
// }

// iterateTodos();


async function iterateTodos () {
  const todosResponse = await fetch(url);
  const r = await todosResponse.text();
  console.log(r);
  myObj = JSON.parse(r);

  console.log('------');
  
  console.log(myObj);
}

iterateTodos();
