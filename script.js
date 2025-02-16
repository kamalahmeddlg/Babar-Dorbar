const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('menu-expanded');
  menuBtn.classList.toggle('open');
});
