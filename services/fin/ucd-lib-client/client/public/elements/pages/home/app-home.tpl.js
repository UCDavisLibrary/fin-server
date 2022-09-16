import { html } from 'lit-element';

import SharedHtml from '../../utils/shared-html';
import { sharedStyles } from "../../styles/shared-styles";

export default function render() { 
return html`
<style>
  ${sharedStyles}
  :host {
    display: block;
    position: relative;
    background: var(--super-light-background-color);

  }
  a {
    text-decoration: none;
  }
  input {
    padding: 15px;
    display: block;
    width: 90%;
    border: 0;
  }

  .about-link-icon {
    position: absolute;
    z-index: 5;    
    top: 25px;
    right: 25px;
  }

  .about-link-icon > iron-icon {
    height: 30px;
    width: 30px;
  }
  .container {    
    padding: 25px 10px;
    background: white;
  }

  .search-box {
    z-index: 5;
    color: var(--inverse-text-color);    
  }

  .search-box .main {
    padding: 20px;
    background-color: rgba(0, 38, 85, .8);    
  }

  .search-box .main h1 {
    margin: 5px 0;
    line-height: 2.0rem;
  }

  .search-box .footer {  
    padding: 10px 20px;
    color: white;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: normal;
    line-height: 1.0rem;
    background-color: rgba(51, 83, 121, .8);
  }

  .search-box .footer a {
    color: var(--default-secondary-color);
  }

  .featured-collections {
    background-color: var(--color-aggie-blue-20);
    padding: var(--spacing-md) 0;
  }

  .featured-collections h1 {
    text-align: center;
    color: var(--color-aggie-blue);
  }

  .featured-collections .card-grid {
    margin: 0 auto;
    padding: 20px 0;
  }

  .card-grid {
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }


  iron-icon.search-icon {
    color: var(--default-primary-color);
  }

  iron-icon.info {
    fill: white;
  }

  #sample {
    background: linear-gradient(0deg, rgba(111,207,235,0.8), rgba(2, 40, 81, 0.8) 100%);
    background-size: cover;
    background-position: center;
    height: auto;
    padding:2rem 4rem 0 4rem;

  }

  #options {
    height: 150px;
    background-color:white;
    width: auto;
    padding: 2rem 4rem;
    vertical-align: middle;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #option{
    display: inline-block;
  }

  #top-header{
    display: inline-block;
    width: 100%;
  }
  #subtext{
    color:white;
    text-decoration: underline;
  }
  #watercolor{
    background-color:transparent;
    height: 8rem;
    margin-left:0px;
  }
  .about{
    text-align: center;
    background-color: var(--color-aggie-blue-40);
  }
  section {
    padding: 40px;
  }
  
  .featured-grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: transparent;
    padding: 10px;
  }
  .featured-grid-item {
    padding: 20px;
    font-size: 30px;
    text-align:left;
    
  }
  .about-grid-container {
    display: grid;
    grid-template-columns: 55% 45%;
    background-color: transparent;
    padding: 10px;
  }
  .about-grid-item {
    padding: 20px;
    font-size: 30px;
    
  }
  .collection-grid-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: transparent;
    padding: 10px;
  }
  .collection-grid-item {
    padding: 20px;
    font-size: 30px;
  }
  .content {
    background-color:pink;
    margin:20px;
    width:fixed;
    padding: 0px 60px;
    text-align: left;
  }
  
  /* STYLES BELOW ARE ACTUALLY USED. NEED TO AUDIT ANYTHING ABOVE */
  [hidden] {
    display: none;
  }
  .hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .hero-top-left img {
    height: 24px;
  }

  .hero-top-right {
    display: inline-flex;
    align-items: center;
    font-weight: var(--fw-extrabold);
    font-size: .82rem;
  }
  .hero-top-right a {
    color: var(--color-white);
  }
  .hero-top-right a:hover {
    color: var(--color-a-hover);
  }
  .hero-top-right .dot {
    margin: 0 20px;
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }
  .hero-main h1 {
    margin-bottom: 20px;
  }
  .hero-main .sub-heading {
    font-weight: var(--fw-p);
    margin-bottom: 40px;
  }
  .hero-main .sub-heading a {
    color: var(--color-dams-secondary);
  }
  .hero-main .sub-heading a:hover, .hero-main .sub-heading a:focus {
    color: var(--color-a-hover);
  }
  .hero-main app-search-box {
    max-width: 400px;
    margin-bottom: 20px;
  }
  .hero-main .sub-search {
    color: var(--color-white);
    font-weight: var(--fw-extrabold);
    font-size: .82rem;
    margin-bottom: 60px;
  }
  .hero-main .sub-search a {
    color: var(--color-white);
    text-decoration: underline;
  }
  .browse-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: var(--color-white);
  }
  .browse-buttons > div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .browse-buttons app-icons {
    margin: 0 10px;
  }
  .recent{
    background-color: var(--color-white);
  }
  .recent h2 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 0;
  }
  .card-trio {
    display: grid;
    grid-template-columns: auto;
    grid-gap: var(--spacing-sm);
  }
  .card-trio dams-collection-card {
    margin-bottom: var(--spacing-default);
  }
  .featured {
    background-color: var(--color-aggie-blue-20);
  }
  .featured h1 {
    margin-bottom: var(--spacing-default);
    text-align: center;
    margin-top: 0;
  }
  .featured dams-watercolor-overlay {
    height: 100px;
  }
  dams-highlighted-collection {
    margin: 40px 0;
  }
  .fg-header {
    display: grid;
    grid-gap: var(--spacing-default);
    grid-template-columns: auto;
    margin-bottom: var(--spacing-sm);
  }
  .fg-header h3 {
    margin: 0;
  }
  .featured-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--spacing-default) 0;
  }
  @media (min-width: 480px) {
    .featured-group .card-trio {
      margin-right: var(--spacing-sm);
      margin-left: var(--spacing-sm);
    }
  }
  @media (min-width: 767px) {
    .hero-top {
      margin-bottom: 60px;
      margin-top: 40px;
    }
    .hero-top-left img {
      height: 30px;
    }
    .card-trio {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .fg-header {
      grid-template-columns: 33% 66%;
    }
    .featured-group .card-trio {
      margin-right: 0;
      margin-left: 0;
    }
    .fg-header h3 {
      text-align: center;
    }
  }

  @media (min-width: 1060px) {
    .hero-top {
      margin-bottom: 80px;
      margin-top: 40px;
    }
    .hero-main .sub-search {
      margin-bottom: 80px;
    }
  }

  @media (min-width: 1601px) {
    .hero-top {
      margin-bottom: 200px;
      margin-top: 40px;
    }
    .hero-main .sub-search {
      margin-bottom: 150px;
    }
  }


</style>

<dams-hero .srcOptions="${Object.keys(this.heroImgOptions)}" @src-change="${this._onHeroChange}">
  <div class="hero-content">
    <div class="hero-top site-frame">
      <div class="hero-top-left"><a href="https://ucdavis.edu"><img src="/images/logos/ucdavis_logo_gold.png"></a></div>
      <div class="hero-top-right">
        <a href="/about">About</a>
        <span class="dot"></span>
        <a href="#">FAQ</a>
      </div>
    </div>
    <div class="hero-main site-frame">
      <h1 class="color-light">Digital Collections</h1>
      <div class="sub-heading h4 color-light">Explore digitized items from the <a href="">UC Davis Library</a> collections.</div>
      <app-search-box 
        id="searchBox" 
        @search="${this._onSearch}" 
        placeholder="search">
        <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
      </app-search-box>
      <div class="sub-search">
        Featured Image: <a href="${this.heroImgCurrent.itemLink}">${this.heroImgCurrent.itemName}</a> | 
        <a href="${this.heroImgCurrent.collectionLink}">${this.heroImgCurrent.collectionName}</a>
      </div>
    </div>
  </div>
</dams-hero>

<section class="browse-buttons site-frame">
  <div>
    <app-icons 
      id="option" 
      icon="iron-archive" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Collections</div>
    </app-icons>

    <a href="/search">
      <app-icons id="option" 
        icon="iron-dashboard" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">All Items</div>
      </app-icons>
    </a>

    <a href="/browse/creator">
      <app-icons id="option" 
        icon="iron-account-box" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Creators</div>
      </app-icons>
    </a>
  </div>
  <div>
    <a href="/browse/format">
      <app-icons id="option" 
        icon="iron-create" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Formats</div>
      </app-icons>
    </a>

    <a href="/browse/subject">
      <app-icons id="option" 
        icon="fin-search" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Subjects</div>
      </app-icons>
    </a>

  </div>
</section>

<section class="recent site-frame" ?hidden="${this.recentCollections.length === 0}">
  <h2>Recently Digitized<br><span class="fw-light">Collections</span></h2> 
  ${ SharedHtml.headerDots() } 
  <div class="card-trio">
  ${this.recentCollections.map((collection) => 
      html`
      <dams-collection-card .collection="${collection}"></dams-collection-card>
      `
      )}
    
  </div>
</section>

${this.featuredCollectionsCt > 0 ? html`

  <section class="featured site-frame">
    <h1>Featured Collections</h1>
    <div style="text-align:center;">
      <dams-watercolor-overlay 
          overlay-template="stars">
      </dams-watercolor-overlay>
    </div>
    <dams-highlighted-collection .collection="${this.featuredCollections[0]}"></dams-highlighted-collection>
    <div class="featured-group" ?hidden="${!this.showCollectionGroup}">
      <div class="fg-header">
        <h3>${this.textTrio.label}</h3>
        <div>${this.textTrio.text}</div>
      </div>
      <div class="card-trio">
        ${[1,2,3].map(i => html`
          ${this.featuredCollectionsCt > i ? html`
            <dams-collection-card .collection="${this.featuredCollections[i]}"></dams-collection-card>
          ` : html``}
        `)}
      </div>
      <div class="featured-more"><a href="/collections">Placeholder for button</a></div>
    </div>
  </section>

` : html``}


<!--
<div id="sample">
  <div id="top-header">  
    <img style="all:unset; height: 1.5rem; " src="/images/ucd-lib-logo-white.png">
    <p style="all:unset; float:right; color:white; font-weight:var(--fw-extra-bold); float:right">About <span>&#9679;</span> FAQ</p>
  </div>

  <h1 style="color:var(--color-h1-light); margin-top:4rem; margin-bottom:1rem;" >Digital Collections</h1>
  <h4 style="color:var(--color-h4-light); font-weight:var(--fw-regular); margin-top:0;" >Explore digitized items from the <a style="text-decoration:underline;color:var(--color-aggie-gold);">UC Davis Library</a> collections.</h4>

  <app-search-box 
    id="searchBox" 
    @search="${this._onSearch}" 
    placeholder="search">
    <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
  </app-search-box>

  <div style="color:white; margin-top:.75rem; margin-bottom: 2rem; font-size:.75rem;font-weight: 800;">
    Featured Image:  <a id="subtext">Annual Winter Sale 1952</a>  |  <a id="subtext">Sherry Lehmann Wine Catalogs</a>
  </div>
  <div id="watercolor"></div>
</div>
-->

<!--
<div id="options">
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>

  <a href="/search">
    <app-icons id="option" 
      icon="iron-dashboard" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">All Items</div>
    </app-icons>
  </a>
  
  <a href="/browse/creator">
    <app-icons id="option" 
      icon="iron-account-box" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Creators</div>
    </app-icons>
  </a>

  <a href="/browse/format">
    <app-icons id="option" 
      icon="iron-create" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Formats</div>
    </app-icons>
  </a>

  <a href="/browse/subject">
    <app-icons id="option" 
      icon="fin-search" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Subjects</div>
    </app-icons>
  </a>
  </div>
-->

<!--
<section class="recent">
  <h2 style="margin-bottom:0;">Recently Digitized</h2> 
  <h2 style="margin-bottom:0; margin-top:0; font-weight:var(--fw-regular)">Collections</h2>
  ${ SharedHtml.headerDots() }
  <div class="collection-grid-container">
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
  </div>

</section>
-->

<!--
<section class="about">
  <div class="about-grid-container">
    <div class="grid-item">
      <div class="content">
      </div>
    </div>
    <div class="grid-item">
      <div class="content"> 
        <h2 style="margin:0; ">About</h2>
        <h1 style="margin:0; font-weight:var(--fw-regular)">Digital Collections</h1>
        <div style="height:10px;float:left;">${ SharedHtml.headerDots() }         </div>
        <br />
        <br />

        <p style="margin:0; ">The UC Davis Digital Collections is a locally developed digital 
                              repository that was designed to store and manage the digital assets
                              of UC Davis.  These Digital Collections are intended to increase 
                              access to previously undiscoverable digital assets held by the 
                              University Library. </p>

      </div>
    </div>
  </div>
</section>
-->



`;}