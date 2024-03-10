// Arrow functions. These guys are always anonymous and are expressions

// anonymous function expression
function (a, b) {
  return a + b;
}

// anonymous arrow function expression

// implicit return of a + b
(a, b) => a + b
(a, b) => {
  return a + b;
}

a => a * a
a => {
  return a * a;
}

() => 2 // implicitly returns 2

(a, b) => {
  return {
    a1: a,
    b1: b
  }
}

(a, b) => ({
  a1: a,
  b1: b
})
