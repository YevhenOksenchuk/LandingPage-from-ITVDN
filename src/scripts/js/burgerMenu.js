(function () {
    const burger = document.querySelector('.burger');
const searchHeader = document.querySelector('.header__link-search')
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.menu__closebtn');

burger.addEventListener('click', function () {
    menu.style.width = "100%"
});


closeMenuBtn.addEventListener('click', function () {
    menu.style.width = "0"
});
})();
