import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';

class HomeElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          background-color: var(--app-pale-grey-darker-color);
          height: calc(100vh - 50px);
          overflow: hidden;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .title-container {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          animation: fadeIn 1s ease;
        }

        h1 {
          font-size: 34px;
          padding: 20px;
          color: var(--app-payvision-red-color);
          border-top: 2px solid var(--app-payvision-red-color);
          border-right: 2px solid var(--app-payvision-red-color);
          border-radius: 0 0 20px 0;
        }

        img {
          width: 200px;
        }

        a {
          text-decoration: none;
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(to top, var(--app-payvision-red-color) 50%, transparent 50%);
          background-size: 100% 200%;
          background-position: top;
          border: 1px solid var(--app-payvision-red-color);
          padding: 10px 20px;
          color: var(--app-payvision-red-color);
          font-size: 16px;
          cursor: pointer;
          animation: fadeIn 1s ease;
          transition: all 0.3s ease;
        }

        a:hover {
          box-shadow: 3px 3px 10px var(--app-light-shadow-color);
          color: var(--app-white-color);
          background-position: bottom;
        }

        @media screen and (max-width: 480px) {
          :host {
            height: 100vh;
          }

          .title-container {
            top: 20%;
            flex-direction: column-reverse;
          }

          img {
            width: 180px;
          }

          h1 {
            box-sizing: border-box;
            margin: 0;
            width: 180px;
            height: fit-content;
            font-size: 24px;
            padding: 20px 0;
            text-align: center;
            color: var(--app-payvision-red-color);
            border-top: none;
            border-bottom: 2px solid var(--app-payvision-red-color);
            border-radius: 0 0 0 20px;
          }

          a {
            margin-top: 40px;
            width: 140px;
            text-align: center;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <section>
        <div class="title-container">
          <h1>Rendering Transactions</h1>
          <img src="../assets/images/payvision.png" alt="Payvision logo">
        </div>

        <a href="/transactions">Check Transactions</a>
      </section>
    `;
  }
}

customElements.define('home-element', HomeElement);