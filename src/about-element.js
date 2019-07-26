import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';
import { 
  linkedInIcon,
  gitHubIcon,
  polymerIcon,
  reactIcon,
  angularIcon,
  vueIcon
 } from './utils/icons';

class AboutElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          background-color: var(--app-pale-grey-darker-color);
          height: calc(100vh - 50px);
          padding-top: 40px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        h1 {
          text-align: center;
          color: var(--app-payvision-red-color);
          margin: 0;
          animation: fadeIn 0.5s ease;
        }

        .about-app-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.5s ease;
        }

        .about-me-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h3 {
          text-decoration: underline;
          margin-top: 60px;
        }

        ul {
          color: var(--app-greyish-brown-color);
          list-style: square;
        }

        .tech-icons, .social-icons {
          width: 300px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 20px;
        }
        
        .social-icons {
          width: 150px;
        }

        @media screen and (max-width: 480px) {
          :host {
            height: 100vh;
            padding-top: 80px;
          }

          ul {
            margin: 0;
          }

          h3 {
            margin-top: 20px;
          }

          .tech-icons, .social-icons {
            margin-top: 0;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div>
        <h1>About</h1>
        <div class="about-app-content">
          <h3>This App was made with:</h3>
          <ul>
            <li>Polymer 3 - LitElement</li>
            <li>Rollup</li>
            <li>Redux</li>
            <li>ES6</li>
            <li>Vaadin Router</li>
            <li>And much ❤️</li>
          </ul>
        </div>
        <div class="about-me-content">
          <h3>Front techs I've worked with</h3>
          <div class="tech-icons">
            <a href="#">${polymerIcon}</a>
            <a href="https://ihcommunity.github.io/Community-web/">${angularIcon}</a>
            <a href="https://www.ocasionplus.com/">${reactIcon}</a>
            <a href="https://marco238.gitlab.io/bicg-vue-app/">${vueIcon}</a>
          </div>
          <h3>You can find me here</h3>
          <div class="social-icons">
            <a href="https://github.com/marco238">${gitHubIcon}</a>
            <a href="https://www.linkedin.com/in/marcomonzon/">${linkedInIcon}</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('about-element', AboutElement);