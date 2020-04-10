import { LitElement, html } from 'lit-element';
import render from "./app-virtual-scroller.tpl.js"


export default class AppVirtualScroller extends LitElement {

  static get properties() {
    return {
      itemHeight : {
        type: Number,
        attribute: 'item-height'
      },
      items : {type: Array},
      renderedItems : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.itemHeight = 20;
    this.renderedItems = [];
    this.items = [];
    this.height = -1;

    this._cacheHeight = this._cacheHeight.bind(this);

    this.addEventListener('scroll', () => this._onViewportUpdate());
  }

  firstUpdated() {
    this.positionEle = this.querySelector('.app-virtual-scroller-scroll-panel');
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('resize', this._cacheHeight);
    this._cacheHeight();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._cacheHeight);
  }

  createRenderRoot() {
    return this;
  }

  _cacheHeight(callViewportUpdate=true) {
    this.height = this.offsetHeight;
    if( callViewportUpdate === true ) this._onViewportUpdate();
  }

  setItemRenderer(renderer, scope) {
    this.renderItem = renderer;
    this.renderItemScope = scope || this;
  }

  updated(props) {
    if( props.has('itemHeight') || props.has('items') ) {
      this._onViewportUpdate(true);
    }
    if( props.has('items') ) {
      this.positionEle.style.height = (this.itemHeight*(this.items.length-1))+'px';
    }
  }

  _onViewportUpdate(force=false) {
    if( this.height <= 0 ) this._cacheHeight(false);

    let firstItem = Math.floor(this.scrollTop / this.itemHeight) - 1;
    if( firstItem < 0 ) firstItem = 0;

    let lastItem = firstItem + Math.ceil(this.height / this.itemHeight) + 1;
    if( lastItem >= this.items.length ) lastItem = this.items.length;

    if( this.firstItem === firstItem && this.lastItem === lastItem && force === false ) return;
    this.firstItem = firstItem;
    this.lastItem = lastItem;

    let items = [];
    for( let i = firstItem; i < lastItem; i++ ) {
      items.push({index: i, top: this.itemHeight*i});
    }
    this.renderedItems = items;
  }

  renderItems() {
    // update triggered from nested object
    if( this.renderedItems.length > this.items.length ) {
      // console.log('ignoring out of date render');
      return html``;
    }

    return this.renderedItems.map(item => html`
      <div style="position: absolute; left: 0; right: 0; top: ${item.top}px; height: ${this.itemHeight}px">
        ${this.renderItem.apply(this.renderItemScope, [item.index])}
      </div>
    `);
  }

  renderItem(index) {
    throw new Error('You must override this method');
  }

}

customElements.define('app-virtual-scroller', AppVirtualScroller);
