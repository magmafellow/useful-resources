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

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello);
  console.log(await world); // 2 seconds taken total
}

concurrentStart();
