

document.querySelector('#football').addEventListener('click', (e) => {
  console.log('football is clicked');
  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'blue';
  }
});

document.querySelector('#basketball').addEventListener('click', (e) => {
  console.log('basketball is clicked');
  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'blue';
  }
});

document.querySelector('#boxing').addEventListener('click', (e) => {
  console.log('boxing is clicked');
  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'blue';
  }
});

document.querySelector('#tennis').addEventListener('click', (e) => {
  console.log('tennis is clicked');
  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'blue';
  }
});

document.querySelector('#golf').addEventListener('click', (e) => {
  console.log('golf is clicked');
  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'blue';
  }
});
