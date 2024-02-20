import PageView from './PageView.js';
import icons from '../../img/icons.svg';

class About extends PageView {
  pageTitle = 'About Me';
  _html = `
  <div class="about">
    <div class="about__first-page page"> 
      <h2 class="about__title page-title">About Me</h2>
      <p class="about__desc">
        I am passionate and committed data analyst with a flait for
        uncovering <strong>hidden patterns</strong> and
        <strong>valuable insights</strong>.
      </p>
      <p class="about__desc">
        Through mu technical expertise, analytical mindset and adept
        communication skills, I am primed to create a substantial
        <strong>impact</strong> in the field of data analysis.
      </p>

      <div class="about__awards">
        <div class="about__award about__award--green">
          <a href="https://certificates.mavenanalytics.io/6b1260fc-573f-4778-b275-14c20313ce83#gs.4mjpiq">
            <img src=${new URL('../../img/chatgpt.png', import.meta.url)} alt="" />
          </a>
        </div>
        <div class="about__award about__award--yellow">
          <a href="https://www.udemy.com/certificate/UC-6e9bcea7-0975-482c-b89b-d360219c0580/">
            <img src=${new URL('../../img/powerbi.png', import.meta.url)} alt="" />
          </a>
        </div>
        <div class="about__award about__award--green">
          <a href="https://certificates.mavenanalytics.io/28e48493-7c69-4ed4-a436-24e60fbc0f50#gs.4pb53r">
            <img src=${new URL('../../img/thinking.png', import.meta.url)} alt="" />
          </a>
        </div>
      </div>

      <section class="about__timeline timeline" aria-label="Timeline">
        <ol class="timeline__list">
          <li class="timeline__item role">Mathematics student at UMCS</li>
          <li class="timeline__item tech">Excel</li>
          <li class="timeline__item tech">Statistica</li>
          <li class="timeline__item tech">SQL</li>
          <li class="timeline__item role">Math &amp; IT Teacher</li>
          <li class="timeline__item tech">Power Query</li>
          <li class="timeline__item tech">DAX</li>
          <li class="timeline__item tech">Power BI</li>
          <li class="timeline__item role">Analyst in PwC</li>
          <li class="timeline__item tech">Python</li>
        </ol>
      </section>
      <a href="#page2" class="about__scroll-to scroll-to" data-scroll-to><svg class="icon">
      <use xlink:href="${icons}#icon-arrow-down"></use>
    </svg></a>
    </div>
    <div id="page2" class="about__second-page page">
            <section aria-label="Qualities" class="about__qualities-section about__qualities">
              <h3 class="about__section-title section-title">Qualities</h3>
              <ul class="about__qualities__list">
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL('../../img/qualities/comunicative.webp', import.meta.url)}
                    alt=""
                  />
                  <p class="about__qualities__text">communicative</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL('../../img/qualities/reliable.webp', import.meta.url)}
                    alt=""
                  />
                  <p class="about__qualities__text">reliable</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL('../../img/qualities/experimental.webp', import.meta.url)}
                    alt=""
                  />
                  <p class="about__qualities__text">experimental</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL('../../img/qualities/logic.webp', import.meta.url)}
                    alt=""
                  />
                  <p class="about__qualities__text">logic</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL('../../img/qualities/active.webp', import.meta.url)}
                    alt=""
                  />
                  <p class="about__qualities__text">active</p>
                </li>
              </ul>
            </section>
            <section class="about__languages-section">
              <h3 class="about__section-title section-title">Languages</h3>

              <div class="about__languages">
                <div class="about__language about__language--polish">
                  <p class="label">Polish<span>native</span></p>
                  <div class="skill"></div>
                </div>
                <div class="about__language about__language--english">
                  <p class="label">english<span>c1</span></p>
                  <div class="skill"></div>
                </div>
                <div class="about__language about__language--french">
                  <p class="label">french<span>a2</span></p>
                  <div class="skill"></div>
                </div>
              </div>
            </section>
            <section class="about__interests-section">
              <h3 class="about__section-title section-title">Interests</h3>
              <div class="about__interests">
                <div class="about__interest ">
                  <p class="label">traveling</p>
                </div>
                <div class="about__interest">
                  <p class="label">horse riding</p>
                </div>
                <div class="about__interest">
                  <p class="label">board games</p>
                </div>
                <div class="about__interest">
                  <p class="label">winter sports</p>
                </div>
                <div class="about__interest">
                  <p class="label">books&nbsp;&amp; movies</p>
                </div>
              </div>
            </section>
            <section class="about__thankful-section">
              <p>
                Thank you for taking the time to learn more
                <strong>about me</strong>.
              </p>
              <p>
                I am looking forward to the opportunity to connect and
                collaborate on inspiring data-driven projects in the future!
              </p>
            </section>
          </div>
  </div>
  `;
  _init() {
    this._scrollToNextPage();
  }
  _scrollToNextPage() {
    this._parentElement.addEventListener('click', (e) => {
      const { target } = e;

      if (target.closest('a[data-scroll-to]')) {
        e.preventDefault();
        const pageTarget = target
          .closest('a[data-scroll-to]')
          .getAttribute('href');
        const page = document.querySelector(pageTarget);

        page.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  }
}
export default new About();
