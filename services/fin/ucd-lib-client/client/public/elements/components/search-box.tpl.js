import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style include="shared-styles">
  :host {
    display: block;
  }
  .root {
    display: flex;
    align-items: center;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    background: white;
    border: none;
    height: 45px;
    outline: none;
    font-size: var(--font-size);
  }
  input::placeholder {
    color: var(--color-aggie-blue-70);
  }

  button {
    background: var(--color-aggie-gold);
    height: 45px;
    border: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 0;
    cursor: pointer;
  }
  button:hover {
    background: var(--color-aggie-blue);
  }

  button:hover > ::slotted(*) {
    fill: var(--color-aggie-gold);
  } 


</style>
<div class="root">
  <div style="flex:1">
    <input 
      id="input" 
      type="text"
      @keyup="${this._onKeyUp}"
      placeholder="${this.placeholder}" 
      @change="${this._handleChange}"
    />
  </div>
  <button @click="${this._fireSearch}">
    <slot name="button-content"></slot>
  </button>
</div>
`;}
