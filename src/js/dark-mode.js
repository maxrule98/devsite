const darkToggle = document.querySelector("#dark-mode");
const header = document.querySelector("header");
const navLinks = document.querySelector(".col--nav__links");
const sectionLightest = document.querySelectorAll(".section--lightest");
const sectionLight = document.querySelectorAll(".section--light");
const colLightest = document.querySelectorAll(".col--lightest");
const colLight = document.querySelectorAll(".col--light");


// DO THIS WITH LOCALSTORAGE INSTEAD




// console.log(header);

function toggleDarkness() {
    if (localStorage.darkmode === "On") {
        darkToggle.checked = true;
        header.classList.add("dark-mode");
        navLinks.classList.add("dark-mode");
        sectionLightest.forEach(function (el) {
            if (el.id !== "hero") {
                console.log(el);
                el.classList.add("dark-mode");
            } else {
                return;
            }
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
        header.classList.remove("dark-mode");
        navLinks.classList.remove("dark-mode");
        sectionLightest.forEach(function (el) {
            if (el.id !== "hero") {
                console.log(el);
                el.classList.remove("dark-mode");
            } else {
                return;
            }
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