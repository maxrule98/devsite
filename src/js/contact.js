// const contactForm = document.querySelector('.contact-form');
// const API_URL = `/api/v1/contact`;

// contactForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(contactForm);
//     const contactName = formData.get('contactName');
//     const contactEmail = formData.get('contactEmail');

//     const contactSchema = {
//         contactName,
//         contactEmail
//     }

    
//     fetch(API_URL, {
//         method: 'POST',
//         body: JSON.stringify(contactSchema),
//         headers: {
//             'content-type': 'application/json'
//         }
//     });
// });