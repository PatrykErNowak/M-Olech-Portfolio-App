import PageView from './PageView.js';

class About extends PageView {
  pageTitle = 'About Me';
  _html = `
  <div class="about">
    <div class="about__page about__page--first"> 
      <h2 class="about__title">About Me</h2>
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
        <div class="about__award">
          <img src=${new URL('../../img/chatgpt.png', import.meta.url)} alt="" />
        </div>
        <div class="about__award">
        <img src=${new URL('../../img/powerbi.png', import.meta.url)} alt="" />
        </div>
        <div class="about__award">
        <img src=${new URL('../../img/thinking.png', import.meta.url)} alt="" />
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
      <a href="#page2" class="about__scroll-to scroll-to"><span></span>Scroll</a>
    </div>
    <div id="page2" class="about__page about__page--second">
            <section aria-label="Qualities" class="about__qualities-section about__qualities">
              <h3 class="about__section-title">Qualities</h3>
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
              <h3 class="about__section-title">Languages</h3>

              <div class="about__languages">
                <div class="about__language about__language--polish">
                  <p class="label">Polish</p>
                  <div class="skill"></div>
                </div>
                <div class="about__language about__language--english">
                  <p class="label">english</p>
                  <div class="skill"></div>
                </div>
                <div class="about__language about__language--french">
                  <p class="label">french</p>
                  <div class="skill"></div>
                </div>
              </div>
            </section>
            <section class="about__interests-section">
              <h3 class="about__section-title">Interests</h3>
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
}
export default new About();
