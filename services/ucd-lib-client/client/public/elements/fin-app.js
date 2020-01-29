import {PolymerElement, html} from "@polymer/polymer"

// polymer elements
import "@polymer/paper-button/paper-button"
import "@polymer/iron-pages/iron-pages"
import "@polymer/iron-icons/iron-icons"
import "@polymer/iron-icons/social-icons"
import "@polymer/iron-iconset-svg/iron-iconset-svg"
import "@ucd-lib/fin-icons"

// sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils";

// styles
import "./styles/style-properties"
import "./styles/shared-styles"

// main library
import '../lib'

// app elements
import "./pages/search/app-search-header"
import "./pages/search/app-search-breadcrumb"
import "./app-footer"
import "./utils/app-header-colorbar"

import AppStateInterface from "./interfaces/AppStateInterface"
import AuthInterface from "./interfaces/AuthInterface"
import CollectionInterface from "./interfaces/CollectionInterface"
import RecordInterface from "./interfaces/RecordInterface"

import template from "./fin-app.html";

export class FinApp extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, AuthInterface, CollectionInterface, RecordInterface) {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      page : {
        type : String,
        value : 'loading'
      },
      appRoutes : {
        type : Array,
        value : () => APP_CONFIG.appRoutes
      },
      showSearchHeader : {
        type : Boolean,
        value : false
      },
      showBreadcrumb : {
        type : Boolean,
        value : false
      },
      drawerOpen : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;

    this.SEARCH_HEADER_PAGES = ['about', 'record', 'search'];
    this.BREADCRUMB_PAGES = ['record', 'search']

    this.loadedPages = {};
  }

  ready() {
    let loadingEle = document.querySelector('#loading');
    if( loadingEle ) document.body.removeChild(loadingEle);

    super.ready();

    // set initial user state
    this.AuthModel.store.setUser(APP_CONFIG.user);
  }

  /**
   * @method _onAppStateUpdate
   * @description AppStateInterface
   */
  async _onAppStateUpdate(e) {
    this.drawerOpen = e.filtersDrawerOpen ? true : false;

    if( e.location.page === this.page ) return;

    this.showBreadcrumb = this.BREADCRUMB_PAGES.includes(e.location.page);
    this.showSearchHeader = this.SEARCH_HEADER_PAGES.includes(e.location.page);

    this.appState = e;
    window.scrollTo(0, 0);
    
    let page = e.location.page;
    if( !this.loadedPages[page] ) {
      this.page = 'loading';
      this.loadedPages[page] = this.loadPage(page);
    }
    await this.loadedPages[page];

    this.page = page;
  }

  /**
   * @method loadPage
   * @description code splitting done here.  dynamic import a page based on route
   * 
   * @param {String} page page to load
   */
  loadPage(page) {
    if( page === 'home' ) {
      return import(/* webpackChunkName: "page-home" */ "./pages/home/app-home")
    } else if( page === 'search' ) {
      return import(/* webpackChunkName: "page-search" */ "./pages/search/app-search")
    } else if( page === 'record' ) {
      return import(/* webpackChunkName: "page-record" */ "./pages/record/app-record")
    } else if( page === 'about' ) {
      return import(/* webpackChunkName: "page-about" */ "./pages/about/app-about")
    }
  }

  /**
   * @method _toggleDrawer
   * @description toggles the drawer state.  Listens to 
   * toggle-drawer event from app-search-results-panel
   */
  _toggleDrawer() {
    this.AppStateModel.set({filtersDrawerOpen: !this.drawerOpen});
  }


  /**
   * @method _onRecordSearchUpdate
   * @description RecordInterface, fired when search document updates.
   * used to set the window url
   * 
   */
  // _onRecordSearchUpdate(e) {
  //   if( this.appState.location.path[0] === 'collection' ) return;

  //   let path = this._searchDocumentToUrl(e.searchDocument, true);
  //   if( path.match(/\/collection/) ) {
  //     this._setWindowLocation(path);
  //   } else {
  //     this._setWindowLocation('/search/'+path);
  //   }
    
  // }
}

customElements.define('fin-app', FinApp);