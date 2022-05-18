const humberger = document.querySelector('.humberger');
const menu = document.querySelector('.ulnav');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  menu.classList.toggle('active');
});