import { LitElement, html } from 'lit-element';
import './list-element.js';
import { connect } from 'pwa-helpers';

import { store } from '../src/redux/store.js';
import {
  addFilms,
  updateTopic
} from '../src/redux/actions.js';

class FetcherElement extends connect(store)(LitElement) {
  render() {
    return html`
      <div>
        <div class="search-bar">
          <select>
            <option value="payment">Payment</option>
            <option value="credit">Credit</option>
          </select>
          <select>
            <option value="EUR">Payment</option>
            <option value="JPY">Credit</option>
            <option value="USD">Credit</option>
          </select>
        </div>
        <input type="text" placeholder='Type here...' .value=${this.topic} @input=${this.handleInput}>
        <button @click="${this.doSearch}">Search</button>

        <list-element .films=${this.films}></list-element>
        <p>${this.films.length}</p>
      </div>
      `;
  }

  stateChanged(state) {
    this.topic = '';
    this.films = [...state.films];
  }
  
  static get properties() {
    return {
      topic: {type: String},
      films: {type: Array}
    }
  }

  handleInput(e) {
    this.topic = e.target.value;
  }

  doSearch() {
    if(this.topic !== '') {
      fetch(`https://www.omdbapi.com/?s=${this.topic}&plot=full&apikey=e477ed6a`)
        .then(response => response.json())
        .then((myJson, topic = this.topic) => {
          store.dispatch(addFilms(myJson.Search));
          store.dispatch(updateTopic(topic));
        })
        .catch(error =>  console.log('Error: ', error));
    }
  }
}

customElements.define('fetcher-element', FetcherElement);