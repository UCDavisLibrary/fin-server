import { html } from 'lit';
// import { classMap } from 'lit/directives/class-map';
// import { styleMap } from 'lit/directives/style-map';

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
    height: 61px;
    outline: none;
    font-size: .8rem;
    font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 500;
  }
  input::placeholder {
    color: var(--color-aggie-blue-70);
  }

  button {
    background: var(--color-aggie-gold);
    height: 61px;
    border: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 0;
    cursor: pointer;
  }

  button:hover > ::slotted(*) {
    fill: var(--color-aggie-gold);
  } 

  .search-container {
    width: 25rem;
  }

  ucdlib-icon {
    width: 70%;
    height: 70%;
    margin: auto;
  }

</style>
<div class="root search-bar">
  <div class="search-container" style="flex:1">
    <input 
      id="input" 
      type="text"
      @keyup="${this._onKeyUp}"
      placeholder="${this.placeholder}" 
      @change="${this._handleChange}"
    />
  </div>
  <button @click="${this._fireSearch}" class="search-button">
    <ucdlib-icon icon="ucdlib-dams:fa-search"></ucdlib-icon>
  </button>
</div>
`;}
