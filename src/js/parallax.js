const parallax = document.querySelectorAll('.parallax');
console.log(parallax);


window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    parallax[0].style.backgroundPositionY = offset * 0.25 + "px";
});