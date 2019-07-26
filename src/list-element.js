import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';
import { person, creditCard, coins, fourDigits, paymentMethod } from './utils/icons';
import './list-item-element';

class ListElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        .list-container {
          background-color: var(--app-white-color);
          margin-top: 20px;
          border-radius: 3px;
          padding: 10px;
        }
      
        .list-header {
          font-size: 14px;
          font-weight: 600;
          display: grid;
          grid-template-columns: repeat(5, 1fr [col-start]);
          align-items: center;
          height: 40px;
          color: var(--app-cobalt-color);
          padding: 0 10px;
        }

        .list-header-mobile {
          display: none;
        }
        
        .list-last-col {
          width: 200px;
          display: grid;
          grid-template-columns: repeat(2, 100px [col-start]);
        }
      
        .list-amount-col {
          margin-right: 40px;
        }

        @media screen and (max-width: 675px) {
          .list-header {
            display: none;
          }

          .list-header-mobile {
            display: grid;
            grid-template-columns: repeat(5, 1fr [col-start]);
          }
          
          .list-header-mobile div {
            padding-left: 10px;
          }

          .list-mobile-last-col {
            width: fit-content;
            display: grid;
            grid-template-columns: repeat(2, 1fr [col-start]);
          }
        }
      `
    ]
  }
  render() {
    return html`
      <div>
        ${this.transactions === undefined ? html`<p>Nothing found !!!</p>` : ''}
        <div class="list-container">
          <div class="list-header">
            <div>Name</div>
            <div>Brand</div>
            <div>Last 4 digits</div>
            <div>Transaction type</div>
            <div class="list-last-col">
              <div class="list-amount-col">Amount</div>
              <div>Currency</div>
            </div>
          </div>
          <div class="list-header-mobile">
            <div>${person}</div>
            <div>${creditCard}</div>
            <div>${fourDigits}</div>
            <div>${paymentMethod}</div>
            <div>${coins}</div>
          </div>
          <div class="list-results">
            ${this.transactions !== undefined ?
                this.transactions.map((transaction, i) => html`<list-item-element .item=${transaction}></list-item-element>`)
                :
                ''}
          </div>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      transactions: {type: Array}
    }
  }
}

customElements.define('list-element', ListElement);