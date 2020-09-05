const darkToggle = document.querySelector("#dark-mode");
const header = document.querySelector("header");
const navLinks = document.querySelector(".col--nav__links");
const sectionLightest = document.querySelectorAll(".section--lightest");
const sectionLight = document.querySelectorAll(".section--light");
const colLightest = document.querySelectorAll(".col--lightest");
const colLight = document.querySelectorAll(".col--light");

console.log(header);

function toggleDarkness() {
    
    header.classList.toggle("dark-mode");
    navLinks.classList.toggle("dark-mode");

    sectionLightest.forEach(function (el) {
        if (el.id !== "hero") {
            console.log(el);
            el.classList.toggle("dark-mode");
        } else {
            return;
        }
    });
    sectionLight.forEach(function (el) {
        el.classList.toggle("dark-mode");
    });
    colLight.forEach(function (el) {
        el.classList.toggle("dark-mode");
    });
    colLightest.forEach(function (el) {
        el.classList.toggle("dark-mode");
    });
    // sectionLight.classList.toggle(".dark-mode");
    // colLight.classList.toggle(".dark-mode");
    // colLightest.classList.toggle(".dark-mode");

    // if (darkToggle.checked) {
    //     console.log("On");
    //     sectionLightest.forEach(function (value) {
    //         value.removeAttribute("class", "section--lightest");
    //         value.setAttribute("class", "section--darkest");
    //     });
    //     sectionLight.forEach(function (value) {
    //         value.removeAttribute("class", "section--light");
    //         value.setAttribute("class", "section--dark");
    //     });
    //     colLightest.forEach(function (value) {
    //         value.removeAttribute("class", "col--lightest");
    //         value.setAttribute("class", "col--darkest");
    //     });
    //     colLight.forEach(function (value) {
    //         value.removeAttribute("class", "col--light");
    //         value.setAttribute("class", "col--dark");
    //     });
    // } else {
    //     sectionLightest.forEach(function (value) {
    //         value.removeAttribute("class", "section--darkest");
    //         value.setAttribute("class", "section--lightest");
    //     });
    //     sectionLight.forEach(function (value) {
    //         value.removeAttribute("class", "section--dark");
    //         value.setAttribute("class", "section--light");
    //     });
    //     colLightest.forEach(function (value) {
    //         value.removeAttribute("class", "col--lightest");
    //         value.setAttribute("class", "col--darkest");
    //     });
    //     colLight.forEach(function (value) {
    //         value.removeAttribute("class", "col--light");
    //         value.setAttribute("class", "col--dark");
    //     });
    // }
}

darkToggle.addEventListener('click', (e) => {
    toggleDarkness();
});