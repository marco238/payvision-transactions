import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../assets/shared-styles';

class ListItemElement extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .transaction-item-row {
          font-size: 14px;
          display: grid;
          grid-template-columns: repeat(5, 1fr [col-start]);
          border-top: 1px solid var(--app-pale-grey-darker-color);
          color: var(--app-greyish-brown-color);
          padding: 0 10px;
          cursor: pointer;
          animation: fadeIn 0.5s ease;
          transition: all 0.1s ease;
        }

        .transaction-item-row p {
          padding-left: 5px;
        }
      
        .transaction-item-row:hover {
          background-color: var(--app-pale-grey-color);
        }
      
        .transaction-item-row-open {
          background-color: var(--app-pale-grey-color);
        }
      
        .transaction-item-last-col {
          width: 200px;
          display: grid;
          grid-template-columns: repeat(2, 100px [col-start]);
        }
      
        .transaction-item-details {
          color: var(--app-greyish-brown-color);
          background-color: var(--app-pale-grey-color);
          display: grid;
          grid-template-columns: repeat(auto-fill, 50%);
          grid-template-rows: repeat(3, 50px);
          height: 0;
          opacity: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
        }
      
        .transaction-item-details-open {
          height: 160px;
          opacity: 1;
          padding-top: 40px;
        }
        
        .transaction-item-details p {
          margin: 0;
        }
      
        .transaction-item-detail-card {
          display: grid;
          grid-template-columns: 25% 75%;
          padding-left: 40px;
        }

        .transaction-item-detail-card p:first-child {
          color: var(--app-cobalt-color);
        }

        @media screen and (max-width: 675px) {
          .transaction-item-details-open {
            grid-template-columns: repeat(auto-fill, 100%);
            height: 300px;
            padding-top: 10px;
          }

          .transaction-item-detail-card {
            grid-template-columns: 25% 75%;
            padding-left: 5px;
            font-size: 12px;
          }

          .transaction-item-last-col {
            width: fit-content;
            grid-template-columns: repeat(2, 1fr [col-start]);
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div>
        <div class="transaction-item" @click=${this.openTransaction}>
          <div class="transaction-item-row ${this.isOpen ? 'transaction-item-row-open' : ''}">
            <p>${this.item.card.holderName}</p>
            <p>${this.item.brandId}</p>
            <p>${this.item.card.lastFourDigits}</p>
            <p>${this.item.action}</p>
            <div class="transaction-item-last-col">
              <p>${this.item.amount}</p>
              <p>${this.item.currencyCode}</p>
            </div>
          </div>
          <div class="transaction-item-details ${this.isOpen ? 'transaction-item-details-open' : ''}">
            <div class="transaction-item-detail-card">
              <p>ID:</p>
              <p>${this.item.id}</p>
            </div>
            <div class="transaction-item-detail-card">
              <p>First 6 digits:</p>
              <p>${this.item.card.firstSixDigits}</p>
            </div>
            <div class="transaction-item-detail-card">
              <p>Tracking code:</p>
              <p>${this.item.trackingCode}</p>
            </div>
            <div class="transaction-item-detail-card">
              <p>Expiry month:</p>
              <p>${this.item.card.expiryMonth}</p>
            </div>
            <div class="transaction-item-detail-card">
              <p>Brand ID:</p>
              <p>${this.item.brandId}</p>
            </div>
            <div class="transaction-item-detail-card">
              <p>Expiry year:</p>
              <p>${this.item.card.expiryYear}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      item: {type: Object},
      isOpen: {type: Boolean}
    }
  }

  openTransaction() {
    this.isOpen = !this.isOpen;
  }
}

customElements.define('list-item-element', ListItemElement);