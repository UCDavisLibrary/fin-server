import { LitElement } from 'lit';
import render from "./app-collection-card.tpl.js";
import ioLoader from "../../lib/utils/intersection-observer-loader";

export default class AppCollectionCard extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      collection : { type : Object },
      tabindex : { type : Number },
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.collection = {};
    this.tabindex = 0;

    this.shownInViewport = false;
    this.active = true;
  }

  async connectedCallback() {    
    super.connectedCallback();
    if ( this.collection.thumbnailUrl === '/images/logos/logo-white-512.png' ) {
      let cards = this.shadowRoot.querySelectorAll('.img')[0];
      cards.className += ' defaultImage';
    }

    if( !this.observer ) {
      await ioLoader.load();
      this.observer = new IntersectionObserver(
        e => this._onViewportIntersection(e), 
        {
          rootMargin: '10px', 
          threshold: 0
        }
      );
    }

    this.imageLoaded = false;
    this.observer.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  updated() {
    this._onCollectionChange();
  }

  _onCollectionChange() {
    if( !this.shownInViewport ) return;
    this._setBackgroundImage();
  }

  _onViewportIntersection(e) {
    if( e.length === 0 ) return;
    e = e[0];
    
    if( this.shownInViewport || !e.isIntersecting ) return;
    this.shownInViewport = true;

    this._setBackgroundImage();
  }

  _setBackgroundImage() {
    this.shadowRoot.querySelector('#img').style.backgroundImage = `url('${this.collection.thumbnailUrl}')`;
  }
}

customElements.define('app-collection-card', AppCollectionCard);