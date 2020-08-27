const cookieContainer = document.querySelector('.cookies');
const cookieAccept = document.querySelector('#cookieAccept');
const cookieReject = document.querySelector('#cookieReject');

cookieContainer.addEventListener("click", () => {
    event.preventDefault();
});

cookieAccept.addEventListener("click", () => {
    console.log('Cookies Accepted');
    cookieContainer.classList.remove("appear");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

cookieReject.addEventListener("click", () => {
    console.log('Cookies Rejected')
    cookieContainer.classList.remove("appear");
});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("appear")
    }
}, 2000);