import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
  }
  img {
    object-fit: contain;
  }
  .bg-img {
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position: bottom;
    width: 100%;
    height: 100%;
  }
</style> 
${this.element === 'img' ? html`
  <img 
    src="${this.getImgSrc()}" 
    srcset="${this.getImgSrcSet()}"
    height="100%"
    width="100%"
    alt="" 
    style="${styleMap(this.getImgStyles())}">
` : html`
  <div class="bg-img" style="${styleMap(this.getBgImgStyles())}"></div>
`}


`;}