import Swiper from 'swiper/dist/js/swiper.js';
let firstSlider = new Swiper('.first-slider', {
  init: false,
  navigation: {
    nextEl: '.first-slider__next',
    prevEl: '.first-slider__prev',
  },
});

let secondSlider = new Swiper('.second-slider', {
  pagination: {
    el: '.second-slider__pagination',
    clickable: true
  }
});

let clientsSlider = new Swiper('.clients-slider', {
  pagination: {
    el: '.section-clients__slider-pagination',
    clickable: true
  },
  slidesPerView: 3,
  breakpoints: {
    767: {
      slidesPerView: 1,

    },
  }
});

