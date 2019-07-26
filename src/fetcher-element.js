import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';

import { SharedStyles } from '../assets/shared-styles';
import './utils/dropdown-element.js';
import './list-element.js';
import { store } from './redux/store.js';
import { addTransactions } from './redux/actions.js';

class FetcherElement extends connect(store)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          background-color: var(--app-pale-grey-darker-color);
          height: calc(100vh - 50px);
          width: 100vw;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .fetcher-container {
          padding: 40px;
          animation: fadeIn 0.5s ease;
        }

        .search-bar {
          display: flex;
          justify-content: flex-end;
          height: 50px;
        }

        .search-bar-content {
          display: flex;
          position: absolute;
        }

        button {
          background-color: var(--app-avocado-color);
          border-color: var(--app-avocado-color);
          color: var(--app-pale-grey-color);
          border-radius: 3px;
          padding: 10px 20px;
          font-size: 16px;
          max-height: 46px;;
        }

        .no-transactions {
          text-align: center;
          margin: 50px;
          color: var(--app-cobalt-color);
        }

        @media screen and (max-width: 675px) {
          :host {
            height: 100vh;
          }

          .search-bar {
            justify-content: center;
          }

          .fetcher-container {
            padding: 80px 5px 0 5px;
          }

          button {
            font-size: 14px;
            max-height: 42px;;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <div class="fetcher-container">
        <div class="search-bar">
          <div class="search-bar-content">
            <dropdown-element 
              .title=${this.paymentTitle}
              .options=${this.paymentOptions}>
            </dropdown-element>
            <dropdown-element
              .title=${this.currencyTitle}
              .options=${this.currencyOptions}>
            </dropdown-element>
            <button @click="${this.doSearch}">Search</button>
          </div>
        </div>

        ${!this.fetchError ?
            html`<list-element .transactions=${this.transactions}></list-element>`
            :
            html`<p class="no-transactions">No transactions found !!!</p>`}
      </div>
      `;
  }

  stateChanged(state) {
    this.transactions = [...state.transactions];
    this.action = state.transactionType;
    this.currencyCode = state.currency;
  }
  
  static get properties() {
    return {
      transactions: {type: Array},
      action: {type: String},
      currencyCode: {type: String},
      paymentTitle: {type: String},
      paymentOptions: {type: Array},
      currencyTitle: {type: String},
      currencyOptions: {type: Array},
      fetchError: {type: Boolean},
    }
  }

  constructor() {
    super();
    this.paymentTitle = 'Transaction type';
    this.paymentOptions = [
      'payment',
      'credit'
    ];
    this.currencyTitle = 'Currency';
    this.currencyOptions = [
      'EUR',
      'USD'
    ];
    this.fetchError = false;
  }

  firstUpdated() {
    this.doSearch();
  }

  doSearch() {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + window.btoa('' + ':' + '')); //This should be an 'env var'

    let url = `https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions`;
    if(this.action != '') {
      if(this.currencyCode != '') {
        url = `https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?action=${this.action}&currencyCode=${this.currencyCode}`;
      } else {
        url = `https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?action=${this.action}`;
      } 
    } else if (this.currencyCode != '') {
      url = `https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?currencyCode=${this.currencyCode}`;
    }
    
    fetch(url, {
      headers,
      method:'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.fetchError = false;
        store.dispatch(addTransactions(data));
      })
      .catch(error => {
        this.fetchError = true;
        console.log('Error: ', error);
      });
  }
}

customElements.define('fetcher-element', FetcherElement);