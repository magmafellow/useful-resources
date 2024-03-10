// Event Propagation in action

window.addEventListener('click', (e) => {
  // e.target.innerText = 'I am good to be';
}, false);

document.addEventListener('click', () => {
  // console.log('DOCUMENT');
}, false);

document.querySelector('.upper').addEventListener('click', (e) => {
  // console.log(e);
  e.target.innerText = 'I am good to be';
}, false);

document.querySelector('.lower').addEventListener('click', (e) => {
  // console.log('div LOWER');
  e.stopPropagation();
  e.target.style.color = 'hotpink';
}, false);

document.querySelector('.btn').addEventListener('click', (e) => {
  // console.log(e);
  e.target.innerText = 'Click there!';
}, false);



















// ----------------------------
// window.addEventListener('click', () => {
//   console.log('WINDOW');
// }, true);

// document.addEventListener('click', () => {
//   console.log('DOCUMENT');
// }, true);

// document.querySelector('.upper').addEventListener('click', () => {
//   console.log('div UPPER');
// }, true);

// document.querySelector('.lower').addEventListener('click', () => {
//   console.log('div LOWER');
// }, true);

// document.querySelector('.btn').addEventListener('click', () => {
//   console.log('target (BUTTON)');
// }, true);
