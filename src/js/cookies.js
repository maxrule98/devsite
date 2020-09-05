const cookieContainer = document.querySelector('.cookies');
const cookieAccept = document.querySelector('#cookieAccept');
const cookieReject = document.querySelector('#cookieReject');

// cookieContainer.addEventListener("click", () => {
//     event.preventDefault();
// });

cookieAccept.addEventListener("click", () => {
    event.preventDefault();
    console.log('Cookies Accepted');
    cookieContainer.classList.remove("appear");
    localStorage.setItem("cookiesAccepted", "true");
});

cookieReject.addEventListener("click", () => {
    event.preventDefault();
    console.log('Cookies Rejected')
    cookieContainer.classList.remove("appear");
});

setTimeout(() => {
    if(!localStorage.getItem("cookiesAccepted")) {
        cookieContainer.classList.add("appear")
    }
}, 2000);