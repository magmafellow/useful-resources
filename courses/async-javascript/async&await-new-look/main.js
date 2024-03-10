function resolveHello() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('Hello');
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve('World');
    }, 1000);
  });
}

// no-async function
// function parallel() {
//   Promise.all([
//     (async () => console.log(await resolveHello()))(), // after 2 seconds
//     (async () => console.log(await resolveWorld()))(), // after 1 second
//   ])
//   console.log('Finally here');
// }


// async function with non-blocking behavior
async function parallel() {
  const arr = await Promise.all([
    (async () => console.log(await resolveHello()))(), // after 2 seconds
    (async () => console.log(await resolveWorld()))(), // after 1 second
  ])
  console.log(arr);
  console.log('Final');
}

parallel();
