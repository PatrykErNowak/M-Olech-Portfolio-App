import PageView from './PageView';
import icons from '../../img/icons.svg';

class NotFound404 extends PageView {
  pageTitle = '404';
  _html = `
  <div class="error-page">
  <div class='error'>
    <div class="error__illustration">
      <div class="error__msg-box">
        <p class="number">404</p>
        <p class="info">Page not found</p>
      </div>
      <img src=${new URL('../../img/cat404.png', import.meta.url)} class="error__img">
      <a href='/' class="btn  btn--primary btn--primary-reversed error__btn" data-link="changePage">        <svg class="icon">
      <use xlink:href="${icons}#icon-arrow-left"></use>
    </svg> Back Home
      </a>
    </div>
  </div>
</div>
`;

  _init() {}
}
export default new NotFound404();
