import notFound404PageView from './views/404PageView.js';
import aboutPageView from './views/aboutPageView.js';
import homePageView from './views/homePageView.js';
import allProjectsPageView from './views/projectsPageView.js';
import PageView from './views/PageView.js';

import * as model from './model.js';

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
const controlURLPageRender = function (isInit = false) {
  const location = window.location.pathname;
  const page = urlRoutes[location] || urlRoutes[404];
  const isMobile =
    window.navigator.userAgentData?.mobile ||
    window.matchMedia('(max-width: 768px)').matches;

  if (isInit && !isMobile) {
    page.initRender(model.data);
  } else {
    page.postRender(model.data);
  }
};

/**
 * Adds an entry to the browser's session history stack based on passed in Event Object
 */
const controlURLRoute = function (event) {
  event = event || window.event;
  window.history.pushState({}, '', event.target.href);

  controlURLPageRender();
};

const init = function () {
  controlURLPageRender(true);
  PageView.addHandlerChangePage(controlURLRoute);
  window.addEventListener('popstate', () => controlURLPageRender());
  window.route = controlURLRoute;
  PageView.updateFooterYear();
};
init();
