import { Router } from '@vaadin/router';

import './src/navbar-element.js';
import './src/home-element.js';
import './src/fetcher-element.js';
import './src/about-element.js';
import './src/404-element.js';


window.addEventListener('load', () => { 
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: 'home-element'
    },
    {
      path: '/transactions',
      component: 'fetcher-element'
    },
    {
      path: '/about',
      component: 'about-element',
    },
    {
      path: '(.*)', 
      component: 'not-found-element'
    }
  ]);
}