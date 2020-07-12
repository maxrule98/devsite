// const parallax = document.querySelectorAll('.parallax');
// const sectionContent = document.querySelectorAll('.site-width');

// observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//           console.log("not Intersecting");
//     } else {
//         window.addEventListener("scroll", () => {
//             // console.log(entry.target.getBoundingClientRect());
//             let sectionTop = entry.target.getBoundingClientRect().top;
//             let sectionCenter = entry.target.getBoundingClientRect().height;
            
//             let obj = window.pageYOffset;
//             console.log(obj)

            
//             entry.target.style.backgroundPositionY = obj * 0.05 + "px";
//         });
//         // observer.unobserve(entry.target);
//     }
//   });
// });

// parallax.forEach(image => {
//   observer.observe(image);
// });



// // window.addEventListener("scroll", () => {
// //     let offset = window.pageYOffset;
// //     parallax[0].style.backgroundPositionY = offset * 0.25 + "px";
// //     parallax[0].children[0].style.transform = "translateY(" + offset * 0.3 + "px)";
// // });

