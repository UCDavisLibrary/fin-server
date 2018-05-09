import {PolymerElement, html} from "@polymer/polymer/polymer-element";

/**
 * This is the rainbow color bar at the top of a page.  Just a style element.
 */
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

  /**
   * @method _updateHeight
   * @description called when `height` property is changed.
   */
  _updateHeight() {
    if( this.height > 36 ) this.height = 36;
    this.style.height = this.height+'px';
  }

  /**
   * @method _flip
   * @description called when `flipped` property is changed.
   */
  _flip() {
    if( this.flipped ) this.style.backgroundImage = `url('${this.fippedImageUrl}')`;
    else this.style.backgroundImage = `url('${this.imageUrl}')`;
  }
}
customElements.define('app-header-colorbar', AppHeaderColorbar);