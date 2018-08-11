import Swiper from 'swiper/dist/js/swiper.js';
let firstSlider = new Swiper('.first-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let secondSlider = new Swiper('.second-slider', {});

