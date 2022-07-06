let burger = document.querySelector('.burger');
let menu = document.querySelector('.navlinks');

burger.addEventListener('click', ()=> {
    menu.classList.toggle('shift');
})