import {notFound404} from '../pages/404.js'
import {about} from '../pages/about.js'
import {home} from '../pages/home.js'
import {projects} from '../pages/projects.js'

export const urlRouting = function (mainContent) {
  const urlPageTitle = document.title;

  const urlRoutes = {
    404: notFound404,
    '/': home,
    '/about': about,
    '/projects': projects,
  };

  const renderContent = function (route) {
    //Render content
    mainContent.innerHTML = route.html;
    // Invoke init function for content
    route.init?.();
    // Change document title
    document.title = route.title + ' | ' + urlPageTitle;
  };

  const urlRoute = function (event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);

    urlLocationHandler();
  };

  const urlLocationHandler = function (isInit = false) {
    const location = window.location.pathname;
    const route = urlRoutes[location] || urlRoutes[404];
    const isMobile = window.navigator.userAgentData.mobile;

    if (isInit || isMobile) {
      renderContent(route);
    } else {
      mainContent.style.transition = 'transform 1000ms ease-in-out';
      mainContent.style.transform = 'translateX(100%)';
      setTimeout(() => {
        renderContent(route);
        mainContent.style.transform = 'translateX(0)';
      }, 1000);
    }
  };

  window.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('a[data-link="changePage"]')) urlRoute(e);
  });
  window.addEventListener('popstate', () => urlLocationHandler());
  window.route = urlRoute;

  // init
  urlLocationHandler(true);
};
