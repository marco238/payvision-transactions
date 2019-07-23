import { LitElement, html } from 'lit-element';

class AboutElement extends LitElement {
  render() {
    return html`
      <div>
        <style>
          
        </style>

        <h2>About</h2>
      </div>
    `;
  }
  
  static get properties() {
    return {
      
    }
  }
}

customElements.define('about-element', AboutElement);