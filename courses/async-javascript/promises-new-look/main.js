
const fast = new Promise((resolve, reject) => {
  // async action
  setTimeout(resolve, 700, 'I am faster');

});

const slow = new Promise((resolve, reject) => {
  // async action
  setTimeout(resolve, 1000, 'I am slower');
})


Promise.race([slow, fast]).then((r) => {
  console.log(r);
  console.log('Doing another things related to post-promise-actions');
})
