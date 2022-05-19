const humberger = document.querySelector('.humberger');
const b = document.querySelector('.b');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const menu = document.querySelector('.ulnav');

humberger.addEventListener('click', () => {
humberger.classList.toggle('active');
menu.classList.toggle('active');
});

b.addEventListener('click', () => {
humberger.classList.remove('active');
menu.classList.remove('active');
});

b2.addEventListener('click', () => {
  humberger.classList.remove('active');
  menu.classList.remove('active');
});

b3.addEventListener('click', () => {
  humberger.classList.remove('active');
  menu.classList.remove('active');
});
