import { html } from 'lit';
export default function render() {
  return html`
<style include="shared-styles">
  :host {
    display: block;
    /* background: var(--default-primary-color); */
  }

  [hidden] { display: none !important; }

  #loading {
    width: 100%;
    min-height: 700px;
    height: 75vh;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    background-color: white;
  }

  #loading img {
    animation: showLoading 400ms ease-in;
  }

  @keyframes showLoading {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .footer {
    background-color: var(--color-dams-primary);
    position: absolute;
    left: 0;
    right: 0;
  }

  .mobile-filters-layout {
    display: flex;
  }

  .main-content {
    flex: 1;
  }

  .loading-dots {
    text-align: center;
    z-index: 5;
    color: var(--default-primary-color);
  }

  .dot {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    position: relative;
    font-size: 3.5em;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
  }

  .dot.one { animation-delay: 0.2s; }
  .dot.two { animation-delay: 0.4s; }
  .dot.three { animation-delay: 0.6s; }

  @keyframes showHideDot {
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }

  #drawer-background {
    opacity: .7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: black;
    z-index: 5;
    display: none;
    animation: fadeIn 300ms;
  }

  #drawer {
    position: absolute;
    top: 0;
    left: -335px;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 10;
    transition: left 300ms ease-out;
    background-color: var(--light-background-color);
  }

  #drawer[open] {
    left: 0;
  }

  #outerDrawer {
    position: relative;
  }

  #drawer-background[open] {
    display: block;
  }

  #drawer app-filters-panel {
    width: 300px;
  }

  @media( min-width: 975px ) {
    #outerDrawer {
      display: none;
    }
  }
</style>

<app-route app-routes="${this.appRoutes}"></app-route>

<app-search-header ?hidden="${!this.showSearchHeader}"></app-search-header>

<div class="mobile-filters-layout">
  <div id="outerDrawer">
    <div id="drawer" ${this.drawerOpen ? 'open' : ''}>
      <app-filters-panel on-toggle-drawer="${this._toggleDrawer}"></app-filters-panel>
    </div>
    <div id="drawer-background" ${this.drawerOpen ? 'open' : ''} on-click="${this._toggleDrawer}"></div>
  </div>

  <div class="main-content">
    <iron-pages selected="${this.page}" attr-for-selected="id" selected-attribute="visible">
      <div id="loading" ?hidden="${this.page}">
        <img src="/images/logos/logo-icon.svg" style="max-width: 128px" />
        <div class="loading-dots">
          <h1 class="dot one">.</h1><h1 class="dot two">.</h1><h1 class="dot three">.</h1>
        </div>
      </div>
      <app-home id="home"></app-home>
      <app-search id="search"></app-search>
      <app-record id="item"></app-record>
      <app-browse id="browse"></app-browse>
      <app-about id="about"></app-about>
      <app-collection id="collection"></app-collection>
      <app-collections id="collections"></app-collections>
      <!--<app-browse-by id="collection" 
        label="Collection" 
        facet-query-name="collection">
        <dams-watercolor-overlay 
          icon="star"
          slot="header-icon">
        </dams-watercolor-overlay>
      </app-browse-by>
      <app-browse-by id="subject" 
        label="Subject" 
        facet-query-name="abouts.raw">
        <dams-watercolor-overlay 
          icon="star"
          slot="header-icon">
        </dams-watercolor-overlay>
      </app-browse-by>
      <app-browse-by id="creator" 
        label="Creator" 
        facet-query-name="creators">
        <dams-watercolor-overlay 
          icon="star"
          slot="header-icon">
        </dams-watercolor-overlay>
      </app-browse-by>
      <app-browse-by id="format" 
        label="Format" 
        facet-query-name="fileFormats">
        <dams-watercolor-overlay 
          icon="star"
          slot="header-icon">
        </dams-watercolor-overlay>
      </app-browse-by>-->
      <app-components id="components"></app-components>
    </iron-pages>
    <div class="footer site-frame">
      <ucdlib-site-footer>
        <ucdlib-site-footer-column header="Digital Collections">
          <ul>
            <li><a href="/#collections">Collections</a></li>
            <li><a href="/search">Items</a></li>
            <li><a href="/about">About Digital Collections</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </ucdlib-site-footer-column>
        <ucdlib-site-footer-column header="Library Info">
          <ul>
            <li><a href="https://library.ucdavis.edu/special-collections/" target="_blank" rel="noopener">Archives and Special Collections</a></li>
            <li><a href="https://library.ucdavis.edu/library/" target="_blank" rel="noopener">Visit the Library</a></li>
            <li><a href="https://library.ucdavis.edu/news/" target="_blank" rel="noopener">Library News</a></li>
            <li><a href="http://give.ucdavis.edu/ULIB" target="_blank" rel="noopener">Give to the Library</a></li>
          </ul>
        </ucdlib-site-footer-column>
        <ucdlib-site-footer-column header="Account">
          <ul>
            <li><app-auth-footer></app-auth-footer></li>
          </ul>
        </ucdlib-site-footer-column>
        <div insert-into="below-address" hidden="${this.showVersion}">
          <div><b>Build Information</b></div>
          <div>${this.appVersion}</div>
          <div>Build Time: ${this.localBuildTime}</div>
          <div>fin-server: ${this.coreTag} @ ${this.coreHash}</div>
          <div>fin-ucd-lib-server: ${this.clientTag} @ ${this.clientHash}</div>
        </div>
      </ucdlib-site-footer>
    </div>
  </div>
</div>
`;}
