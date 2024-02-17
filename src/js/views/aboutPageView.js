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
    </div>
    <div class="about__page">

    </div>
  </div>
  `;
}
export default new About();
