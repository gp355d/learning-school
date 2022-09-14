$(function() {
  console.log('Hello Bootstrap5');
  const elem = document.querySelector('input[name="datepicker"]');
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-CN',

  }); 
});

// var swiper = new Swiper(".course-swiper", {
//   autoplay: {
//       disableOnInteraction: false,
//       delay: 0
//   },
//   speed: 1500,
//   loop: true,
//   spaceBetween: 16,
//   slidesPerView: 3,
//   //多欄
//   breakpoints: {
//       768: {
//           slidesPerView: 6
//       },
//       992: {
//           slidesPerView: 9
//       }
//   }

// });

var swiperz = new Swiper(".mySwiper", {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  // loop: true,
  spaceBetween: 15,
  slidesPerView: 3,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 6
      },
      992: {
          slidesPerView: 9
      }
  }
});

const swiper = new Swiper('.swiperx', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperz = new Swiper(".mySwiper2", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  spaceBetween: 15,
  slidesPerView: 3,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 6
      },
      992: {
          slidesPerView: 9
      }
  }
});
