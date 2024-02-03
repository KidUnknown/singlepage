import Alpine from 'alpinejs';
// import openProps from 'open-props';

import './site.scss';

window.Alpine = Alpine;

Alpine.start();

const pageTitleWatcher = document.querySelector('.page-title');
const primaryHeader = document.querySelector('.primary-header');

const options = {
  root: null, // it is viewport
  threshold: 0,
  rootMargin: "2.5%"
};

const scrollObserver = new IntersectionObserver(function(entries) {
  primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
  // entries.forEach(entry => {
  //   console.log('Entry: ', entry);
  // });
}, options);

scrollObserver.observe(pageTitleWatcher);
