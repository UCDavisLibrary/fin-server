import { html } from 'lit';

export default function render() {
return html`

<style>
  :host {
    display: block;
    /* background: black; */
    padding: 20px 0;
    /* position: relative; */
    box-sizing: border-box;
  }

  paper-spinner-lite {
    --paper-spinner-color: var(--default-secondary-color);
  }

  #loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
  }

  .layout {
    text-align: center;
  }

  [hidden] {
    display: none !important;
  }
</style>

<div id="loading" ?hidden="${!this.loading}">
  <paper-spinner-lite ?active="${this.loading}"></paper-spinner-lite>
</div>

<div class="layout" ?hidden="${this.loading}" style="line-height: 0">
  <img id="img" />
</div>

`;}