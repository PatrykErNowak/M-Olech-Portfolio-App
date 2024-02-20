function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},s=t.parcelRequirec63f;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequirec63f=s),(0,s.register)("lD3YP",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,i=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("lD3YP").register(new URL("",import.meta.url).toString(),JSON.parse('["hyHEY","controller.min.b044c531.js","aLkHL","../img/arrow-gif.df770689.gif","bubWO","../img/arrow-gif.93dc445b.png","bXmjS","../img/icons.4ef19e8b.svg","iZUCx","../img/cat404.8ab4f7cd.png","dhYmx","../img/chatgpt.a0c015a5.png","bK9ux","../img/powerbi.b12ab6c4.png","iHY9j","../img/thinking.0a5bf633.png","iV8dW","../img/comunicative.9c2f04e4.webp","ddgMB","../img/reliable.3794ce86.webp","hzRx4","../img/experimental.bb81136b.webp","8EapB","../img/logic.fc6e54c4.webp","dzsg4","../img/active.763f7218.webp","Fkvhs","../img/dashboard-2.189efa72.png","dspQZ","../img/dashboard-1.052b715a.png","4mANv","../img/northwind-photo.cdb412a0.jpeg","2YxWn","../img/airlinepassengers-photo.0352a6dc.jpeg"]'));const n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"],l={loop:!0,speed:1e3,autoplay:{pauseOnMouseEnter:!0,delay:7e3}},r={name:"fade-out-in",duration:1e3},o={timingFunction:"ease-in-out",duration:1e3};var c={};c=new URL("../img/arrow-gif.df770689.gif",import.meta.url).toString();var d={};d=new URL("../img/arrow-gif.93dc445b.png",import.meta.url).toString();class _{_mainTitle=document.title;_parentElement=document.querySelector("#root");_render(e){this._parentElement.innerHTML=this._html,this._init?.(e),this._updatePageTitle()}initRender(e){this._render(e),this._initAnimation()}postRender(e){this._parentElement.style.transition=`transform ${o.duration}ms ${o.timingFunction}`,this._parentElement.style.transform="translateX(100%)",setTimeout(()=>{this._render(e),this._parentElement.style.transform="translateX(0)"},o.duration)}_updatePageTitle(){document.title=this.pageTitle+" | "+this._mainTitle}_initAnimation(){let e=document.querySelector(".js-gif");e.src="";let t=function(t=0){setTimeout(()=>e.src=new URL(c),t),setTimeout(()=>e.src=new URL(d),t+3e3)},a=function(e){let{target:i}=e;i.classList.contains("slide-in-right")&&(this.removeEventListener("animationend",a),this.classList.remove("slide-in-right"),t(0))},i={portrait:document.querySelector('[data-anime="portrait"]'),h1:document.querySelector('[data-anime="title"]'),desc:document.querySelector('[data-anime="desc"]'),other:document.querySelectorAll('[data-anime="all"]')},s=document.querySelector(".main-content");i.h1.style.animationDelay="500ms",i.desc.style.animationDelay="1000ms",i.other.forEach(e=>e.style.animationDelay="1500ms"),s.style.animationDelay="1500ms",i.portrait.classList.add("slide-in-left"),i.h1.classList.add("slide-in-top"),i.desc.classList.add("fade-in"),i.other.forEach(e=>e.classList.add("fade-in")),s.classList.add("slide-in-right"),s.addEventListener("animationend",a)}static addHandlerChangePage(e){window.addEventListener("click",t=>{let{target:a}=t;a.closest('a[data-link="changePage"]')&&(t.preventDefault(),e(t))})}}var u={};u=new URL("../img/icons.4ef19e8b.svg",import.meta.url).toString();var m={};m=new URL("../img/cat404.8ab4f7cd.png",import.meta.url).toString();class p extends _{pageTitle="404";_html=`
  <div class="error-page">
  <div class='error'>
    <div class="error__illustration">
      <div class="error__msg-box">
        <p class="number">404</p>
        <p class="info">Page not found</p>
      </div>
      <img src=${new URL(m)} class="error__img">
      <a href='/' class="btn  btn--primary btn--primary-reversed error__btn" data-link="changePage">        <svg class="icon">
      <use xlink:href="${e(u)}#icon-arrow-left"></use>
    </svg> Back Home
      </a>
    </div>
  </div>
</div>
`}var g=new p,b={};b=new URL("../img/chatgpt.a0c015a5.png",import.meta.url).toString();var h={};h=new URL("../img/powerbi.b12ab6c4.png",import.meta.url).toString();var v={};v=new URL("../img/thinking.0a5bf633.png",import.meta.url).toString();var f={};f=new URL("../img/comunicative.9c2f04e4.webp",import.meta.url).toString();var w={};w=new URL("../img/reliable.3794ce86.webp",import.meta.url).toString();var S={};S=new URL("../img/experimental.bb81136b.webp",import.meta.url).toString();var H={};H=new URL("../img/logic.fc6e54c4.webp",import.meta.url).toString();var R={};R=new URL("../img/active.763f7218.webp",import.meta.url).toString();class y extends _{pageTitle="About Me";_html=`
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
            <img src=${new URL(b)} alt="" />
          </a>
        </div>
        <div class="about__award about__award--yellow">
          <a href="https://www.udemy.com/certificate/UC-6e9bcea7-0975-482c-b89b-d360219c0580/">
            <img src=${new URL(h)} alt="" />
          </a>
        </div>
        <div class="about__award about__award--green">
          <a href="https://certificates.mavenanalytics.io/28e48493-7c69-4ed4-a436-24e60fbc0f50#gs.4pb53r">
            <img src=${new URL(v)} alt="" />
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
      <use xlink:href="${e(u)}#icon-arrow-down"></use>
    </svg></a>
    </div>
    <div id="page2" class="about__second-page page">
            <section aria-label="Qualities" class="about__qualities-section about__qualities">
              <h3 class="about__section-title section-title">Qualities</h3>
              <ul class="about__qualities__list">
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL(f)}
                    alt=""
                  />
                  <p class="about__qualities__text">communicative</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL(w)}
                    alt=""
                  />
                  <p class="about__qualities__text">reliable</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL(S)}
                    alt=""
                  />
                  <p class="about__qualities__text">experimental</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL(H)}
                    alt=""
                  />
                  <p class="about__qualities__text">logic</p>
                </li>
                <li class="about__qualities__item">
                  <img
                    class="about__qualities__image"
                    src=${new URL(R)}
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
  `;_init(){this._scrollToNextPage()}_scrollToNextPage(){this._parentElement.addEventListener("click",e=>{let{target:t}=e;if(t.closest("a[data-scroll-to]")){e.preventDefault();let a=t.closest("a[data-scroll-to]").getAttribute("href");document.querySelector(a).scrollIntoView({behavior:"smooth"})}})}}var L=new y;class E extends _{pageTitle="Home";_html=`
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
  </div>`;_renderDashboards({dashboards:e}){let t={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},a=document.querySelector(".swiper-wrapper"),{actual:i,ofAll:s}=t;i.textContent="I",s.textContent=n[e.length-1],a.innerHTML="",e.forEach(e=>{let{img:{src:t,alt:i}}=e,s=`
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img src="${t}" alt="${i}" />
      </div>
      </div>`;a.insertAdjacentHTML("afterbegin",s)})}_createSwiper({dashboards:e}){let t={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},a={title:document.querySelector(".js-info-title"),desc:document.querySelector(".js-info-desc"),btn:document.querySelector(".js-info-btn")},i=function(e,t,a){e.classList.add(t),e.style.animationDuration=a+"ms",e.addEventListener("animationend",()=>{e.classList.remove(t)})},s=new Swiper(".swiper",{...l,pagination:{el:".swiper-pagination",type:"progressbar",renderProgressbar:function(e){return'<span class="'+e+'"></span>'}}});s.on("slideChange",function(){let{actual:l}=t,{title:o,desc:c,btn:d}=a,_=s.realIndex;i(o,r.name,r.duration),i(c,r.name,r.duration),i(d,r.name,r.duration),i(l,r.name,r.duration),setTimeout(()=>{o.textContent=e[_].title,c.textContent=e[_].desc,d.href=e[_].links.live,l.textContent=n[_]},.5*r.duration)})}_init(e){this._renderDashboards(e),this._createSwiper(e)}}var A=new E;class x extends _{pageTitle="All Projects";_html=`
    <div class="projects page">
      <h2 class="projects__title page-title">My works</h2>
      <ul class="projects__list" data-js="projects-list">
      </ul>
    </div>`;_init(e){this._renderProjects(e)}_renderProjects({dashboards:t}){let a=document.querySelector('[data-js="projects-list"]');t.forEach(t=>{let{themePhoto:i,title:s,desc:n,links:l}=t,r=`
      <li>
        <div class="project">
          <a href="#" class="project__image-link">
            <img src=${i.src} alt=${i.alt} />
          </a>
          <div class="project__info-box">
            <p class="project__title">${s}</p>
            <p class="project__desc">${n}</p>
            <div class="project__links">
              <a href=${l.live} class="project__btn btn btn--cta"
                >Try it Live
                <svg class="icon">
                  <use
                    xlink:href="${e(u)}#icon-external-link"
                  ></use>
                </svg>
              </a>
              <a href=${l.source} class="project__btn btn btn--secondary"
                >View source
                <svg class="icon">
                  <use
                    xlink:href="${e(u)}#icon-external-link"
                  ></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </li>`;a.insertAdjacentHTML("beforeend",r)})}}var j=new x,I={};I=new URL("../img/dashboard-2.189efa72.png",import.meta.url).toString();var q={};q=new URL("../img/northwind-photo.cdb412a0.jpeg",import.meta.url).toString();var k={};k=new URL("../img/dashboard-1.052b715a.png",import.meta.url).toString();var U={};U=new URL("../img/airlinepassengers-photo.0352a6dc.jpeg",import.meta.url).toString();const F={dashboards:[{title:"Northwind Traders",desc:"A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",img:{src:new URL(I),alt:"KPI Dashboard for Northwind Traders"},themePhoto:{src:new URL(q),alt:"Container ship in the middle of the sea"},links:{live:"#",source:"#"}},{title:"Airline Passengers Satisfaction",desc:"Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.",img:{src:new URL(k),alt:""},themePhoto:{src:new URL(U),alt:"Passenger with suitcase walking through airport, standing passenger aircraft visible in background."},links:{live:"#",source:"#"}}]},T={404:g,"/":A,"/about":L,"/projects":j},P=function(e=!1){let t=T[window.location.pathname]||T[404],a=window.navigator.userAgentData?.mobile||window.matchMedia("(max-width: 768px)").matches;e&&!a?t.initRender(F):t.postRender(F)},$=function(e){e=e||window.event,window.history.pushState({},"",e.target.href),P()};P(!0),_.addHandlerChangePage($),window.addEventListener("popstate",()=>P()),window.route=$;
//# sourceMappingURL=controller.min.b044c531.js.map
