// import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay.min.css';
import 'swiper/modules/pagination.min.css';
import 'swiper/modules/a11y.min.css';

import PageView from './PageView';
import {
  numericSystem,
  swiperOptions,
  dashboardsBoxInfoAnimation as anime,
  numbOfDashs,
} from '../config';

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
        >See Dashboard</a
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

  _lastDashboards(dashboards) {
    return dashboards.toReversed().slice(0, numbOfDashs);
  }
  _renderDashboards({ dashboards }) {
    const lastDashboards = this._lastDashboards(dashboards);

    const dashboardCounter = {
      actual: document.querySelector('.js-counter-actual'),
      ofAll: document.querySelector('.js-counter-of-all'),
    };

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const { actual, ofAll } = dashboardCounter;

    actual.textContent = numericSystem[0];
    ofAll.textContent = numericSystem[lastDashboards.length - 1];

    // Clear swiper container
    swiperWrapper.innerHTML = '';

    //Add dashboards to swiper container
    lastDashboards.forEach((dash, i) => {
      const {
        img: { src, srcMobile, alt },
      } = dash;
      const html = `
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img 
        srcset="${srcMobile} 480w, ${src} 800w"
        sizes="(max-width: 768px) 480px, 800px" 
        src="${src}" 
        alt="${alt}" ${i > 0 ? 'loading="lazy"' : ''}
      />
      </div>
      </div>`;

      swiperWrapper.insertAdjacentHTML('beforeend', html);
    });
  }
  _createSwiper({ dashboards }) {
    const lastThreeDashs = this._lastDashboards(dashboards);
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
      modules: [Pagination, Autoplay, A11y],
      // Optional parameters
      ...swiperOptions,

      a11y: {
        enabled: true,
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
      const { title: infoTitle, desc: infoDesc, btn: infoBtn } = dashboardInfo;
      const currentIndex = swiper.realIndex;

      carouselAnimationHandle(infoTitle, anime.name, anime.duration);
      carouselAnimationHandle(infoDesc, anime.name, anime.duration);
      carouselAnimationHandle(infoBtn, anime.name, anime.duration);
      carouselAnimationHandle(actual, anime.name, anime.duration);

      setTimeout(() => {
        infoTitle.textContent = lastThreeDashs[currentIndex].title;
        infoDesc.textContent = lastThreeDashs[currentIndex].desc;
        infoBtn.href = lastThreeDashs[currentIndex].links.live;
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
