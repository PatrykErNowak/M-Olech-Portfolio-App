!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequirec63f;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequirec63f=r);var i=r.register;i("7h67L",function(t,a){e(t.exports,"register",function(){return n},function(e){return n=e});var n,r=new Map;n=function(e,t){for(var a=0;a<t.length-1;a+=2)r.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("dEx3m",function(t,a){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),r("7h67L").register(r("dEx3m").getBundleURL("6Heg9"),JSON.parse('["6Heg9","controller.min.1751f94d.js","lW6At","../img/arrow-gif.df770689.gif","jOkL8","../img/dashboard-2.189efa72.png","kxyXQ","../img/dashboard-1.052b715a.png","93iUQ","../img/arrow-gif.93dc445b.png"]'));var s={};s=r("dEx3m").getBundleURL("6Heg9")+"../img/arrow-gif.df770689.gif";var o={};o=r("dEx3m").getBundleURL("6Heg9")+"../img/arrow-gif.93dc445b.png";class d{_mainTitle="M-OLECH";_parentElement=document.querySelector("#root");_render(e){this._parentElement.innerHTML=this._html,this._init?.(e),this._updatePageTitle()}initRender(e){this._render(e),this._initAnimation()}postRender(e){this._parentElement.style.transition="transform 1000ms ease-in-out",this._parentElement.style.transform="translateX(100%)",setTimeout(()=>{this._render(e),this._parentElement.style.transform="translateX(0)"},1e3)}_updatePageTitle(){document.title=this.pageTitle+" | "+this._mainTitle}_initAnimation(){if(window.navigator.userAgentData.mobile)return;let e=document.querySelector(".js-gif");e.src="";let t=function(t=0){setTimeout(()=>e.src=new URL(s),t),setTimeout(()=>e.src=new URL(o),t+3e3)},a=function(e){let{target:n}=e;n.classList.contains("slide-in-right")&&(this.removeEventListener("animationend",a),this.classList.remove("slide-in-right"),t(0))},n={portrait:document.querySelector('[data-anime="portrait"]'),h1:document.querySelector('[data-anime="title"]'),desc:document.querySelector('[data-anime="desc"]'),other:document.querySelectorAll('[data-anime="all"]')},r=document.querySelector(".main-content");n.h1.style.animationDelay="500ms",n.desc.style.animationDelay="1000ms",n.other.forEach(e=>e.style.animationDelay="1500ms"),r.style.animationDelay="1500ms",n.portrait.classList.add("slide-in-left"),n.h1.classList.add("slide-in-top"),n.desc.classList.add("fade-in"),n.other.forEach(e=>e.classList.add("fade-in")),r.classList.add("slide-in-right"),r.addEventListener("animationend",a)}static addHandlerChangePage(e){window.addEventListener("click",t=>{let{target:a}=t;t.preventDefault(),a.closest('a[data-link="changePage"]')&&e(t)})}}var l=new class extends d{pageTitle="404";_html="Page not found"},c=new class extends d{pageTitle="About Me";_html="<h2>About Me</h2>"};class u extends d{pageTitle="Home";_html=`
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
  </div>`;_renderDashboards({dashboards:e,numericSystem:t}){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},n=document.querySelector(".swiper-wrapper"),{actual:r,ofAll:i}=a;r.textContent=t[0],i.textContent=t[e.length-1],n.innerHTML="",e.forEach(e=>{let{img:{src:t,alt:a}}=e,r=`
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img src="${t}" alt="${a}" />
      </div>
      </div>`;n.insertAdjacentHTML("afterbegin",r)})}_createSwiper({dashboards:e,numericSystem:t}){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},n={title:document.querySelector(".js-info-title"),desc:document.querySelector(".js-info-desc")},r=function(e,t,a){e.classList.add(t),e.style.animationDuration=a+"ms",e.addEventListener("animationend",()=>{e.classList.remove(t)})},i=new Swiper(".swiper",{loop:!0,speed:1e3,autoplay:{pauseOnMouseEnter:!0,delay:7e3},pagination:{el:".swiper-pagination",type:"progressbar",renderProgressbar:function(e){return'<span class="'+e+'"></span>'}}});i.on("slideChange",function(){let{actual:s}=a,{title:o,desc:d}=n,l=i.realIndex;r(o,"fade-out-in",1e3),r(d,"fade-out-in",1e3),r(s,"fade-out-in",1e3),setTimeout(()=>{o.textContent=e[l].title,d.textContent=e[l].desc,s.textContent=t[l]},500)})}_init(e){this._renderDashboards(e),this._createSwiper(e)}}var m=new u,f=new class extends d{pageTitle="All Projects";_html="Projects"},p={};p=r("dEx3m").getBundleURL("6Heg9")+"../img/dashboard-2.189efa72.png";var g={};g=r("dEx3m").getBundleURL("6Heg9")+"../img/dashboard-1.052b715a.png";let h={numericSystem:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"],dashboards:[{title:"Northwind Traders",desc:"A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",img:{src:new URL(p),alt:"KPI Dashboard for Northwind Traders"}},{title:"Airline Passengers Satisfaction",desc:"Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.",img:{src:new URL(g),alt:""}}]},_={404:l,"/":m,"/about":c,"/projects":f},w=function(e=!1){let t=_[window.location.pathname]||_[404],a=window.navigator.userAgentData.mobile;e||a?t.initRender(h):t.postRender(h)},v=function(e){e=e||window.event,window.history.pushState({},"",e.target.href),w()};w(!0),d.addHandlerChangePage(v),window.addEventListener("popstate",()=>w()),window.route=v}();
//# sourceMappingURL=controller.min.1751f94d.js.map
