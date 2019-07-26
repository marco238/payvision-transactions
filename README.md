> 🛠🤓 Status: Work In Progress 🥒🥑

# Rendering Transactions

This is a website for Payvision`s frontend selection process. It uses [LitElement](https://lit-element.polymer-project.org/guide), [Redux](https://redux.js.org/introduction/getting-started), [Pwa-helpers](https://github.com/Polymer/pwa-helpers), [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), [Vaadin](https://www.npmjs.com/package/@vaadin/router) and [Rollup](https://www.npmjs.com/package/rollup). 

## Setup

#### Install node dependencies 

After cloning the project from the repository, install the dependencies using npm:

    cd payvision-transactions
    npm install

## Developing

**Rollup** is used for the builds and development. Livereload is configured, which makes developing a lot easier and faster.

    npm run dev

This command serves the app at `http://127.0.0.1:10001` and opens it in your default browser.

### Router

Routing is being handled with [@vaadin/router - npm](https://www.npmjs.com/package/@vaadin/router).

Vaadin Router is a small and powerful client-side router JS library. It uses the widely adopted express.js syntax for routes (/users/:id) to map URLs to Web Component views. All features one might expect from a modern router are supported: async route resolution, animated transitions, navigation guards, redirects, and more. It is framework-agnostic and works equally well with all Web Components regardless of how they are created (Polymer / SkateJS / Stencil / Angular / Vue / etc).

Vaadin Router is a good fit for developers that do not want to go all-in with one framework, and prefer to have freedom in picking the components that work best for their specific needs.