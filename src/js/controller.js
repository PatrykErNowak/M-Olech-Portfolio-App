import notFound404PageView from './views/404PageView.js';
import aboutPageView from './views/aboutPageView.js';
import homePageView from './views/homePageView.js';
import allProjectsPageView from './views/projectsPageView.js';
import PageView from './views/PageView.js';

import * as model from './model.js';

const urlRoutes = {
  404: notFound404PageView,
  '/': homePageView,
  '/about': aboutPageView,
  '/projects': allProjectsPageView,
};

const controlURLPageRender = function (isInit = false) {
  const location = window.location.pathname;
  const page = urlRoutes[location] || urlRoutes[404];
  const isMobile = window.navigator.userAgentData.mobile;

  if (isInit || isMobile) {
    page.initRender(model.data);
  } else {
    page.postRender(model.data);
  }
};

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
};
init();
