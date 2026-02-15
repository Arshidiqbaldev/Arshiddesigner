// Grab elements by ID
const menu  = document.getElementById('mob-menu');   // the menu
const open  = document.getElementById('openBtn');    // open button
const close = document.getElementById('closeBtn');   // close button

// Open menu: add "open" class
open.addEventListener('click', () => {
  menu.classList.add('open');
});

// Close menu: remove "open" class
close.addEventListener('click', () => {
  menu.classList.remove('open');
});


// animate

    const navLinks = document.querySelectorAll('.nav-page-name');

open.addEventListener('click', () => {
  menu.classList.add('open');
  navLinks.forEach(link => link.classList.add('animate'));
});

close.addEventListener('click', () => {
  menu.classList.remove('open');
  navLinks.forEach(link => link.classList.remove('animate')); // reset
});
