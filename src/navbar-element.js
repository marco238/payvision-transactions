import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';
import { closeIcon, menuIcon } from './utils/icons';

class NavbarElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        .navbar-desktop {
          width: 100vw;
          height: 50px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          background-color: var(--app-navbar-desktop-color);
        }

        .navbar-mobile {
          display: none;
        }

        a {
          text-decoration: none;
          color: var(--app-payvision-red-color);
          font-weight: 600;
          padding-right: 40px;
        }

        .menu-close-icon {
          display: none;
        }

        @media screen and (max-width: 480px) {
          .navbar-desktop {
            display: none;
          }

          .navbar-mobile {
            display: block;
            width: 80vw;
            height: 100vh;
            position: absolute;
            top: 0;
            right: -1px;
            background-color: var(--app-navbar-mobile-color);
            color: var(--app-pale-grey-darker-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
            transition: all 0.2s ease;
          }

          .navbar-mobile a {
            color: var(--app-pale-grey-darker-color);
            font-size: 30px;
            margin-top: 50px;
            text-align: center;
            padding: 0;
          }

          .navbar-mobile a:first-child {
            margin-top: 100px;
          }

          .menu-close-icon {
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            margin: 0;
            text-align: center;
            z-index: 20;
          }

          .navbar-mobile-closed {
            width: 0;
            overflow: hidden;
          }

          #current-path {
            padding: 5px 20px;
            border-radius: 30px;
            background: linear-gradient(135deg, rgba(232,235,243,0.32) 0%, rgba(232,235,243,0.04) 48%, rgba(232,235,243,0) 54%, rgba(232,235,243,0.28) 100%);
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div>
        <p class="menu-close-icon" @click=${this.toogleMenu}>${this.menuOpen ? closeIcon : menuIcon}</p>

        <nav class="navbar-desktop">
          <a href="/home">Home</a>
          <a href="/transactions">Transactions</a>
          <a href="/about">About</a>
        </nav>

        <nav class="navbar-mobile ${this.menuOpen ? '' : 'navbar-mobile-closed'}">
          <a href="/home" id="${this.path == 'home' && 'current-path'}" @click=${this.toogleMenu}>Home</a>
          <a href="/transactions" id="${this.path == 'transactions' && 'current-path'}" @click=${this.toogleMenu}>Transactions</a>
          <a href="/about" id="${this.path == 'about' && 'current-path'}" @click=${this.toogleMenu}>About</a>
        </nav>
      </div>
    `;
  }
  
  static get properties() {
    return {
      menuOpen: {type: Boolean},
      path: {type: String}
    }
  }

  constructor() {
    super();
    this.menuOpen = false;
  }

  updated() {
    let path = window.location.href.split('/');
    path = path.pop();
    this.path = path;
  }

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

customElements.define('navbar-element', NavbarElement);