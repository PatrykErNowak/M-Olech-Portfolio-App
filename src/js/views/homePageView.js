import PageView from './PageView.js';
import {
  numericSystem,
  swiperOptions,
  dashboardsBoxInfoAnimation as anime,
} from '../config.js';

class Home extends PageView {
  pageTitle = 'Home';
  _html = `
  <div class="carousel-box">
    <div class="swiper carousel">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide carousel__slide">
          <div class="carousel__img-box">
            <img src="" alt="" />
          </div>
        </div>
        <div class="swiper-slide carousel__slide">
          <div class="carousel__img-box">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  
    <div class="carousel-info">
      <h2 class="carousel-info__title js-info-title">
        Northwind Traders
      </h2>
      <p class="carousel-info__desc js-info-desc">
        A top-level KPI dashboard made to help Northwind Traders'
        executives quickly understand the company's performance in key
        areas.
      </p>
      <a
        href="#"
        class="carousel-info__link btn btn--secondary btn--white js-info-btn"
        >See more</a
      >
      <div class="carousel-info__counter">
        <p class="num-of-slide">
          <span class="js-counter-actual"></span> /
          <span class="js-counter-of-all">II</span>
        </p>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>`;
  _renderDashboards({ dashboards }) {
    const dashboardCounter = {
      actual: document.querySelector('.js-counter-actual'),
      ofAll: document.querySelector('.js-counter-of-all'),
    };

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const { actual, ofAll } = dashboardCounter;

    actual.textContent = numericSystem[0];
    ofAll.textContent = numericSystem[dashboards.length - 1];

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

      swiperWrapper.insertAdjacentHTML('beforeend', html);
    });
  }
  _createSwiper({ dashboards }) {
    const dashboardCounter = {
      actual: document.querySelector('.js-counter-actual'),
      ofAll: document.querySelector('.js-counter-of-all'),
    };
    const dashboardInfo = {
      title: document.querySelector('.js-info-title'),
      desc: document.querySelector('.js-info-desc'),
      btn: document.querySelector('.js-info-btn'),
    };

    const carouselAnimationHandle = function (element, animeClass, duration) {
      element.classList.add(animeClass);
      element.style.animationDuration = duration + 'ms';
      element.addEventListener('animationend', () => {
        element.classList.remove(animeClass);
      });
    };

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      ...swiperOptions,

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
      const { title: infoTitle, desc: infoDesc, btn: infoBtn } = dashboardInfo;
      const currentIndex = swiper.realIndex;

      carouselAnimationHandle(infoTitle, anime.name, anime.duration);
      carouselAnimationHandle(infoDesc, anime.name, anime.duration);
      carouselAnimationHandle(infoBtn, anime.name, anime.duration);
      carouselAnimationHandle(actual, anime.name, anime.duration);

      setTimeout(() => {
        infoTitle.textContent = dashboards[currentIndex].title;
        infoDesc.textContent = dashboards[currentIndex].desc;
        infoBtn.href = dashboards[currentIndex].links.live;
        actual.textContent = numericSystem[currentIndex];
      }, anime.duration * 0.5);
    });
  }

  _init(data) {
    this._renderDashboards(data);
    this._createSwiper(data);
  }
}

export default new Home();
