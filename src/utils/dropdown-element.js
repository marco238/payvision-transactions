import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';

import { SharedStyles } from '../../assets/shared-styles';
import { arrowDown, deleteIcon } from './icons';
import { arrowUp } from './icons';
import {
  updateTransactionType,
  updateCurrency
} from '../redux/actions.js';
import { store } from '../redux/store.js';

class DropdownElement extends connect(store)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      css`
        .dropdown-container {
          margin-right: 20px;
          cursor: pointer;
        }
      
        .dropdown-value {
          background-color: var(--app-white-color);
          color: var(--app-cobalt-color);
          border: 1px solid var(--app-cobalt-color);
          border-radius: 3px;
          width: 180px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 5px;
          transition: all 0.2s ease;
        }
      
        .dropdown-value p {
          margin: 0;
          padding: 0 20px;
        }
      
        .open-dropdown-value {
          border: 1px solid var(--app-topaz-color);
          border-bottom: 1px solid var(--app-pale-grey-color);
          border-radius: 3px 3px 0 0;
          box-shadow: 2px 2px 5px var(--app-light-shadow-color);
        }
      
        .dropdown-options {
          opacity: 0;
          height: 0;
          border: 1px solid var(--app-topaz-color);
          border-top: none;
          border-radius: 0 0 3px 3px;
          overflow: hidden;
          box-shadow: 2px 2px 5px var(--app-light-shadow-color);
          background-color: var(--app-white-color);
          transition: all 0.2s ease;
        }
      
        .open-dropdown {
          opacity: 1;
          height: 80px;
        }
      
        .option-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 25px;
          color: #909ec7;
          transition: all 0.1s ease;
        }
        
        .option-container:hover {
          background-color: var(--app-pale-grey-darker-color);
          color: var(--app-cobalt-color);
        }
        
        .option-container p {
          margin: 0;
        }

        .option-selected {
          background-color: var(--app-pale-grey-darker-color);
          color: var(--app-cobalt-color);
        }

        @media screen and (max-width: 675px) {
          .dropdown-container {
            margin-right: 5px;
          }

          .dropdown-value {
            width: 105px;
            height: 20px;
            padding: 10px 2px;
          }

          .dropdown-value p {
            overflow: hidden;
            padding: 0 2px;
            width: 80px;
            height: 20px;
            text-align: center;
          }

          .option-container {
            padding: 10px;
          }
        }

        @media screen and (max-width: 320px) {
          .dropdown-container {
            margin-right: 2px;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div>
        <div class="dropdown-container">
          <div class="dropdown-value  ${this.isOpen ? 'open-dropdown-value' : ''}" @click="${this.toogleDropdown}">
            <p>${this.currentValue}</p>
            ${this.isOpen ? arrowUp : arrowDown}
          </div>
          <div class="dropdown-options ${this.isOpen ? 'open-dropdown' : ''}">
            ${this.options.map(option => html`
              <div class="option-container ${this.currentValue == this.capitalizeOption(option) ? 'option-selected' : ''}" @click="${() => this.handleSelection(option)}">
                <p>${this.capitalizeOption(option)}</p>
                ${this.currentValue == this.capitalizeOption(option) ? html`<span @click=${(e) => this.deleteFilter(e, option)}>${deleteIcon}</span>` : ''}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      title: {type: String},
      currentValue: {type: String},
      options: {type: Array},
      isOpen: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.isOpen = false;
  }
  
  firstUpdated() {
    this.currentValue = this.title;
  }

  toogleDropdown() {
    this.isOpen = !this.isOpen;
  }

  capitalizeOption(option) {
    option = option.split('');
    option[0] = option[0].toUpperCase();
    option = option.join('');
    return option;
  }

  handleSelection(value) {
    if(value == 'payment' || value == 'credit')
      store.dispatch(updateTransactionType(value));
    else
      store.dispatch(updateCurrency(value));
    
    this.currentValue = this.capitalizeOption(value);
    this.isOpen = false;
  }

  deleteFilter(event, option) {
    event.stopPropagation();
    if(option == 'payment' || option == 'credit')
      store.dispatch(updateTransactionType(''));
    else
      store.dispatch(updateCurrency(''));

    this.toogleDropdown();
    this.currentValue = this.title;
  }
}

customElements.define('dropdown-element', DropdownElement);