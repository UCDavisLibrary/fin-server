import {Element as PolymerElement} from "@polymer/polymer/polymer-element";

class AppHeaderColorbar extends PolymerElement {

  static get properties() {
    return {
      height : {
        value : 36,
        type : Number,
        observer : '_updateHeight'
      },
      flipped : {
        value : false,
        type : Boolean,
        observer : '_flip'
      }
    }
  }

  static get template() {
    return html`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 36px;
        background-image: url('');
        background-position: center;
        background-size: cover;
      }
    </style>`;
  }

  constructor() {
    super();
    this.imageUrl = '/images/header-colorbar.png';
    this.fippedImageUrl = '/images/header-colorbar-flipped.png';
  }

  _updateHeight() {
    if( this.height > 36 ) this.height = 36;
    this.style.height = this.height+'px';
  }

  _flip() {
    if( this.flipped ) this.style.backgroundImage = `url('${this.fippedImageUrl}')`;
    else this.style.backgroundImage = `url('${this.imageUrl}')`;
  }
}
customElements.define('app-header-colorbar', AppHeaderColorbar);