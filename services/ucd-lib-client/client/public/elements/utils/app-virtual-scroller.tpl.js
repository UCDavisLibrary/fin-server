import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  .container {
    overflow-y: auto;
    height: 100%;
  }

  .scroll-panel {
    position: relative;
  }

  .virtual-scroller-row {
    position: absolute;
  }
</style>  

<div class="container">
  <div class="scroll-panel">
    ${this.renderItems()}
  </div>
</div>


`;}