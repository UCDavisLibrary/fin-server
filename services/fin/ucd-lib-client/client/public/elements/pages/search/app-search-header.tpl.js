import { html } from 'lit';

export default function render() {
return html`
<style>
  app-auth-header {
    margin-left: 10px;
  }
  
  fin-search-box {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    max-width: 525px;
  }

  .layout {
    width: 100%;
    align-items: center;
  }
  
  h2 {
    margin: 0;
    white-space: nowrap;
  }
  h2 a {
    color: var(--default-secondary-color);
    text-decoration: none;
  }
  h2 a:visited {
    color: var(--default-secondary-color);
    text-decoration: none;
  }

  img {
    height: 50px;
  }

  .logo, h2 {
    padding-right: 20px;
    display: none;
  }

  .filler {
    flex: .25;
    display: none;
  }

  .logo-sm {
    margin-right: 10px;
  }

  iron-icon.search-icon {
    color: var(--default-primary-color);
  }

  @media( min-width: 700px ) {
    .logo {
      display: block;
    }
    .logo-sm {
      display: none;
    }
  }

  @media( min-width: 815px ) {
    h2 {
      display: block;
    }
  }

  @media( min-width: 1100px ) {
    .filler {
      display: block;
    }
  }
  #options {
    height: 150px;
    background-color:white;
    width: 100%;
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

  .searchContainer{
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    background-color: var(--color-aggie-blue-30);
  }
  #filter-box{
    width:100%;
    text-align:center;
    align-items:center;
    background-color: var(--color-aggie-blue-30);
    padding-bottom: 1rem;
  }
  .site-name-search {
    display: none;
  }
  @media( max-width: 754px ) {
   .searchContainer {
      padding-top: 1rem;
    }
    .site-name-search {
      display: block;
      text-align: center;
      margin-bottom: 1rem;
    }
    app-search-box {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media( max-width: 450px ) {
    app-search-box {
      width: 60%;
      margin: 0 auto;
    }
  }
</style>

<div class="layout">
  <app-nav-bar id="foo" choices="${this.navBarChoices}"></app-nav-bar> 
</div>

<div class="searchContainer">
  <div style="margin: 1rem auto 0;">
    <h4 class="site-name-search">Digital Collections</h4>
    <app-search-box 
      id="searchBox" 
      @search="${this._onSearch}" 
      on-browse="${this._onBrowse}"
      placeholder="search digital collections">
      <!-- <button class="search-icon" slot="button-content"></button> -->
      <!-- <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon> -->
    </app-search-box>
  </div>
  <br />
</div>
<div id="filter-box">

</div>

`;}