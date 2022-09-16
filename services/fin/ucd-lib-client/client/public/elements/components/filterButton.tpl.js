import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: .84rem;
      background-color: red;
      align-items: center;
      width: auto;
      height: 1.5rem;
      border-radius: 2rem;
      padding-left:.5rem;
      padding-top:.5rem;
      padding-bottom:.5rem;
      padding-right:1rem;
      display:flex;
      background-color: var(--color-aggie-blue-50);
      font-weight: bold;
      font-size: 0.84rem;
      color: var(--default-primary-color);


    }
    .container:hover .icon-container{
      background-color: var(--color-aggie-blue-70);
    }
    .container:hover iron-icon{
      fill: var(--color-aggie-gold);
    }
    .icon-container {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      background-color:transparent;
      display: inline-block;
      transition: 0.3s;



    }
    iron-icon {
      fill: var(--color-aggie-blue-70);
    }

  </style>
  <div class="container">
    <div class="icon-container">
      <iron-icon @click=${this._deleteFilter} icon="icons:close"></iron-icon>
    </div>
    <span style="padding-left:.2rem">
      <slot name="filter-button-text"></slot>
    </span>
  </div>
  `;
}
