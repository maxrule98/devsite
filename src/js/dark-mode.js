const bodyParser = require("body-parser");

const darkToggle = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const sectionLightest = document.querySelectorAll(".section--lightest");
const sectionLight = document.querySelectorAll(".section--light");
const colLightest = document.querySelectorAll(".col--lightest");
const colLight = document.querySelectorAll(".col--light");


// DO THIS WITH LOCALSTORAGE INSTEAD


// console.log(header);

function toggleDarkness() {
    if (localStorage.darkmode === "On") {
        darkToggle.checked = true;
        body.style.background = "var(--darkest)";
        header.classList.add("dark-mode");
        navLinks.classList.add("dark-mode");
        sectionLightest.forEach(function (el) {
            if (el.id !== "hero") {
                el.classList.add("dark-mode");
            } else {
                return;
            }
        });
        navLink.forEach(function (el) {
            el.classList.add("dark-mode");
        });
        sectionLight.forEach(function (el) {
            el.classList.add("dark-mode");
        });
        colLight.forEach(function (el) {
            el.classList.add("dark-mode");
        });
        colLightest.forEach(function (el) {
            el.classList.add("dark-mode");
        });
    } else {
        darkToggle.checked = false;
        body.style.background = "var(--lightest)";
        header.classList.remove("dark-mode");
        navLinks.classList.remove("dark-mode");
        sectionLightest.forEach(function (el) {
            if (el.id !== "hero") {
                el.classList.remove("dark-mode");
            } else {
                return;
            }
        });
        navLink.forEach(function (el) {
            el.classList.remove("dark-mode");
        });
        sectionLight.forEach(function (el) {
            el.classList.remove("dark-mode");
        });
        colLight.forEach(function (el) {
            el.classList.remove("dark-mode");
        });
        colLightest.forEach(function (el) {
            el.classList.remove("dark-mode");
        });
    }
}

darkToggle.addEventListener('click', (e) => {
    if (darkToggle.checked) {
        localStorage.setItem("darkmode", "On");
        toggleDarkness()
    } else {
        localStorage.removeItem("darkmode", "On");
        toggleDarkness()
    }
});

document.addEventListener('DOMContentLoaded', () => {
    toggleDarkness();
})