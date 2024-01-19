// Main scripts to dynamically change content
// DOM Elements
const dashboardCounter = {
  actual: document.querySelector('.js-counter-actual'),
  ofAll: document.querySelector('.js-counter-of-all'),
  title: document.querySelector('.js-counter-title'),
};
const dashboardInfo = {
  title: document.querySelector('.js-info-title'),
  desc: document.querySelector('.js-info-desc'),
};
const swiperWrapper = document.querySelector('.swiper-wrapper');

const displayDashboards = function (dashboards, numSys) {
  const { actual, ofAll } = dashboardCounter;

  actual.textContent = numSys[0];
  ofAll.textContent = numSys[dashboards.length - 1];

  // Clear swiper container
  swiperWrapper.innerHTML = '';

  //Add dashboards to swiper container
  dashboards.forEach((dash) => {
    const {
      img: { src, alt },
    } = dash;
    const html = `
    <div class="swiper-slide carousel__slide">
    <div class="carousel__img-box">
    <img src="${src}" alt="${alt}" />
    </div>
    </div>`;

    swiperWrapper.insertAdjacentHTML('afterbegin', html);
  });
};

displayDashboards(dashboards, romanNumerals);

// ------------------------------------------------------------------
// Swiper settings

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
  const { actual, title } = dashboardCounter;
  const { title: infoTitle, desc: infoDesc } = dashboardInfo;
  const targetIndex = swiper.realIndex;

  actual.textContent = romanNumerals[targetIndex];
  title.textContent = infoTitle.textContent = dashboards[targetIndex].title;
  infoDesc.textContent = dashboards[targetIndex].desc;
});

// GIF Handler

const gif = document.querySelector('.js-gif');
setTimeout(() => (gif.src = './img/arrow-gif.png'), 3000);
