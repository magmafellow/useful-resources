// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    person: 'William Shakespeare',
    quote: 'A rose by any other name would smell as sweet.'
  },
  {
    person: 'John Kennedy',
    quote: 'Ask not what your country can do for you; ask what you can do for your country.'
  },
  {
    person: 'Rhett Butler (character)',
    quote: `Frankly, my dear, I don't give a damn.`
  },
  {
    person: 'Rudyard Kipling',
    quote: 'He travels the fastest who travels alone.'
  },
  {
    person: 'William Congreve',
    quote: 'Hell has no fury like a woman scorned.'
  },
  {
    person: 'Rick Blaine (character)',
    quote: `Here's looking at you, kid.`
  },
  {
    person: 'Rene Descartes',
    quote: 'I think therefore I am.'
  },
  {
    person: 'Joe Jackson (character)',
    quote: 'If you build it, they will come.'
  },
  {
    person: 'Dorothy (character)',
    quote: `I've got a feeling we're not in Kansas anymore.`
  },
];

btn.addEventListener('click', function() {
  
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  
})
