var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequirec63f;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirec63f=i),(0,i.register)("lD3YP",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,i=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("lD3YP").register(new URL("",import.meta.url).toString(),JSON.parse('["hyHEY","controller.min.dd3aa861.js","aLkHL","../img/arrow-gif.df770689.gif","bubWO","../img/arrow-gif.93dc445b.png","Fkvhs","../img/dashboard-2.189efa72.png","dspQZ","../img/dashboard-1.052b715a.png"]'));var n={};n=new URL("../img/arrow-gif.df770689.gif",import.meta.url).toString();var r={};r=new URL("../img/arrow-gif.93dc445b.png",import.meta.url).toString();class s{_mainTitle="M-OLECH";_parentElement=document.querySelector("#root");_render(e){this._parentElement.innerHTML=this._html,this._init?.(e),this._updatePageTitle()}initRender(e){this._render(e),this._initAnimation()}postRender(e){this._parentElement.style.transition="transform 1000ms ease-in-out",this._parentElement.style.transform="translateX(100%)",setTimeout(()=>{this._render(e),this._parentElement.style.transform="translateX(0)"},1e3)}_updatePageTitle(){document.title=this.pageTitle+" | "+this._mainTitle}_initAnimation(){if(window.navigator.userAgentData.mobile)return;let e=document.querySelector(".js-gif");e.src="";let t=function(t=0){setTimeout(()=>e.src=new URL(n),t),setTimeout(()=>e.src=new URL(r),t+3e3)},a=function(e){let{target:i}=e;i.classList.contains("slide-in-right")&&(this.removeEventListener("animationend",a),this.classList.remove("slide-in-right"),t(0))},i={portrait:document.querySelector('[data-anime="portrait"]'),h1:document.querySelector('[data-anime="title"]'),desc:document.querySelector('[data-anime="desc"]'),other:document.querySelectorAll('[data-anime="all"]')},s=document.querySelector(".main-content");i.h1.style.animationDelay="500ms",i.desc.style.animationDelay="1000ms",i.other.forEach(e=>e.style.animationDelay="1500ms"),s.style.animationDelay="1500ms",i.portrait.classList.add("slide-in-left"),i.h1.classList.add("slide-in-top"),i.desc.classList.add("fade-in"),i.other.forEach(e=>e.classList.add("fade-in")),s.classList.add("slide-in-right"),s.addEventListener("animationend",a)}static addHandlerChangePage(e){window.addEventListener("click",t=>{let{target:a}=t;t.preventDefault(),a.closest('a[data-link="changePage"]')&&e(t)})}}var o=new class extends s{pageTitle="404";_html="Page not found"},l=new class extends s{pageTitle="About Me";_html="<h2>About Me</h2>"};class d extends s{pageTitle="Home";_html=`
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
  </div>`;_renderDashboards({dashboards:e,numericSystem:t}){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},i=document.querySelector(".swiper-wrapper"),{actual:n,ofAll:r}=a;n.textContent=t[0],r.textContent=t[e.length-1],i.innerHTML="",e.forEach(e=>{let{img:{src:t,alt:a}}=e,n=`
      <div class="swiper-slide carousel__slide">
      <div class="carousel__img-box">
      <img src="${t}" alt="${a}" />
      </div>
      </div>`;i.insertAdjacentHTML("afterbegin",n)})}_createSwiper({dashboards:e,numericSystem:t}){let a={actual:document.querySelector(".js-counter-actual"),ofAll:document.querySelector(".js-counter-of-all")},i={title:document.querySelector(".js-info-title"),desc:document.querySelector(".js-info-desc")},n=function(e,t,a){e.classList.add(t),e.style.animationDuration=a+"ms",e.addEventListener("animationend",()=>{e.classList.remove(t)})},r=new Swiper(".swiper",{loop:!0,speed:1e3,autoplay:{pauseOnMouseEnter:!0,delay:7e3},pagination:{el:".swiper-pagination",type:"progressbar",renderProgressbar:function(e){return'<span class="'+e+'"></span>'}}});r.on("slideChange",function(){let{actual:s}=a,{title:o,desc:l}=i,d=r.realIndex;n(o,"fade-out-in",1e3),n(l,"fade-out-in",1e3),n(s,"fade-out-in",1e3),setTimeout(()=>{o.textContent=e[d].title,l.textContent=e[d].desc,s.textContent=t[d]},500)})}_init(e){this._renderDashboards(e),this._createSwiper(e)}}var c=new d,u=new class extends s{pageTitle="All Projects";_html="Projects"},m={};m=new URL("../img/dashboard-2.189efa72.png",import.meta.url).toString();var p={};p=new URL("../img/dashboard-1.052b715a.png",import.meta.url).toString();const f={numericSystem:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"],dashboards:[{title:"Northwind Traders",desc:"A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",img:{src:new URL(m),alt:"KPI Dashboard for Northwind Traders"}},{title:"Airline Passengers Satisfaction",desc:"Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.",img:{src:new URL(p),alt:""}}]},g={404:o,"/":c,"/about":l,"/projects":u},h=function(e=!1){let t=g[window.location.pathname]||g[404],a=window.navigator.userAgentData.mobile;e||a?t.initRender(f):t.postRender(f)},_=function(e){e=e||window.event,window.history.pushState({},"",e.target.href),h()};h(!0),s.addHandlerChangePage(_),window.addEventListener("popstate",()=>h()),window.route=_;
//# sourceMappingURL=controller.min.dd3aa861.js.map
