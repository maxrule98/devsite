const menu = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");

menu.addEventListener('click', () => {
    links.classList.toggle('hidden');
    bar1.classList.toggle('open');
    bar2.classList.toggle('open');
});