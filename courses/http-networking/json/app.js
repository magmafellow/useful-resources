const url = 'http://jsonplaceholder.typicode.com/todos/1'


const getData = async (url) => {
  console.log(`I'am called`);
  const res = await fetch(url);
  console.log(`I am after await keyword getData()`)
  return res.json();
}

const printData = async (url) => {
  console.log(`I'am called`);
  const res = await fetch(url);
  console.log(`I am after await keyword printData()`);
  const r = await res.json();
  console.log(r.id);
  return r;
}


getData(url).then((r) => console.log(r.id));
console.log(printData(url));
