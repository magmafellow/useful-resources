// Callbacks, events, event queue and execution context stack
const waitingFn = function(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {
    // waiting...
  }
  return undefined;
}



setTimeout(() => console.log('Callback is executed'), 0);

waitingFn(5000);

console.log('Last statement in the global execution context');
