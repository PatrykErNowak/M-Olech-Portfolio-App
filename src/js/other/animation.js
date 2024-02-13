// Animations fired once only when user open page
export const animation = function () {
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

  header.h1.style.animationDelay = '500ms';
  header.desc.style.animationDelay = '1000ms';
  header.other.forEach((el) => (el.style.animationDelay = '1500ms'));
  main.style.animationDelay = '1500ms';

  header.portrait.classList.add('slide-in-left');
  header.h1.classList.add('slide-in-top');
  header.desc.classList.add('fade-in');
  header.other.forEach((el) => el.classList.add('fade-in'));
  main.classList.add('slide-in-right');

  main.addEventListener('animationend', displayGifAnimationOnce);
};

