const menuBurger = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu-close')

menuBurger.addEventListener('click', function () {
    menu.style.left = 0;
    menu.style.opacity = 1;
    menu.style.visibility = 'visible';
})

menuClose.addEventListener('click', function () {
    menu.style.left = -240 + 'px';
    menu.style.opacity = 0;
    menu.style.visibility = 'hidden';
})
