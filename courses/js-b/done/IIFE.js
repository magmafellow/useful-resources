// Immediately Invoked Function Expression (IIFE)
// OPT #1
// (function(obj) {
//   obj.customMethod = function() {
//     console.log('Hello from Alex Romanov');
//   };
// })(this);


// OPT #2
// (function() {
//   this.customMethod = function() {
//     console.log('Hello from Alex Romanov');
//   };
// })();


// OPT #3
(() => {
  this.customMethod = () => {
    console.log('Greeting from the custom method')
  };
})();

customMethod();
