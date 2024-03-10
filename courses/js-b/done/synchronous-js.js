// challenge

function waitingFn(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {
  //  waiting...
  }
}

waitingFn(1000);

console.log('Program has just finished its work');
