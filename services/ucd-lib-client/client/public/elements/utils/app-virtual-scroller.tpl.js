import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  app-virtual-scroller {
    display: block;
    overflow-y: auto;
  }

  app-virtual-scroller .app-virtual-scroller-scroll-panel {
    position: relative;
  }
</style>  

<div class="app-virtual-scroller-scroll-panel">
  ${this.renderItems()}
</div>

`;}