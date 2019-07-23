import { LitElement, html } from 'lit-element';

class ListItemElement extends LitElement {
  render() {
    return html`
      <div>
        <style>
          
        </style>

        <div>
          <p>List Item Element</p>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      
    }
  }
}

customElements.define('list-item-element', ListItemElement);