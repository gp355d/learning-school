const swiper01 = new Swiper(".mySwiper", {
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

const swiper02 = new Swiper('.swiperx', {
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

const swiper03 = new Swiper(".mySwiper2", {
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
$(function () {
  const elem = document.querySelector('input[name="datepicker"]');
  const today = new Date();
  if (elem) {
    const datepicker = new Datepicker(elem, {
      autohide: true,
      language: 'zh-TW',
      // 設定日期格式
      format: 'yyyy-mm-dd',
      // 設定最小日期為今天
      minDate: today,
    });
  }
});