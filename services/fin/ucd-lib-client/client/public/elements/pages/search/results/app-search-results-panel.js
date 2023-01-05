import { LitElement } from 'lit';
import render from "./app-search-results-panel.tpl.js";

import "@ucd-lib/cork-pagination";
import "@polymer/paper-spinner/paper-spinner-lite";

import "./app-search-grid-result";
import "./app-search-list-result";
import "../../../utils/app-collection-card";
import "../filtering/app-top-active-filters";
import "../../../components/cards/dams-collection-card";
import "../../../components/cards/dams-item-card";

import "@ucd-lib/theme-elements/ucdlib/ucdlib-icon/ucdlib-icon";
import '../../../utils/app-icons';

const SEARCH_RESULTS_LAYOUT = 'search-results-layout';
let initIsListLayout = localStorage.getItem(SEARCH_RESULTS_LAYOUT);

class AppSearchResultsPanel extends Mixin(LitElement)
      .with(LitCorkUtils) {

  static get properties() {
    return {
      results : { type: Array }, // array of search results
      collectionResults : { type: Array }, // array of collection search results
      gridMargin : { type: Number }, // size in px's between each masonary layout cell
      isGridLayout : { type: Boolean }, // are we in grid layout
      isListLayout : { type: Boolean },
      isMosaicLayout : { type: Boolean },
      total : { type: String }, // UI display of total results
      numPerPage : { type: Number },
      currentIndex : { type: Number },
      showCollectionResults : { type: Boolean },
      showError : { type: Boolean },
      showLoading : { type: Boolean },
      errorMsg : { type: Boolean },
      paginationTotal : { type: Number }, // total number for pagination widget, we max out at 10000
      totalOverMaxWindow : { type: Boolean }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.render = render.bind(this);

    this.results = [];
    this.collectionResults = [];
    this.gridMargin = 15;

    if( initIsListLayout === 'grid' ) {
      this.isGridLayout = true;
      this.isListLayout = false;
      this.isMosaicLayout = false;
    } else if( initIsListLayout === 'list' ) {
      this.isGridLayout = false;
      this.isListLayout = true;
      this.isMosaicLayout = false;
    } else {
      this.isGridLayout = false;
      this.isListLayout = false;
      this.isMosaicLayout = true;
    }
    
    this.total = '0';
    this.numPerPage = 1;
    this.currentIndex = 0;
    this.showCollectionResults = false;
    this.showError = false;
    this.showLoading = false;
    this.errorMsg = false;
    this.paginationTotal = false;
    this.totalOverMaxWindow = false;

    this.resizeTimer = -1;
    window.addEventListener('resize', () => this._resizeAsync());

    this._injectModel('AppStateModel', 'CollectionModel', 'RecordModel', 'MediaModel', 'SearchVcModel');
    this.EventBus().on('show-collection-search-results', show => this._updateCollectionResultsVisibility(show));
  }

  /**
   * @method _onAppStateUpdate
   * @description from AppStateInterface, called when app state updates
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( e.location.page !== 'search') return;
    this._setSelectedDisplay();
    this._resizeAsync();
  }

  /**
   * @method renderResults
   * @description renderResults results of search query
   * 
   * @param {Array} results results to render
   * @param {Array} total total matched results
   * @param {Array} numPerPage results to render on each page
   * @param {Array} currentIndex index
   */
  renderResults(results, total, numPerPage, currentIndex) {
    this.results = [];
    this.showHeaderFooter = true;
    this.showError = false;
    clearTimeout(this.showLoadingTimer);
    this.showLoading = false;
    

    requestAnimationFrame(() => {
      this.total = total;
      // make sure we don't have a page the returns results > 10000k
      let t = Math.floor((10000-numPerPage) / numPerPage) * numPerPage;
      if( total > t ) {
        total = t;
        this.totalOverMaxWindow = true;
      } else {
        this.totalOverMaxWindow = false;
      }

      this.results = results;
      this.paginationTotal = total;
      this.numPerPage = numPerPage;
      this.shadowRoot.querySelector('#numPerPage').value = numPerPage+'';
      this.shadowRoot.querySelector('#numPerPageM').value = numPerPage+'';
      this.currentIndex = currentIndex;

      requestAnimationFrame(() => this._resize());
    });
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  onLoading() {
    this.results = [];
    // this.showHeaderFooter = false;
    this.showCollectionResults = false;
    this.showError = false;
    this.showLoadingTimer = setTimeout(() => {
      this.showLoading = true;
    }, 100);
  }

  onError(state) {
    this.results = [];
    // this.showHeaderFooter = false;
    this.showCollectionResults = false;
    this.showError = true;
   
    clearTimeout(this.showLoadingTimer);
    this.showLoading = false;

    if( state.showErrorMessage ) {
      this.errorMsg = state.error.message;
    } else {
      this.errorMsg = 'Oops. Something went wrong with search!';
    }
  }

  /**
   * @method _onLayoutToggle
   * @description Toggle between grid, list and mosaic layouts
   * 
   * @param {Event} e HTML click event
   */
  _onLayoutToggle(e) {
    let type = e.currentTarget.getAttribute('type');
    if( type === 'grid' ) {
      this.isGridLayout = true;
      this.isListLayout = false;
      this.isMosaicLayout = false;
      localStorage.setItem(SEARCH_RESULTS_LAYOUT, 'grid');
      this.shadowRoot.querySelector('.grid-layout-icon').classList.add('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.remove('selected-layout');
    } else if( type === 'list' ) {
      this.isGridLayout = false;
      this.isListLayout = true;
      this.isMosaicLayout = false;
      localStorage.setItem(SEARCH_RESULTS_LAYOUT, 'list');
      this.shadowRoot.querySelector('.grid-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.add('selected-layout');
    } else {
      this.isGridLayout = false;
      this.isListLayout = false;
      this.isMosaicLayout = true;
      localStorage.setItem(SEARCH_RESULTS_LAYOUT, 'mosaic');
      this.shadowRoot.querySelector('.grid-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.add('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.remove('selected-layout');
    }
    this._setSelectedDisplay();

    // if( !this.isListLayout ) {
    requestAnimationFrame(() => this._resize());
    // }
  }

  _setSelectedDisplay() {
    let type = localStorage.getItem(SEARCH_RESULTS_LAYOUT);
    if( type === 'grid' ) {
      this.shadowRoot.querySelector('.grid-layout-icon').classList.add('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.remove('selected-layout');
    } else if( type === 'list' ) {
      this.shadowRoot.querySelector('.grid-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.add('selected-layout');
    } else {
      this.shadowRoot.querySelector('.grid-layout-icon').classList.remove('selected-layout');
      this.shadowRoot.querySelector('.mosaic-layout-icon').classList.add('selected-layout');
      this.shadowRoot.querySelector('.list-layout-icon').classList.remove('selected-layout');
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
    let firstDiv = this.shadowRoot.querySelector('#layout').querySelector('app-search-grid-result');
    if( !firstDiv ) return;

    let ew = this.offsetWidth;
    let w = firstDiv.offsetWidth + 25;

    let numCols = Math.max(Math.floor(ew / w), 1);
    if( numCols > 3 ) numCols = 3;

    // this makes sure columns are centered
    let leftOffset = Math.floor((ew - numCols * w) / 2);

    let colHeights = [];
    for( let i = 0; i < numCols; i++ ) colHeights.push(0);

    let eles = this.shadowRoot.querySelector('#layout').querySelectorAll('app-search-grid-result');
    for( let i = 0; i < eles.length; i++ ) {
      let col = this._findMinCol(colHeights);
      let cheight = colHeights[col];

      eles[i].style.left = (leftOffset + col * w) + 'px';
      eles[i].style.top = colHeights[col] + 'px';
      // eles[i].style.visibility = 'visible';

      colHeights[col] += eles[i].offsetHeight + 25;
    }

    let maxHeight = Math.max.apply(Math, colHeights);
    this.shadowRoot.querySelector('#layout').style.height = maxHeight+'px';


    // also reposition mosaic grid
    /*
    function resizeGridItem(item){
      grid = document.getElementsByClassName("grid")[0];
      rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
    }

    function resizeAllGridItems(){
      allItems = document.getElementsByClassName("item");
      for(x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
      }
    }

    function resizeInstance(instance){
      item = instance.elements[0];
      resizeGridItem(item);
    }

    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
      imagesLoaded( allItems[x], resizeInstance);
    }
    */


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

  /**
   * @method _onPageSizeChange
   * @description bound to select box change event, dispatch event to parent
   * alerting new page size
   */
  _onPageSizeChange(e) {
    this.dispatchEvent(new CustomEvent('page-size-change', {
      detail : parseInt(e.currentTarget.value)
    }));
  }

  /**
   * @method _onPaginationNav
   * @description bound to scork-pagination `nav` event, dispatch event to parent
   * alerting to new page 
   */
  _onPaginationNav(e) {
    this.dispatchEvent(new CustomEvent('page-change', {
      detail : e.detail
    }));
  }

  /**
   * @method _updateCollectionResultsVisibility
   * @description bound to collection visibility updates (see contructor).  Fired
   * via CollectionModel which decides if a collection search should be preformed.
   */
  _updateCollectionResultsVisibility(show) {
    this.showCollectionResults = show;
  }

  /**
   * @description _onSearchVcUpdate, fired when record search viewController updates
   * @param {*} e 
   */
   _onSearchVcUpdate(e) {
    if( e.state !== 'loaded' ) return;
    // debugger;
    this.collectionResults = [... new Set(e.payload.results.map(c => c.collectionId['@id']))]; // e.payload.results.filter(c => c.collection);
  }

  /**
   * @method _onCollectionClicked
   * @description bound to app-collection-card click event
   * 
   * @param {Object} e click|keyup event
   */
  _onCollectionClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;

    const location = e.target.dataset.collectionid;
    if( location ) {
      this.AppStateModel.setLocation(location);
    }
  }

  /**
   * @method _onRecordClicked
   * @description bound to click events of the search result record cards/list items
   * 
   * @param {Object} e click|keyup event
   */
  _onRecordClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    const location = e.target.dataset.itemid;
    if( location ) {
      this.AppStateModel.setLocation(location);
    }
  }

}

customElements.define('app-search-results-panel', AppSearchResultsPanel);