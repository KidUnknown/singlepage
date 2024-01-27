import Alpine from 'alpinejs';
import './site.scss';

window.Alpine = Alpine;

Alpine.start();

// const observer = new IntersectionObserver((sections) => {
//   sections.forEach((section) => {
//     if (section.isIntersecting) {
//       section.target.classList.add('open');
//     } else {
//       section.target.classList.remove('open');
//     }
//   });
// });

// const sectionElements = document.querySelectorAll('section');
// const closedElements = document.querySelectorAll('.closed');
// const buttonIdClick = document.querySelectorAll('a');

// for (let i = 0; i < buttonIdClick.length; i++) {
//   sectionElements[i].setAttribute('id', + i);
//   buttonIdClick[i].setAttribute('href', `#${i+1}`);
// }

// closedElements.forEach((el) => observer.observe(el));
