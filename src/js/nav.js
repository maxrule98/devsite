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
const navLinks = document.querySelector(".nav__links");
const navOverlay = document.querySelector(".nav__overlay");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle('hidden');
    navOverlay.classList.toggle('hidden');
});

navOverlay.addEventListener("click", () => {
    navLinks.classList.add('hidden');
    navOverlay.classList.toggle('hidden');
});

// navBtn.addEventListener("click", () => {
//     navLinks.classList.remove('hidden');
//     if (navLinks.classList.length === 3) {
//         navBtn.innerHTML = '<svg class="btn--nav__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
//     } else {
//         navBtn.innerHTML = '<svg class="btn--nav__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>';
//     }
// });