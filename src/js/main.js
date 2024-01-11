const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },

  // Navigation arrows
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      navigation: {
        enabled: true,
      },
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
  },
});

// Event listener fired when slide change
swiper.on('slideChange', function () {
  console.log(swiper.realIndex); // TODO chagne value in DOM
});

const numberOfSlides = swiper.slides.length;
