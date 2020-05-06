import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  app-virtual-scroller {
    display: block;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  app-virtual-scroller .app-virtual-scroller-scroll-panel {
    position: relative;
    /* border: 2px solid red; */
  }
</style>  

<div class="app-virtual-scroller-scroll-panel">
  ${this.renderItems()}
</div>

`;}