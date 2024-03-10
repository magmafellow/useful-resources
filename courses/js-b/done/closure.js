// closure

function outerFn(mult) {
  const a = 10;
  function innerFn(b) {
    return (a + b) * mult;
  }
  return innerFn;
}

const res1 = outerFn(2);
console.log(res1(20));

const res2 = outerFn(3);
console.log(res2(20));


const r = outerFn(5);
console.log(r(10));
