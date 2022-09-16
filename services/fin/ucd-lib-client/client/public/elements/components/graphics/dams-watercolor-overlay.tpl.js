import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import "@polymer/iron-icons/iron-icons";
import './dams-watercolor';


export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
    position: relative;
  }
  .img-container {
    border-radius: 50%;
    background-size: cover;
    position: absolute;
  }
  iron-icon {
    position: absolute;
  }
  dams-watercolor {
    height: 100%;
    width: 100%;
  }
  .gold {
    color: var(--color-aggie-gold);
  }
  .white {
    color: var(--color-white);
  }
</style>
<dams-watercolor
  rotate="${this.wcRotation}"
  color="${this.wcColor}"
  src-file-prefix="${this.wcPattern}">
</dams-watercolor>
${this.imgSrc ? html`
  <div class="img-container" style="${styleMap(this.getImgStyles())}"></div>
` : html``}
${this.icon ? html`
  <iron-icon icon="${this.icon}" style="${styleMap(this.getIconStyles())}"></iron-icon>
` : html``}
${this.overlayTemplate === "stars" ? html`
  <iron-icon style="width:50px;height:50px;top:35%;left:30%;" icon="star" class="gold"></iron-icon>
  <iron-icon style="width:25px;height:25px;top:20%;left:50%;" icon="star" class="white"></iron-icon>
  <iron-icon style="width:25px;height:25px;top:40%;left:60%;" icon="star" class="white"></iron-icon>
` : html``}


`;}