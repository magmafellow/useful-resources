// DOM Manipulation

// Event Listeners

// element.addEventListener('type', function)

const buttonTwo = document.querySelector('.span-two');
// console.log(buttonTwo);
function alertBtn() {
  alert('I also love JavaScript');
};

buttonTwo.addEventListener('click', alertBtn);


// Mouse over event

const newBackgroundColor = document.querySelector('.card-3');

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);  
