import { html } from 'lit';

import SharedHtml from '../../utils/shared-html';
import { sharedStyles } from "../../styles/shared-styles";
import priorityLinksCss from "@ucd-lib/theme-sass/4_component/_priority-links.css";
import iconsCss from "@ucd-lib/theme-sass/4_component/_icons.css";
import categoryBrandCss from "@ucd-lib/theme-sass/4_component/_category-brand.css";
import verticalLinksCss from "@ucd-lib/theme-sass/4_component/_vertical-link.css";
import mobileBarCss from "@ucd-lib/theme-sass/4_component/_mobile-bar.css";
import navToggleCss from "@ucd-lib/theme-sass/4_component/_nav-toggle.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";
import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";

export default function render() { 
return html`
<style>
  ${sharedStyles}
  ${priorityLinksCss}
  ${iconsCss}
  ${categoryBrandCss}
  ${verticalLinksCss}
  ${mobileBarCss}
  ${navToggleCss}
  ${headingsCss}
  ${linksCss}
  ${buttonsCss}

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

  .vertical-link--circle .vertical-link__figure:after {
    opacity: 1;
  }

  .about-collections {
    display: flex;
    height: 35rem;
    background-color: var(--color-aggie-blue-80);
    background-image: url(/images/watercolors/watercolor-background-ucd-blue-20opacity.png);
    background-position: center;
    padding: 2rem 0 2rem;
  }
  
  /* STYLES BELOW ARE ACTUALLY USED. NEED TO AUDIT ANYTHING ABOVE */
  [hidden] {
    display: none;
  }
  .hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 20px;
  }
  .hero-top-left img {
    height: 1.58rem;
  }

  .hero-top-right {
    display: inline-flex;
    align-items: center;
    font-weight: var(--fw-extrabold);
    font-weight: bold;
    font-size: 1rem;
    /* text-transform: uppercase; */
  }
  .hero-top-right a {
    color: var(--color-white);
  }
  .hero-top-right a:hover {
    color: var(--color-dams-secondary);
  }
  .hero-top-right .dot {
    margin: 0 1rem;
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }
  .hero-main h1 {
    margin-bottom: 1rem;
  }
  .hero-main .sub-heading {
    font-weight: var(--fw-p);
    margin-bottom: 3rem;
  }
  /* .hero-main .sub-heading a {
    color: var(--color-dams-secondary);
  }
  .hero-main .sub-heading a:hover, .hero-main .sub-heading a:focus {
    color: var(--color-a-hover);
  } */
  .hero-main app-search-box {
    max-width: 400px;
    margin-bottom: 1rem;
  }
  .hero-main .sub-search {
    color: var(--color-white);
    font-weight: var(--fw-extrabold);
    font-size: .875rem;
    margin-bottom: 2rem;
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
    padding-bottom: 4rem;
    background-color: var(--color-white);
  }
  .browse-buttons > div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 75%;
  }
  .browse-buttons app-icons {
    margin: 0 10px;
  }
  /*
  .browse-buttons .vertical-link__figure:hover {
    color: var(--color-aggie-gold);
  }
  */
  .browse-buttons .vertical-link__title {
    color: var(--color-aggie-blue);
    text-transform: capitalize;
  }
  .browse-buttons .vertical-link__figure:before,
  .browse-buttons .vertical-link__figure:after {
    box-sizing: border-box;
  }
  .browse-buttons .vertical-link--circle .vertical-link__figure {
    background-color: var(--color-white);
    margin-bottom: 0.75rem;
  }
  
  .browse-buttons .vertical-link--circle .vertical-link__figure:hover {
    background-color: var(--color-aggie-gold);
  }
  @media (max-width: 1070px) {
    .browse-buttons > div {
      width: 100%;
    }
  }

  /* .vertical-link--circle .vertical-link__figure {
    width: 5rem;
    height: 5rem;  
  } */
  .recent{
    background-color: var(--color-white);
  }
  .recent h1 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 0;
  }
  .fw-light {
    font-weight: 200;
    font-style: normal;
    margin: 0.75rem 0 0.25rem;
    padding: 0;
    line-height: 1.2;
  }
  .card-2-4 {
    width: 75%;
    margin: 0 auto;
  }
  .card-2,
  .card-2-4,
  .card-trio,
  .card-5-plus {
    display: grid;
    grid-template-columns: auto;
    grid-gap: var(--spacing-sm);
  }
  .card-2 dams-collection-card,
  .card-2-4 dams-collection-card,
  .card-trio dams-collection-card,
  .card-5-plus dams-collection-card {
    margin-bottom: var(--spacing-default);
  }
  .featured {
    background-color: var(--color-aggie-blue-20);
    padding-top: 4rem;
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
  .splat-stars {
    width: 9rem;
  }

  .btn--alt {
    padding-top: 0;
    padding-bottom: 0;
  }

  .featured-group {
    padding-bottom: 2rem;
  }

  @media (min-width: 480px) {
    .featured-group .card-trio {
      margin-right: var(--spacing-sm);
      margin-left: var(--spacing-sm);
    }
  }
  @media (min-width: 767px) {
    .hero-top {
      margin-top: 40px;
    }
    .card-2,
    .card-2-4 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .card-trio,
    .card-5-plus {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
    .fg-header {
      grid-template-columns: 37% 55%;
      padding: 1rem 0;
    }
    .featured-group .card-trio {
      margin-right: 0;
      margin-left: 0;
    }
    .fg-header h3 {
      text-align: center;
    }
  }
  .featured-more a.btn--primary {
    color: var(--color-aggie-blue);
    padding-top: 0;
    padding-bottom: 0;
  }

  .tree-illustration {
    /* padding: 3rem; */
  }

  .tree-illustration img {
    float: right;
    padding-right: 1rem;
  }

  .about-content .header-dots {
    margin: 0;
    align-items: start;
    padding-bottom: 1rem;
  }

  .about-content h1 {
    margin-bottom: .3rem;
  }

  .about-content {
    /* flex-grow: 3; */
    padding-right: 2rem;
  }

  .about-content h1,
  .about-content p {
    color: var(--color-white);
  }

  .btn--more-about {
    background-color: var(--color-white);
    color: var(--color-aggie-blue-80);
  }
  .btn--more-about:visited,
  .btn--more-about:before {
    color: var(--color-aggie-blue-80);
  }

  .btn--more-about:hover {
    color: var(--color-aggie-blue-80);
  }
  
  /*
  .mobile-bar {
    display: flex;
    align-items: center;
    overflow: hidden;
    min-height: 3.25rem;
    background-color: #022851; /* var(--color-aggie-blue); 
  }

  .mobile-bar__nav-toggle {
    position: relative;
    display: flex;
    flex-shrink: 0;
    margin-right: 1rem;
    background-color: #13639e; /* var(--color-aggie-blue-80); 
  }
  */

  @media (min-width: 1060px) {
    .hero-top {
      margin-top: 40px;
    }
  }

  @media (min-width: 1601px) {
    .hero-top {
      margin-top: 40px;
    }
  }

  @media (min-width: 520px) {
    ucd-theme-header {
      display: none;
    }
  }

  @media (max-width: 519px) {
    .hero-top {
      display: none;
    }
  }

</style>

<dams-hero .srcOptions="${Object.keys(this.heroImgOptions)}" @src-change="${this._onHeroChange}">
  <div class="hero-content">

    <ucd-theme-header>
      <ucd-theme-primary-nav>
        <a href=/browse>Browse</a>
        <a href="/about">About</a>
        <a href="#">FAQ</a>
      </ucd-theme-primary-nav>
    </ucd-theme-header>

    <div class="hero-top site-frame">
      <div class="hero-top-left"><a href="https://ucdavis.edu"><img src="/images/logos/ucdavis_logo_gold.png"></a></div>
      <div class="hero-top-right">
        <a href="/browse">Browse</a>
        <span class="dot"></span>  
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
        Featured Image: <!--<a href="${this.heroImgCurrent.itemLink}">${this.heroImgCurrent.itemName}</a> | 
        <a href="${this.heroImgCurrent.collectionLink}">${this.heroImgCurrent.collectionName}</a>-->
      </div>
    </div>
  </div>
  
</dams-hero>
<!-- <img src="/images/defaults/annual-winter-sale1952.jpg"> -->

<section class="browse-buttons site-frame">
  <div class="priority-links">
    <div class="priority-links__item">
      <a class="vertical-link vertical-link--circle category-brand--secondary" href="/browse/collection">
        <div class="vertical-link__figure">
          <!-- <ucdlib-icon class="vertical-link__image" src="http://localhost:3000/images/ucd-logo.svg"></ucdlib-icon> -->
          <!-- <ucdlib-icon class="vertical-link__image" icon="ucd-public:fa-box-archive"></ucdlib-icon>  -->
          <ucdlib-icon class="vertical-link__image" icon="ucdlib-dams:fa-box-archive"></ucdlib-icon>
        </div>
        <div class="vertical-link__title">Collections</div>
      </a>
    </div>
    <div class="priority-links__item">
      <a class="vertical-link vertical-link--circle category-brand--secondary" href="/search">
        <div class="vertical-link__figure">
          <ucdlib-icon class="vertical-link__image" icon="ucdlib-dams:photo-stack"></ucdlib-icon>
        </div>
        <div class="vertical-link__title">All Items</div>
      </a>
    </div>
    <div class="priority-links__item">
      <a class="vertical-link vertical-link--circle category-brand--secondary" href="/browse/creator">
        <div class="vertical-link__figure">
          <ucdlib-icon class="vertical-link__image" icon="ucdlib-dams:fa-wand-magic-sparkles"></ucdlib-icon>
        </div>
        <div class="vertical-link__title">Creators</div>
      </a>
    </div>
    <div class="priority-links__item">
      <a class="vertical-link vertical-link--circle category-brand--secondary" href="/browse/format">
        <div class="vertical-link__figure">
          <ucdlib-icon class="vertical-link__image" icon="ucdlib-dams:fa-photo-film"></ucdlib-icon>
        </div>
        <div class="vertical-link__title">Formats</div>
      </a>
    </div>
    <div class="priority-links__item">
      <a class="vertical-link vertical-link--circle category-brand--secondary" href="/browse/subject">
        <div class="vertical-link__figure">
          <ucdlib-icon class="vertical-link__image" icon="ucdlib-dams:fa-star"></ucdlib-icon>
        </div>
        <div class="vertical-link__title">Subjects</div>
      </a>
    </div>
  </div>

</section>

<!-- <section class="recent site-frame" ?hidden="${this.recentCollections.length === 0}"> -->
<section class="recent site-frame">
  <h1>Recently Digitized<br><span class="fw-light">Collections</span></h1> 
  ${ SharedHtml.headerDots() } 



  <!-- TODO assign classes based on this.recentCollections.length -->
  <!--
  <h2>Layout 2 or 4</h2>
  <div class="card-2-4">
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>

  </div>
  
  <h2>Layout exactly 3</h2>-->

  <!-- <div class="card-trio">
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>  
  </div> -->

  <!-- TODO show/hide previous card-trio based on screen resolution -->
  <!--
  <div>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <div class="card-2">
      <dams-collection-card .collection="${{}}"></dams-collection-card>
      <dams-collection-card .collection="${{}}"></dams-collection-card>  
    </div>
  </div>
  
  <h2>Layout 5+</h2>
  <div class="card-5-plus">
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>  
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-collection-card .collection="${{}}"></dams-collection-card>
  </div>
  -->
  

  <div class="card-trio">
    <dams-collection-card .collection="${{}}"></dams-collection-card>
    <dams-item-card .collection="${{}}"></dams-item-card>


  <!-- TODO figure out where to source the collections -->
  ${this.recentCollections.map((collection) => 
      html`
      <dams-collection-card .collection="${collection}"></dams-collection-card>
      `
      )}
      <dams-collection-card .collection="${this.recentCollections[0]}"></dams-collection-card>
  </div>
</section>

${this.featuredCollectionsCt > 0 || 1 == 1 ? html`

  <section class="featured site-frame">
    <h1>Featured <span class="fw-light">Collections</span></h1>
    <div style="text-align:center;">
      <img class="splat-stars" src="/images/watercolors/watercolor-splat-homepage-stars.png">
      <!-- <dams-watercolor-overlay 
          overlay-template="stars">
      </dams-watercolor-overlay> -->
    </div>
    <dams-highlighted-collection .collection="${this.featuredCollections[0]}"></dams-highlighted-collection>


    <!-- <div class="featured-group" ?hidden="${!this.showCollectionGroup}"> -->
    <div class="featured-group">
      <div class="fg-header">
        <!-- <h3>${this.textTrio.label}</h3>
        <div>${this.textTrio.text}</div> -->
        <h3 class="heading--primary">The Greatest<br>Wine Library</h3>
        <div>
          Our wine collections support UC Davis' top-ranked viticulture and enology
          program and visiting scholors around the world including 30,000 books in 
          more than 50 languages, rare books and manuscripts, historic records and
          research data, the papers of leading writers on California wine, and materials in
          every medium, from vintage wine labels to videos. The featured items below are a 
          small taste of these extensive collections.
        </div>
      </div>
      <div class="card-trio">
        ${[1,2,3].map(i => html`
          ${this.featuredCollectionsCt > i || 1 == 1? html`
            <dams-collection-card .collection="${this.featuredCollections[i] || {}}"></dams-collection-card>
          ` : html``}
        `)}
      </div>
      <div class="featured-more">
        <a href="/collections" class="btn btn--primary">Browse all collections</a>
      
      </div>
    </div>
  </section>

  <section class="about-collections">
    <div class="tree-illustration">
      <img src="/images/tree-bike-illustration.png" width="80%" />
    </div>
    <div class="about-content">
      <h1>About<br><span class="fw-light">Digital Collections</span></h1> 
      ${ SharedHtml.headerDots() }
      <p>
        The UC Davis Digital Collections is a locally developed repository designed 
        to store and manage the digital assets of UC Davis Library, increasing access
        to previously undiscoverable digital assets.
      </p>
      <a href="/collections" class="btn--more-about btn--alt btn--round">More about this project</a>
    </div>
  </section>

` : html``}

`;}