import notFound404PageView from './views/404PageView';
import aboutPageView from './views/aboutPageView';
import homePageView from './views/homePageView';
import allProjectsPageView from './views/projectsPageView';
import PageView from './views/PageView';

import * as model from './model';

/**
 * Contains all allowed pages for the site
 */

const urlRoutes = {
  404: notFound404PageView,
  '/': homePageView,
  '/about': aboutPageView,
  '/projects': allProjectsPageView,
};

/**
 * Control which page should be page rendered based on the URL
 * @param {boolean} [isInit=false] If true, render the DOM and firing init Animation(when entering on page or refreshing)
 */
const controlURLPageRender = function (isInit: boolean = false) {
  const location = window.location.pathname;
  const page = urlRoutes[location as keyof typeof urlRoutes] || urlRoutes[404];
  const isMobile = window.navigator.userAgentData?.mobile || window.matchMedia('(max-width: 768px)').matches;

  if (isInit && !isMobile) {
    page.initRender(model.data);
  } else if (isMobile) {
    page.render(model.data);
  } else {
    page.animatedRender(model.data);
  }
};

/**
 * Adds an entry to the browser's session history stack based on passed in Event Object
 */
const controlURLRoute = function (event: Event) {
  if (event.target instanceof HTMLAnchorElement) window.history.pushState({}, '', event.target.href);

  controlURLPageRender();
};

const init = function () {
  controlURLPageRender(true);
  PageView.addHandlerChangePage(controlURLRoute);
  window.addEventListener('popstate', () => controlURLPageRender());
  // window.route = controlURLRoute;
  PageView.updateFooterYear();
};
init();
