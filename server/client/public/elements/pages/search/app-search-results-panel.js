import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import template from './app-search-results-panel.html'

class AppSearchResultsPanel extends PolymerElement {

  static get properties() {
    return {
      /**
       * Array of search results
       */
      results : {
        type : Array,
        value : () => []
      },
      /**
       * size in px's between each masonary layout cell
       */
      masonryMargin : {
        type : Number,
        value : 15
      },
      /**
       * are we in list or masonry layout
       */
      isListLayout : {
        type : Boolean,
        value : false
      }
    }
  }

  static get template() {
    return template;
  }

  constructor() {
    super();

    this.resizeTimer = -1;
    window.addEventListener('resize', () => this._resizeAsync());

    var results = [];
    for( var i = 0; i < 20; i++ ) {
      results.push({
        count : i,
        css : 'width: 250px; height:' + (200 + (Math.random() * 300)) + 'px'
      });
    }
    this.render(results);
  }

  /**
   * @method render
   * @description render results of search query
   * 
   * @param {Array} results results to render
   */
  render(results) {
    this.results = results;
    requestAnimationFrame(() => this._resize());
  }

  /**
   * @method _onLayoutToggle
   * @description Toggle between masonry and list layout
   * 
   * @param {Event} e HTML click event
   */
  _onLayoutToggle(e) {
    let type = e.currentTarget.getAttribute('type');
    if( type === 'masonry' ) this.isListLayout = false;
    else this.isListLayout = true;

    if( !this.isListLayout ) {
      requestAnimationFrame(() => this._resize());
    }
  }

  /**
   * @method _resizeAsync
   * @description buffer resize masonary layout call
   */
  _resizeAsync() {
    if( this.resizeTimer !== -1 ) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.resizeTimer = -1;
      this._resize();
    }, 50);
  }

  /**
   * @method _resize
   * @description resize masonary layout
   */
  _resize() {
    if( this.isListLayout ) return;

    let firstDiv = this.$.layout.querySelector('div');
    if( !firstDiv ) return;

    let ew = this.offsetWidth;
    let w = firstDiv.offsetWidth + this.masonryMargin;

    let numCols = Math.max(Math.floor(ew / w), 1);

    let colHeights = [];
    for( var i = 0; i < numCols; i++ ) colHeights.push(0);

    let eles = this.$.layout.querySelectorAll('div');
    for( let i = 0; i < eles.length; i++ ) {
      let col = this._findMinCol(colHeights);
      let cheight = colHeights[col];

      eles[i].style.left = (col * w) + 'px';
      eles[i].style.top = colHeights[col] + 'px';
      eles[i].style.visibility = 'visible';

      colHeights[col] += eles[i].offsetHeight + this.masonryMargin;
    }

    let maxHeight = Math.max.apply(Math, colHeights);
    this.$.layout.style.height = maxHeight+'px';
  }

  /**
   * @method _findMinCol
   * @description given an array of column heights, return
   * the column index that has the min height
   * 
   * @param {Array} colHeights array of heights
   */
  _findMinCol(colHeights) {
    let min = colHeights[0];
    let minCol = 0;
    for( var i = 1; i < colHeights.length; i++ ) {
      if( min > colHeights[i] ) {
        min = colHeights[i];
        minCol = i;
      }
    }
    return minCol;
  }

  /**
   * @method _onToggleDrawer
   * @description fire an event for app-search indicating the drawer toggle has
   * been clicked.
   */
  _onToggleDrawer() {
    this.dispatchEvent(new CustomEvent('toggle-drawer'));
  }

}

customElements.define('app-search-results-panel', AppSearchResultsPanel);