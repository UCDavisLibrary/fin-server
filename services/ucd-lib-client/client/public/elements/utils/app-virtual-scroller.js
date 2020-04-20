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

    this._onResize = this._onResize.bind(this);
    this.addEventListener('scroll', () => this._onViewportUpdate());
  }

  firstUpdated() {
    this.positionEle = this.querySelector('.app-virtual-scroller-scroll-panel');
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('resize', this._onResize);
    this._cacheHeight();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._onResize);
  }

  createRenderRoot() {
    return this;
  }

  _onResize(e) {
    this._cacheHeight(true);
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
    if( props.has('items') ) {
      this.scrollTop = 0;
      this.totalScrollHeight = this.itemHeight*this.items.length;
      this.positionEle.style.height = (this.itemHeight*this.items.length)+'px';
    }
    if( props.has('itemHeight') || props.has('items') ) {
      this._onViewportUpdate(true);
    }

  }

  _onViewportUpdate(force=false) {
    if( this.height <= 0 ) this._cacheHeight(false);

    let firstItem = Math.floor(this.scrollTop / this.itemHeight) - 1;
    if( firstItem < 0 ) firstItem = 0;

    let lastItem = firstItem + Math.ceil(this.height / this.itemHeight) + 2;
    if( lastItem >= this.items.length ) lastItem = this.items.length;

    if( this.firstItem === firstItem && this.lastItem === lastItem && force === false ) return;
    
    // check for iOS overscroll and ignore
    if( this.itemHeight * (lastItem-1) > this.height &&
       this.scrollTop + this.height + 5 > this.totalScrollHeight ) {
      // console.log('overflow protection!');
      return;
    }
    
    this.firstItem = firstItem;
    this.lastItem = lastItem;

    let items = [];
    for( let i = firstItem; i < lastItem; i++ ) {
      items.push({index: i, top: this.itemHeight*i});
    }
    this.renderedItems = items;

    Array.from(this.querySelectorAll('.vs-row'))
      .forEach(ele => ele.removeAttribute('hover'));
  }

  renderItems() {
    // update triggered from nested object
    if( this.renderedItems.length > this.items.length ) {
      // console.log('ignoring out of date render');
      return html``;
    }

    return this.renderedItems.map(item => {
      // badness
      if( item.index >= this.items.length ) {
        return html``;
      }

      return html`
        <div
          class="vs-row"
          @mouseover="${this._onRowMouseOver}"
          @mouseout="${this._onRowMouseOut}" 
          style="position: absolute; left: 0; right: 0; top: ${item.top}px; height: ${this.itemHeight}px">
          ${this.renderItem.apply(this.renderItemScope, [item.index])}
        </div>`
      });
  }

  _onRowMouseOver(e) {
    e.currentTarget.setAttribute('hover', 'true');
  }

  _onRowMouseOut(e) {
    e.currentTarget.removeAttribute('hover');
  }

  renderItem(index) {
    throw new Error('You must override this method');
  }

}

customElements.define('app-virtual-scroller', AppVirtualScroller);
