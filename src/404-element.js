import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';

class NotFoundElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: calc(100vh - 50px);
          background-color: var(--app-pale-grey-darker-color);
        }

        h1 {
          margin: 0;
          font-size: 26px;
          color: var(--app-greyish-brown-color);
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translateX(-50%);
        }

        @media screen and (max-width: 480px) {
          :host {
            height: 100vh;
          }

          h1 {
            text-align: center;
            width: 90vw;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div class="error-message-view">
        <h1>🚧 Sorry, but this page doesn't exist! 🚧</h1>
      </div>
    `;
  }
}

customElements.define('not-found-element', NotFoundElement);