// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// adding items
ul.append(li);

// modifying the text

li.innerText = 'X-men';

// modifying Attributes & Classes

// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

// Remove Elements

li.remove();
