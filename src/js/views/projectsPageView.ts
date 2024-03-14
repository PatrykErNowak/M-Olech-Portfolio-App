import PageView from './PageView';
import icons from '../../img/icons.svg';
import { Data } from '../model';

class Projects extends PageView {
  pageTitle = 'All Projects';

  _html = `
    <div class="projects page">
      <h2 class="projects__title page-title">My works</h2>
      <ul class="projects__list" data-js="projects-list">
      </ul>
    </div>`;

  _init(data: Data) {
    this._renderProjects(data);
  }
  _renderProjects({ dashboards }: Data) {
    const list = document.querySelector('[data-js="projects-list"]') as HTMLUListElement;

    dashboards.forEach((dash) => {
      const { themePhoto, title, desc, links } = dash;

      const html = `
      <li>
        <div class="project">
          <a href=${links.live} class="project__image-link" aria-label="Check it Live">
            <img src=${themePhoto.src} alt=${themePhoto.alt} />
          </a>
          <div class="project__info-box">
            <p class="project__title">${title}</p>
            <p class="project__desc">${desc}</p>
            <div class="project__links">
              <a href=${links.live} class="project__btn btn btn--cta"
                >Try it Live
                <svg class="icon">
                  <use
                    xlink:href="${icons}#icon-external-link"
                  ></use>
                </svg>
              </a>
              <a href=${links.source} class="project__btn btn btn--secondary"
                >View source
                <svg class="icon">
                  <use
                    xlink:href="${icons}#icon-external-link"
                  ></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </li>`;

      list.insertAdjacentHTML('beforeend', html);
    });
  }
}

export default new Projects();
