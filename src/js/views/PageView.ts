import { changePageAnimation as anime, initAnimation } from '../config';

/**
 * Parent class for all pages views. Is responsible for rendering and handling animations.
 */
export default abstract class PageView {
  protected readonly _mainTitle = document.title;
  protected readonly _parentElement = document.querySelector('#root') as HTMLBodyElement;
  abstract pageTitle: string;
  protected abstract _html: string;
  protected abstract _init(data?: object): void;
  /**
   * Render page and additional content received from object.
   * @param {object} data The data to be rendered (e.g. dashboards)
   */
  render(data: object): void {
    this._parentElement.innerHTML = this._html;

    // Run additional init methods for page
    this._init?.(data);
    this._updatePageTitle();
  }

  initRender(data: object): void {
    this.render(data);
    this._initAnimation();
  }

  animatedRender(data: object): void {
    this._parentElement.style.transition = `transform ${anime.duration}ms ${anime.timingFunction}`;
    this._parentElement.style.transform = 'translateX(100%)';
    setTimeout(() => {
      this.render(data);
      this._parentElement.style.transform = 'translateX(0)';
    }, anime.duration);
  }

  private _updatePageTitle(): void {
    document.title = this.pageTitle + ' | ' + this._mainTitle;
  }

  protected _initAnimation(): void {
    const gif = document.querySelector('.js-gif') as HTMLImageElement;
    // Stop playing gif
    gif.src = '';

    const gifAnimation = function (delay = 0) {
      //Delay
      setTimeout(() => (gif.src = `${new URL('../../img/arrow-gif.gif', import.meta.url)}`), delay);
      //Stop After
      setTimeout(() => (gif.src = `${new URL('../../img/arrow-gif.png', import.meta.url)}`), delay + 3000);
    };

    const displayGifAnimationOnce = function (this: HTMLImageElement, e: Event) {
      const { target } = e;

      if (target instanceof Element && !target.classList.contains('slide-in-right')) return;

      this.removeEventListener('animationend', displayGifAnimationOnce);
      this.classList.remove('slide-in-right');
      gifAnimation(0);
    };

    const header = {
      portrait: document.querySelector('[data-anime="portrait"]') as HTMLImageElement,
      h1: document.querySelector('[data-anime="title"]') as HTMLHeadingElement,
      desc: document.querySelector('[data-anime="desc"]') as HTMLParagraphElement,
      other: document.querySelectorAll('[data-anime="all"]') as NodeListOf<HTMLBodyElement>,
    };
    const main = document.querySelector('.main-content') as HTMLBodyElement;

    header.h1.style.animationDelay = initAnimation.headerDelay + 'ms';
    header.desc.style.animationDelay = initAnimation.descDelay + 'ms';
    header.other.forEach((el) => (el.style.animationDelay = initAnimation.otherElementsDelay + 'ms'));
    main.style.animationDelay = initAnimation.mainContentDelay + 'ms';

    header.portrait.classList.add('slide-in-left');
    header.h1.classList.add('slide-in-top');
    header.desc.classList.add('fade-in');
    header.other.forEach((el) => el.classList.add('fade-in'));
    main.classList.add('slide-in-right');

    main.addEventListener('animationend', displayGifAnimationOnce);
  }

  static addHandlerChangePage(fn: Function): void {
    window.addEventListener('click', (e) => {
      const { target } = e;
      const link = target instanceof Element && target.closest('a[data-link="changePage"]');

      if (link) {
        e.preventDefault();

        fn(e);

        if (link.getAttribute('data-scroll')) {
          const contentContainer = document.querySelector('#root') as HTMLBodyElement;
          contentContainer.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    });
  }
  static updateFooterYear(): void {
    const span = document.querySelector('[data-js="footer-year"]') as HTMLParagraphElement;
    const acutalYear = String(new Date().getFullYear());
    span.innerHTML = acutalYear;
  }
}
