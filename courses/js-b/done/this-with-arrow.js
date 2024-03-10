// this keyword in arrow functions

// example 1

// const num = {
//   value: 100,
//   info: () => {
//     console.log(this);
//     return this.value;
//   }
//   // info: function info() {
//   //   console.log(this);
//   //   return this.value;
//   // }
// }

// console.log(num.info());


// example 2
// const anotherNum = {
//   value: 5,
//   info: () => {
//     console.log(this);
//     return this.value;
//   }
//   // info: function info() {
//   //   console.log(this);
//   //   return this.value;
//   // }
// }

// const newNum = {
//   value: 17
// };

// console.log(anotherNum.info.call(newNum));


// example 3
const str = {
  value: 'Delayed greeting',
  // this is lost in the callback function
  // greet: function greet() {
  //   setTimeout(function () {
  //     console.log(this); // window
  //     console.log(this.value); // undefined
  //   }, 1000)
  //   return 'from greet return'
  // },
  // option 1
  // greet: function greet() {
  //   const self = this;
  //   setTimeout(function () {
  //     console.log(self);
  //     console.log(self.value); // delayed greeting
  //   }, 1000)
  //   return 'from greet return'
  // },
  
  // option 2
  // greet: function greet() {
  //   setTimeout(function () {
  //     console.log(this); // str
  //     console.log(this.value); // delayed greeting
  //   }.bind(this), 1000)
  //   return 'from greet return'
  // }

  //
  greet: function greet() {
    setTimeout(() => {
      console.log(this); // window
      console.log(this.value); // undefined
    }, 1000)
    return 'from greet return'
  }
}

str.greet();
