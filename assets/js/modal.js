const helpBtn = document.querySelector('.help_btn');
const helpWrap = document.querySelector('.help_modal');

// show modal
helpBtn.addEventListener('click', () => {
  helpWrap.classList.add('show_modal');
});

// window hide modal
window.addEventListener('click', (e) => {
  e.target === helpWrap ? helpWrap.classList.remove('show_modal') : false;
});
