import { LitElement } from 'lit-element';
import render from "./app-virtual-scroller.tpl.js"


export default class AppVirtualScroller extends LitElement {

  static get properties() {
    return {
      itemHeight : {
        type: Number,
        attribute: 'item-height'
      },
      renderedItems : {type: Array},
      count : {type: Number}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.itemHeight = 20;
    this.renderedItems = [];
    this.count = 0;
    this.height = 0;

    this._cacheHeight = this._cacheHeight.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.scrollEle = this.shadowRoot.querySelector('.outer');

    window.addEventListener('resize', this._cacheHeight);
    this._cacheHeight();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._cacheHeight);
  }

  _cacheHeight() {
    this.height = this.offsetHeight;
  }

  _onViewportUpdate() {
    let firstItem = Math.floor(this.scrollEle.scrollTop / this.itemHeight);
    let lastItem = firstItem + Math.ceil(this.height / this.itemHeight);
    if( lastItem >= this.count ) lastItem = this.count-1;

    if( this.firstItem === firstItem && this.lastItem === lastItem ) return;
    this.firstItem = firstItem;
    this.lastItem = lastItem;

    let items = [];
    for( let i = firstItem; i < lastItem; i++ ) {
      items.push({index: i, top: this.itemHeight*i});
    }
    this.renderedItems = items;
  }

  renderItems() {
    return this.renderedItems.map(item => html`
      <div class="virtual-scroller-row" style="top: ${item.top}px;">
        ${this.renderItem(item.index)}
      </div>
    `);
  }

  renderItem(index) {
    throw new Error('You must override this method');
  }

}

customElements.define('app-virtual-scroller', AppVirtualScroller);
