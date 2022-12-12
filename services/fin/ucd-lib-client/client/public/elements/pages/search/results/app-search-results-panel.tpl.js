import { html } from 'lit';

export default function render() {
return html`
<style include="shared-styles">
  :host {
    display: block;
    max-width: 1150px;
    position: relative;
    margin: 0 5px
  }

  [hidden] { display: none !important; }

  .header {
    font-size: var(--fs-sm);
    display: flex;
    /* display: grid;
    grid-template-columns: 5fr 4fr; */
    align-items: center;
    margin-bottom: 11px;
    margin-top: 5px;
    padding: 1.5rem;
  }

  select {
    margin-left: 10px;
    border: 1px solid var(--light-background-color);
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    -webkit-border-radius: 0px;
    padding: 5px 25px 5px 10px;
    background-position: right 10px center;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+');
    background-position-y: 13px;
  }
  /* for IE */
  select::-ms-expand {
    display: none;
  }

  h3 {
    border-top: 1px solid var(--light-background-color);
    margin: 15px 0 0 0;
    padding: 15px 0 0 0;
    color: var(--default-primary-color);
  }

  .grid {
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .grid .item {
    1display: block;
    1position: absolute;
    /* visibility: hidden; */
    1top : 25px;
    1left: 25px;
    1will-change: top, left;
    1transition: top 500ms ease-out, left 500ms ease-out;
  }

  .grid dams-item-card {
    flex: 30%;
    padding: 1rem;
    max-width: 383px;
  }

  .list {
    margin: 10px;
  }

  .list .item {
    padding: 10px;
    margin-bottom: 15px;
    background-color: #daaa00;
    height: 250px;
  }

  .spacer {
    height: 20px;
    border-right: 1px solid var(--light-background-color);
  }

  .total {
    font-size: .9rem;
    padding-left: 10px;
    /* flex: 1; */
  }

  .mobile-total {
    font-style: italic; 
  }

  .filler {
    flex: 1;
  }

  paper-spinner-lite {
    --paper-spinner-color: var(--default-secondary-color);
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    color: red;
  }

  cork-pagination {
    display: inline-block;

    --cork-color : var(--default-primary-color);
    --cork-background-color : var(--default-secondary-color);
  }

  #numPerPage {
    font-size: .9rem;
  }

  .drawer-toggle {
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-weight: var(--fw-bold);
    color: var(--default-primary-color);
    background-color: var(--light-background-color);
    border-radius: 0;
    border: 0;
    padding: 0;
  }
  .drawer-toggle > span {
    padding : 0 10px;
  }
  .drawer-toggle iron-icon {
    background-color: var(--default-secondary-color);
  }

  .drawer-toggle[disabled] {
    color: var(--light-background-color);
  }

  .header {
    display : none;
  }

  .mobile-header {
    padding-top: 15px;
    margin-bottom: 10px;
  }

  .mobile-header .row2 {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .mobile-header .row2-right {
    display: flex;
    align-items: center;
  }

  .collections {
    text-align: center;
  }

  .collections-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .collections-content dams-collection-card {
    flex: 33.33%;
    max-width: 383px;
  }

  /*
  .mosaic {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-auto-rows: 20px;
  }
  */

  ucdlib-icon {
    height: 40px; 

    display: inline-block;
    position: relative;
    padding: 8px 0;
   
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    z-index: 0;
    line-height: 1;
    width: 45px;
    height: 45px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box !important;
    justify-content: flex-end;
    fill: var(--color-aggie-blue-80);
  }

  .masonry {
    margin: 10px;
    position: relative;
  }

  .masonry .item {
    display: block;
    position: absolute;
    /* visibility: hidden; */
    top : 25px;
    left: 25px;
    will-change: top, left;
    transition: top 500ms ease-out, left 500ms ease-out;
  }

  /* app-search-grid-result {
    width: 33%;
  } */

  .selected-layout {
    box-shadow: inset -2px 0 0 var(--color-aggie-gold), inset 0 -2px 0 var(--color-aggie-gold), inset 2px 0 0 var(--color-aggie-gold), inset 0 2px 0 var(--color-aggie-gold);
  }

  @media( max-width: 400px ) {
    .mobile-header .row2 {
      flex-direction: column;
      justify-content: center;
    }
    .mobile-header .row2 .total {
      padding: 8px 0 5px 0;
    }
  }

  @media( min-width: 975px ) {
    .header {
      display: flex;
      /* display: grid;
      grid-template-columns: 5fr 4fr;
      align-items: center; */
    }
    .mobile-header {
      display: none;
    }
  }
</style>

<div class="header">
  <div class="total" ?hidden="${this.showLoading}">${this.total} results found</div>
  
  <!-- <div class="filler"></div> -->
  <div style="margin: 0 10px; font-size: .9rem; display: inline-flex; max-width: 5rem">
    <span style="margin: auto 5px">Display:</span>
    <ucdlib-icon icon="ucdlib-dams:result-display-grid" @click="${this._onLayoutToggle}" type="grid" class="grid-layout-icon selected-layout"></ucdlib-icon>
    <ucdlib-icon icon="ucdlib-dams:result-display-mosaic" @click="${this._onLayoutToggle}" type="mosaic" class="mosaic-layout-icon"></ucdlib-icon>
    <ucdlib-icon icon="ucdlib-dams:result-display-list" @click="${this._onLayoutToggle}" type="list" class="list-layout-icon"></ucdlib-icon>
  
    <select id="numPerPage" on-change="_onPageSizeChange">
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10" selected>10</option>
    </select>
    <div style="margin: 0 10px; font-size: .9rem; min-width: max-content">items per page</div>
  </div>
  <!-- <div style="flex: .25"></div> -->
  
  
  <!-- <div>
    <select id="numPerPage" on-change="_onPageSizeChange">
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10" selected>10</option>
    </select>
  </div>-->
  <!-- <div style="margin: 0 10px; font-size: .9rem">items per page</div> -->
</div>

<div class="mobile-header">
  <div>
    <div style="display:inline-block">
      <button class="drawer-toggle" on-click="_onToggleDrawer">
        <span>Info / Filters</span>
        <iron-icon icon="add"></iron-icon>
      </button>
    </div>
  </div>

  <div class="row2">


    <span style="margin: auto 5px">Display:</span>
      <ucdlib-icon icon="ucdlib-dams:result-display-grid" @click="${this._onLayoutToggle}" type="grid" class="grid-layout-icon selected-layout"></ucdlib-icon>
      <ucdlib-icon icon="ucdlib-dams:result-display-mosaic" @click="${this._onLayoutToggle}" type="mosaic" class="mosaic-layout-icon"></ucdlib-icon>
      <ucdlib-icon icon="ucdlib-dams:result-display-list" @click="${this._onLayoutToggle}" type="list" class="list-layout-icon"></ucdlib-icon>
    
      <select id="numPerPageM" on-change="_onPageSizeChange">
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10" selected>10</option>
      </select>
      <div style="margin: 0 10px; font-size: .9rem; min-width: max-content">items per page</div>


    <!-- <div class="total" ?hidden="${this.showLoading}">${this.total} results</div>

    <div class="row2-right">
      <div class="filler"></div>
    
      <paper-icon-button 
        noink
        icon="fin-icons:grid" 
        ?disabled="${!this.isListLayout}"
        on-click="_onLayoutToggle" 
        type="masonry">
      </paper-icon-button>
      <div class="spacer"></div>
      <paper-icon-button
        noink
        icon="fin-icons:list" 
        ?disabled="${this.isListLayout}"
        on-click="_onLayoutToggle" 
        type="list">
      </paper-icon-button>
      <div class="spacer"></div>
      
      <div>
        <select id="numPerPageM" on-change="_onPageSizeChange">
          <option>50</option>
          <option>20</option>
          <option>10</option>
        </select>
      </div>
      <div style="margin: 0 10px; font-style:italic">per page</div>
    </div> -->
  </div>
</div>

<app-top-active-filters></app-top-active-filters>

<div class="collections" ?hidden="${!this.showCollectionResults}">
  <!--<div ?hidden="${!this.collectionResults.length}">-->
  <!-- <div style="display: none"> -->
  <div>
    <h3>Collections</h3>
    <div style="text-align:center" class="collections-content">
      ${this.collectionResults.map(res => html`
        <dams-collection-card .collection="${res}" data-collectionid="${res.collectionId}" @click=${this._onCollectionClicked}></dams-collection-card>
      `)}
    </div>  
  </div>
</div>

<div ?hidden="${this.showError}">
  <div ?hidden="${this.showLoading}">

    <div class="grid" id="gridLayout" ?hidden="${!this.isGridLayout}">
      ${this.results.map(res => html`
        <dams-item-card .data="${res}" data-itemid="${res.id}" @click=${this._onRecordClicked}></dams-item-card>
      `)}
    </div>

    <div class="masonry" id="layout" ?hidden="${!this.isMosaicLayout}">
      ${this.results.map(res => html`
        <app-search-grid-result .data="${res}" class="item" data-itemid="${res.id}" @click=${this._onRecordClicked}></app-search-grid-result>
      `)}
    </div>

    <div class="list" ?hidden="${!this.isListLayout}">
      ${this.results.map(res => html`
        <app-search-list-result .data="${res}" data-itemid="${res.id}" @click=${this._onRecordClicked}></app-search-list-result>
      `)}
    </div>
  
  </div>
</div>

<div class="error" ?hidden="${!this.showError}">
  <div>${this.errorMsg}</div>
</div>
<div class="loading" ?hidden="${!this.showLoading}">
  <paper-spinner-lite ?active="${this.showLoading}"></paper-spinner-lite>
</div>

<div style="text-align:center" ?hidden="${this.showLoading}">
  <cork-pagination 
    total-results="${this.paginationTotal}" 
    items-per-page="${this.numPerPage}"
    current-index="${this.currentIndex}"
    on-nav="_onPaginationNav">
  </cork-pagination>
</div>

<div ?hidden="${!this.totalOverMaxWindow}" style="text-align: center">Digital Collections limits results to 
  10,000.  Use keywords and/or filters to refine search.
</div>
`;}