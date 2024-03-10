// Variable Section

const pauseBtn = document.querySelector('.pause');
const goBtn = document.querySelector('.reset');
const timeEl = document.querySelector('#time');

let time = 0;
let timeSecs = 0;
let timeMins = 0;
let timeHours = 0;

let running = false;
let stopIntervalId = null;

// Puase/Continue  |  Go/Reset

goBtn.addEventListener('click', function() {
  if (this.innerText.toLowerCase() === 'go') {
    if (running) {
      return false;
    }
    this.innerText = 'reset';
    stopIntervalId = timeGo();
    running = true;

  } else if (this.innerText.toLowerCase() === 'reset') {
    clearInterval(stopIntervalId);
    timeEl.innerText = '00.00.00';
    timeSecs = 0;
    timeMins = 0;
    timeHours = 0;
    this.innerText = 'go';
    running = false;
    pauseBtn.innerText = 'pause';
  }
  
})

pauseBtn.addEventListener('click', function() {
  if (this.innerText.toLowerCase() === 'pause') {
    if (!running) {
      return false;
    }
    timeStop(stopIntervalId);
    this.innerText = 'continue';
    running = false;
  } else if (this.innerText.toLowerCase() === 'continue') {
    if (running) {
      return false;
    }
    stopIntervalId = timeGo();
    this.innerText = 'pause';
    running = true;
  }
})


function timeGo() {
  const stopIntervalId = setInterval(() => {
    timeSecs += 1;
    if (timeSecs === 60) {
      timeSecs = 0;
      timeMins += 1;
    }
    if (timeMins === 60) {
      timeMins = 0;
      timeHours += 1;
    }
    timeEl.innerHTML = `${timeHours > 9 ? timeHours : '0' + timeHours}.${timeMins > 9 ? timeMins : '0' + timeMins}.${timeSecs > 9 ? timeSecs : '0' + timeSecs}`;
  }, 1000)
  return stopIntervalId;
}

function timeStop(clearId) {
  clearInterval(clearId);
  return 'I cleared that callbackfunction from repeated loop';
}
