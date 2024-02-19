import { changePageAnimation as anime, initAnimation } from '../config.js';

/**
 * Parent class for all pages views. Is responsible for rendering and handling animations.
 */
export default class PageView {
  // _mainTitle = 'M-OLECH';
  _mainTitle = document.title;
  _parentElement = document.querySelector('#root');

  /**
   * Render page and additional content received from object.
   * @param {object} data The data to be rendered (e.g. dashboards)
   */
  _render(data) {
    this._parentElement.innerHTML = this._html;

    // Run additional init methods for page
    this._init?.(data);
    this._updatePageTitle();
  }

  initRender(data) {
    this._render(data);
    this._initAnimation();
  }

  postRender(data) {
    this._parentElement.style.transition = `transform ${anime.duration}ms ${anime.timingFunction}`;
    this._parentElement.style.transform = 'translateX(100%)';
    setTimeout(() => {
      this._render(data);
      this._parentElement.style.transform = 'translateX(0)';
    }, anime.duration);
  }
  _updatePageTitle() {
    document.title = this.pageTitle + ' | ' + this._mainTitle;
  }

  _initAnimation() {
    const isMobile = window.navigator.userAgentData.mobile;

    if (isMobile) return;
    const gif = document.querySelector('.js-gif');
    // Stop playing gif
    gif.src = '';

    const gifAnimation = function (delay = 0) {
      //Delay
      setTimeout(
        () => (gif.src = new URL('../../img/arrow-gif.gif', import.meta.url)),
        delay,
      );
      //Stop After
      setTimeout(
        () => (gif.src = new URL('../../img/arrow-gif.png', import.meta.url)),
        delay + 3000,
      );
    };

    const displayGifAnimationOnce = function (e) {
      const { target } = e;
      if (!target.classList.contains('slide-in-right')) return;

      this.removeEventListener('animationend', displayGifAnimationOnce);
      this.classList.remove('slide-in-right');
      gifAnimation(0);
    };

    const header = {
      portrait: document.querySelector('[data-anime="portrait"]'),
      h1: document.querySelector('[data-anime="title"]'),
      desc: document.querySelector('[data-anime="desc"]'),
      other: document.querySelectorAll('[data-anime="all"]'),
    };
    const main = document.querySelector('.main-content');

    header.h1.style.animationDelay = initAnimation.headerDelay + 'ms';
    header.desc.style.animationDelay = initAnimation.descDelay + 'ms';
    header.other.forEach(
      (el) =>
        (el.style.animationDelay = initAnimation.otherElementsDelay + 'ms'),
    );
    main.style.animationDelay = initAnimation.mainContentDelay + 'ms';

    header.portrait.classList.add('slide-in-left');
    header.h1.classList.add('slide-in-top');
    header.desc.classList.add('fade-in');
    header.other.forEach((el) => el.classList.add('fade-in'));
    main.classList.add('slide-in-right');

    main.addEventListener('animationend', displayGifAnimationOnce);
  }

  static addHandlerChangePage(fn) {
    window.addEventListener('click', (e) => {
      const { target } = e;

      if (target.closest('a[data-link="changePage"]')) {
        e.preventDefault();
        fn(e);
      }
    });
  }
}
