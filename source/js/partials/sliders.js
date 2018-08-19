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
    el: '.second-slider-wrapper__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.first-section__arr-right',
    prevEl: '.first-section__arr-left',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true
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
    }
  }
});

let worksSlider = new Swiper('.works-slider', {
  pagination: {
    el: '.section-how-it-works__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.works-slider-wrapper__next',
    prevEl: '.works-slider-wrapper__prev',
  },
});




