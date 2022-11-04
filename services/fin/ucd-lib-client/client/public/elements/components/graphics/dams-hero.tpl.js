import { html } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
  .container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--color-white);
  }
  ::slotted(*) {
    color: var(--color-white) !important;
  }
  dams-watercolor {
    display: block;
    height: 8rem;
  }
  
</style>
<div class="container" style="${styleMap(this.getContainerStyles())}">
  <slot></slot>
  ${this.watercolor ? html`
    <dams-watercolor 
      element="div"
      src-file-prefix="${this.watercolor.split("-")[0]}"
      color="${this.watercolor.split("-")[1]}">
    </dams-watercolor>
  `: html``}
</div>

`;}