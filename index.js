import { Router } from '@vaadin/router';

import './src/fetcher-element.js';
import './src/stats-element.js';
import './src/about-element.js';

window.addEventListener('load', () => { 
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      redirect: '/fetcher'
    },
    {
      path: '/fetcher',
      component: 'fetcher-element'
    },
    {
      path: '/stats',
      component: 'stats-element'
    },
    {
      path: '/about',
      component: 'about-element'
    },
    {
      path: '(.*)', 
      component: 'not-found-view'
    }
  ]);
}