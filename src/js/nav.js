// const menu = document.querySelector(".nav__toggle");
// const links = document.querySelector(".nav__links");
// const bar1 = document.querySelector(".bar-1");
// const bar2 = document.querySelector(".bar-2");

// menu.addEventListener('click', () => {
//     links.classList.toggle('hidden');
//     bar1.classList.toggle('open');
//     bar2.classList.toggle('open');
// });

const navBtn = document.querySelector(".btn--nav");
const navLinks = document.querySelector(".nav");

console.log(navLinks.classList);

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle('hidden');
    if (navLinks.classList.length === 3) {
        navBtn.innerText = '☰';
    } else {
        navBtn.innerText = '✕';
    }
});