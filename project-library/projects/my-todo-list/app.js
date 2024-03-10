// Variable Section

const inputArea = document.querySelector('.input-container input');
const createBtn = document.querySelector('.todo-create');
const checkBtns = document.querySelectorAll('.todo-check');
const delBtns = document.querySelectorAll('.todo-del');
const todoContainer = document.querySelector('.todo-container')
todoContainer.style.display = 'none';
const wrapper = document.querySelector('.wrapper');
let first = true;


createBtn.addEventListener('click', function(e) {
  const inputContent = inputArea.value;
  if(inputContent === ''){
    return false;
  }
  if (true) {
    todoContainer.style.display = '';
    first = false;
  }
  inputArea.value = '';
  createNewTodo(inputContent);
})


// Bad way. Future check btns will not work this way. YOU MUST USE DELEGATION FOR PARENT
// checkBtns.forEach(function(el) {
//   el.addEventListener('click', function() {
//     if(this.parentElement.querySelector('.todo-text').style.textDecoration === 'line-through') {
//       this.parentElement.querySelector('.todo-text').style.textDecoration = '';
//       this.innerText = 'Check';
//       return undefined;
//     }
//     this.parentElement.querySelector('.todo-text').style.textDecoration = 'line-through';
//     this.innerText = 'Uncheck';
//   })
// })


// for checkBtn
todoContainer.addEventListener('click', function(e) {
  const that = e.target;
  console.log(that);
  if (e.target.matches('.todo-check')) {
    console.log('matches');
    if(that.parentElement.querySelector('.todo-text').style.textDecoration === 'line-through') {
      console.log('in if');
      that.parentElement.querySelector('.todo-text').style.textDecoration = '';
      that.parentElement.style.background = '';
      // that.parentElement.style.backdropFilter = '';
      that.parentElement.querySelector('.todo-text').style.filter = '';
      that.innerText = 'Check';
    } else {
      console.log('in else');
      that.parentElement.querySelector('.todo-text').style.textDecoration = 'line-through';
      that.parentElement.style.background = '#6f5257';
      // that.parentElement.style.backdropFilter = 'blur(4px)';
      that.parentElement.querySelector('.todo-text').style.filter = 'blur(1.5px)';
      that.innerText = 'Uncheck';
    }
    
  }
})

// for delBtn
todoContainer.addEventListener('click', function(e) {
  const that = e.target;
  if (that.matches('.todo-del')) {
    that.parentElement.remove();
    const tasks = document.querySelectorAll('.todo-task');
    if(tasks.length === 0) {
      todoContainer.style.display = 'none';
    }
  }
})

function createNewTodo(content) {
  const newTodo = document.createElement('div');
  const newText = document.createElement('div');
  const newCheckBtn = document.createElement('button');
  const newDelBtn = document.createElement('button');

  newText.innerText = content;
  newText.classList.add('todo-text');

  newCheckBtn.innerText = 'Check';
  newCheckBtn.classList.add('todo-check');

  newDelBtn.innerText = 'Del';
  newDelBtn.classList.add('todo-del');

  newTodo.classList.add('todo-task');
  newTodo.append(newText, newCheckBtn, newDelBtn);

  todoContainer.append(newTodo);
}
