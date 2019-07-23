import { LitElement, html } from 'lit-element';

class ListElement extends LitElement {
  render() {
    return html`
      <div>
        <style>
          
        </style>

        <div>
          <div>
            <p>${this.currentValue}</p>
            <img src="#" alt="">
          </div>
          <div>

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
    this.currentValue = this.title;
  }
}

customElements.define('list-element', ListElement);