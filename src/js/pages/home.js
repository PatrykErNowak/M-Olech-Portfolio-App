const home = {
  title: 'Home',
  html: `
  <div class="carousel-box">
    <div class="swiper carousel">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide carousel__slide">
          <div class="carousel__img-box">
            <img src="./img/dashboard-2.png" alt="" />
          </div>
        </div>
        <div class="swiper-slide carousel__slide">
          <div class="carousel__img-box">
            <img src="./img/dashboard-1.png" alt="" />
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
        class="carousel-info__link btn btn--secondary btn--white"
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
  </div>`,
  renderDashboards(dashboards, numSys) {
    const dashboardCounter = {
      actual: document.querySelector('.js-counter-actual'),
      ofAll: document.querySelector('.js-counter-of-all'),
    };

    const swiperWrapper = document.querySelector('.swiper-wrapper');
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
  },
  createSwiper() {
    const dashboardCounter = {
      actual: document.querySelector('.js-counter-actual'),
      ofAll: document.querySelector('.js-counter-of-all'),
    };
    const dashboardInfo = {
      title: document.querySelector('.js-info-title'),
      desc: document.querySelector('.js-info-desc'),
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

      carouselAnimationHandle(infoTitle, 'fade-out-in', 1000);
      carouselAnimationHandle(infoDesc, 'fade-out-in', 1000);
      carouselAnimationHandle(actual, 'fade-out-in', 1000);

      setTimeout(() => {
        infoTitle.textContent = dashboards[currentIndex].title;
        infoDesc.textContent = dashboards[currentIndex].desc;
        actual.textContent = romanNumerals[currentIndex];
      }, 500);
    });
  },

  init() {
    this.renderDashboards(dashboards, romanNumerals);
    this.createSwiper();
  },
};
