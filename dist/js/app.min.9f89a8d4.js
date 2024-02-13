!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequirec63f;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequirec63f=r);var i=r.register;i("7h67L",function(t,a){e(t.exports,"register",function(){return n},function(e){return n=e});var n,r=new Map;n=function(e,t){for(var a=0;a<t.length-1;a+=2)r.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("dEx3m",function(t,a){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),r("7h67L").register(r("dEx3m").getBundleURL("5fgVw"),JSON.parse('["5fgVw","app.min.9f89a8d4.js","jOkL8","../img/dashboard-2.189efa72.png","kxyXQ","../img/dashboard-1.052b715a.png"]'));let s={title:"404",html:"Page not found"},o={title:"About Me",html:"<h2>About Me</h2>"},l=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"];var d={};d=r("dEx3m").getBundleURL("5fgVw")+"../img/dashboard-2.189efa72.png";var c={};c=r("dEx3m").getBundleURL("5fgVw")+"../img/dashboard-1.052b715a.png";let u=[{title:"Northwind Traders",desc:"A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",img:{src:new URL(d),alt:"KPI Dashboard for Northwind Traders"}},{title:"Airline Passengers Satisfaction",desc:"Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.",img:{src:new URL(c),alt:""}}],f={title:"Home",html:`
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
  </div>`,renderDashboards(e,t){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},n=document.querySelector(".swiper-wrapper"),{actual:r,ofAll:i}=a;r.textContent=t[0],i.textContent=t[e.length-1],n.innerHTML="",e.forEach(e=>{let{img:{src:t,alt:a}}=e,r=`
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img src="${t}" alt="${a}" />
      </div>
      </div>`;n.insertAdjacentHTML("afterbegin",r)})},createSwiper(){let e={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},t={title:document.querySelector(".js-info-title"),desc:document.querySelector(".js-info-desc")},a=function(e,t,a){e.classList.add(t),e.style.animationDuration=a+"ms",e.addEventListener("animationend",()=>{e.classList.remove(t)})},n=new Swiper(".swiper",{loop:!0,speed:1e3,autoplay:{pauseOnMouseEnter:!0,delay:7e3},pagination:{el:".swiper-pagination",type:"progressbar",renderProgressbar:function(e){return'<span class="'+e+'"></span>'}}});n.on("slideChange",function(){let{actual:r}=e,{title:i,desc:s}=t,o=n.realIndex;a(i,"fade-out-in",1e3),a(s,"fade-out-in",1e3),a(r,"fade-out-in",1e3),setTimeout(()=>{i.textContent=u[o].title,s.textContent=u[o].desc,r.textContent=l[o]},500)})},init(){this.renderDashboards(u,l),this.createSwiper()}},m={title:"Projects",html:"Projects"};!function(e){let t=document.title,a={404:s,"/":f,"/about":o,"/projects":m},n=function(a){e.innerHTML=a.html,a.init?.(),document.title=a.title+" | "+t},r=function(e){(e=e||window.event).preventDefault(),window.history.pushState({},"",e.target.href),i()},i=function(t=!1){let r=a[window.location.pathname]||a[404],i=window.navigator.userAgentData.mobile;t||i?n(r):(e.style.transition="transform 1000ms ease-in-out",e.style.transform="translateX(100%)",setTimeout(()=>{n(r),e.style.transform="translateX(0)"},1e3))};window.addEventListener("click",e=>{let{target:t}=e;t.closest('a[data-link="changePage"]')&&r(e)}),window.addEventListener("popstate",()=>i()),window.route=r,i(!0)}(document.querySelector("#root")),function(){if(window.navigator.userAgentData.mobile)return;let e=document.querySelector(".js-gif");e.src="";let t=function(t=0){setTimeout(()=>e.src="./img/arrow-gif.gif",t),setTimeout(()=>e.src="./img/arrow-gif.png",t+3e3)},a=function(e){let{target:n}=e;n.classList.contains("slide-in-right")&&(this.removeEventListener("animationend",a),this.classList.remove("slide-in-right"),t(0))},n={portrait:document.querySelector('[data-anime="portrait"]'),h1:document.querySelector('[data-anime="title"]'),desc:document.querySelector('[data-anime="desc"]'),other:document.querySelectorAll('[data-anime="all"]')},r=document.querySelector(".main-content");n.h1.style.animationDelay="500ms",n.desc.style.animationDelay="1000ms",n.other.forEach(e=>e.style.animationDelay="1500ms"),r.style.animationDelay="1500ms",n.portrait.classList.add("slide-in-left"),n.h1.classList.add("slide-in-top"),n.desc.classList.add("fade-in"),n.other.forEach(e=>e.classList.add("fade-in")),r.classList.add("slide-in-right"),r.addEventListener("animationend",a)}()}();
//# sourceMappingURL=app.min.9f89a8d4.js.map
