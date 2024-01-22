// Main scripts to dynamically change content
// DOM Elements
const dashboardCounter = {
  actual: document.querySelector('.js-counter-actual'),
  ofAll: document.querySelector('.js-counter-of-all'),
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

// --------------------------------------------------------------------
// Animations

// Animation for carousel/swiper utilitiy function
const carouselAnimationHandle = function (element, animeClass, duration) {
  element.classList.add(animeClass);
  element.style.animationDuration = duration + 'ms';
  element.addEventListener('animationend', () => {
    element.classList.remove(animeClass);
  });
};

// Animations fired only when user open page
const animation = function () {
  const isMobile = window.navigator.userAgentData.mobile;

  if (isMobile) return;
  const gif = document.querySelector('.js-gif');
  // Stop playing gif
  gif.src = '';

  const gifAnimation = function (delay = 0) {
    //Delay
    setTimeout(() => (gif.src = './img/arrow-gif.gif'), delay);
    //Stop After
    setTimeout(() => (gif.src = './img/arrow-gif.png'), delay + 3000);
  };

  const displayGifAnimationOnce = function () {
    gifAnimation(0);
    this.removeEventListener('animationend', displayGifAnimationOnce);
  };

  const header = {
    portrait: document.querySelector('[data-anime="portrait"]'),
    h1: document.querySelector('[data-anime="title"]'),
    desc: document.querySelector('[data-anime="desc"]'),
    other: document.querySelectorAll('[data-anime="all"]'),
  };
  const main = document.querySelector('.main-content');

  header.portrait.classList.add('slide-in-left');
  header.h1.classList.add('slide-in-top');
  header.desc.classList.add('fade-in');
  header.other.forEach((el) => el.classList.add('fade-in'));
  main.classList.add('slide-in-right');

  header.h1.style.animationDelay = '500ms';
  header.desc.style.animationDelay = '1000ms';
  header.other.forEach((el) => (el.style.animationDelay = '1500ms'));
  main.style.animationDelay = '1500ms';

  main.addEventListener('animationend', displayGifAnimationOnce);
};

animation();

// ------------------------------------------------------------------
// Swiper settings

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1000,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 7000,
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
  const { actual } = dashboardCounter;
  const { title: infoTitle, desc: infoDesc } = dashboardInfo;
  const currentIndex = swiper.realIndex;

  // actual.textContent = romanNumerals[currentIndex];
  infoTitle.textContent = dashboards[currentIndex].title;
  infoDesc.textContent = dashboards[currentIndex].desc;

  carouselAnimationHandle(infoTitle, 'fade-in', 2000);
  carouselAnimationHandle(infoDesc, 'fade-in', 2000);

  // TESTING TODO
  // carouselAnimationHandle(actual, 'test-anime', 2000);
  if (currentIndex === 0) {
    actual.innerHTML = 'I';
  }
  if (currentIndex === 1) {
    actual.innerHTML = 'I<span class="fade-in">I</span>';
  }
});
