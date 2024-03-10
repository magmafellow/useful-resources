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


async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // after 2 secs

  const world = await resolveWorld();
  console.log(world); // after 2 secs + 1 sec
}

sequentialStart();
