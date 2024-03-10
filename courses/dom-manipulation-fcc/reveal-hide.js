// Reveal & Hide Game

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.content')

function revealContent() {

  if(hiddenContent.classList.contains('reveal-content')) {
    hiddenContent.classList.remove('reveal-content');
    revealBtn.classList.toggle('revealed');
  } else {
    hiddenContent.classList.add('reveal-content');
    revealBtn.classList.toggle('revealed');
  }
}

revealBtn.addEventListener('click', revealContent);
