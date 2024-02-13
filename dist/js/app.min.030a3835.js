var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequirec63f;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec63f=i),(0,i.register)("lD3YP",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,i=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("lD3YP").register(new URL("",import.meta.url).toString(),JSON.parse('["aY6CG","app.min.030a3835.js","Fkvhs","../img/dashboard-2.189efa72.png","dspQZ","../img/dashboard-1.052b715a.png"]'));const r={title:"404",html:"Page not found"},n={title:"About Me",html:"<h2>About Me</h2>"},s=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"];var o={};o=new URL("../img/dashboard-2.189efa72.png",import.meta.url).toString();var l={};l=new URL("../img/dashboard-1.052b715a.png",import.meta.url).toString();const d=[{title:"Northwind Traders",desc:"A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",img:{src:new URL(o),alt:"KPI Dashboard for Northwind Traders"}},{title:"Airline Passengers Satisfaction",desc:"Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.",img:{src:new URL(l),alt:""}}],c={title:"Home",html:`
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
  </div>`,renderDashboards(e,t){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},i=document.querySelector(".swiper-wrapper"),{actual:r,ofAll:n}=a;r.textContent=t[0],n.textContent=t[e.length-1],i.innerHTML="",e.forEach(e=>{let{img:{src:t,alt:a}}=e,r=`
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img src="${t}" alt="${a}" />
      </div>
      </div>`;i.insertAdjacentHTML("afterbegin",r)})},createSwiper(){let e={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},t={title:document.querySelector(".js-info-title"),desc:document.querySelector(".js-info-desc")},a=function(e,t,a){e.classList.add(t),e.style.animationDuration=a+"ms",e.addEventListener("animationend",()=>{e.classList.remove(t)})},i=new Swiper(".swiper",{loop:!0,speed:1e3,autoplay:{pauseOnMouseEnter:!0,delay:7e3},pagination:{el:".swiper-pagination",type:"progressbar",renderProgressbar:function(e){return'<span class="'+e+'"></span>'}}});i.on("slideChange",function(){let{actual:r}=e,{title:n,desc:o}=t,l=i.realIndex;a(n,"fade-out-in",1e3),a(o,"fade-out-in",1e3),a(r,"fade-out-in",1e3),setTimeout(()=>{n.textContent=d[l].title,o.textContent=d[l].desc,r.textContent=s[l]},500)})},init(){this.renderDashboards(d,s),this.createSwiper()}},u={title:"Projects",html:"Projects"};!function(e){let t=document.title,a={404:r,"/":c,"/about":n,"/projects":u},i=function(a){e.innerHTML=a.html,a.init?.(),document.title=a.title+" | "+t},s=function(e){(e=e||window.event).preventDefault(),window.history.pushState({},"",e.target.href),o()},o=function(t=!1){let r=a[window.location.pathname]||a[404],n=window.navigator.userAgentData.mobile;t||n?i(r):(e.style.transition="transform 1000ms ease-in-out",e.style.transform="translateX(100%)",setTimeout(()=>{i(r),e.style.transform="translateX(0)"},1e3))};window.addEventListener("click",e=>{let{target:t}=e;t.closest('a[data-link="changePage"]')&&s(e)}),window.addEventListener("popstate",()=>o()),window.route=s,o(!0)}(document.querySelector("#root")),function(){if(window.navigator.userAgentData.mobile)return;let e=document.querySelector(".js-gif");e.src="";let t=function(t=0){setTimeout(()=>e.src="./img/arrow-gif.gif",t),setTimeout(()=>e.src="./img/arrow-gif.png",t+3e3)},a=function(e){let{target:i}=e;i.classList.contains("slide-in-right")&&(this.removeEventListener("animationend",a),this.classList.remove("slide-in-right"),t(0))},i={portrait:document.querySelector('[data-anime="portrait"]'),h1:document.querySelector('[data-anime="title"]'),desc:document.querySelector('[data-anime="desc"]'),other:document.querySelectorAll('[data-anime="all"]')},r=document.querySelector(".main-content");i.h1.style.animationDelay="500ms",i.desc.style.animationDelay="1000ms",i.other.forEach(e=>e.style.animationDelay="1500ms"),r.style.animationDelay="1500ms",i.portrait.classList.add("slide-in-left"),i.h1.classList.add("slide-in-top"),i.desc.classList.add("fade-in"),i.other.forEach(e=>e.classList.add("fade-in")),r.classList.add("slide-in-right"),r.addEventListener("animationend",a)}();
//# sourceMappingURL=app.min.030a3835.js.map
