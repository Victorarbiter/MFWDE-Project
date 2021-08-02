import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import registerServiceWorker from './utils/sw-register';
import App from './views/app';

const app = new App({
  toggler: document.querySelector('.nav__toggle'),
  drawer: {
    navigation: document.querySelector('.nav'),
    blur: document.querySelector('.blur'),
  },
  header: document.querySelector('.header'),
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

// animation-for-hero-image-full

function changeBgFull() {
  const imagesLarge = [
    'url("hero/hero-image_1-large.jpg")',
    'url("hero/hero-image_2-large.jpg")',
    'url("hero/hero-image_3-large.jpg")',
    'url("hero/hero-image_4-large.jpg")',
  ];
  // animation-for-hero-image-mobile
  const imagesSmall = [
    'url("hero/hero-image_1-mobile.jpg")',
    'url("hero/hero-image_2-mobile.jpg")',
    'url("hero/hero-image_3-mobile.jpg")',
    'url("hero/hero-image_4-mobile.jpg")',
  ];

  const display = window.matchMedia('(min-width: 570px)');
  if (display.matches) {
    const hero = document.getElementsByClassName('hero')[0];
    const bg = imagesLarge[Math.floor(Math.random() * imagesLarge.length)];
    hero.style.backgroundImage = bg;
  } else {
    const hero = document.getElementsByClassName('hero')[0];
    const bg = imagesSmall[Math.floor(Math.random() * imagesSmall.length)];
    hero.style.backgroundImage = bg;
  }
}
setInterval(changeBgFull, 3000);
