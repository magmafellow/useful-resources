
function greet() {
  console.log(`Hello`);
}

const timeoutId = setTimeout(greet, 2000, 'Vishwas');
clearTimeout(timeoutId); 
// so nothing will be printed
