import {PolymerElement, html} from "@polymer/polymer"
import "@polymer/paper-material/paper-material"
import "@polymer/paper-button/paper-button"
import "@polymer/iron-pages/iron-pages"
import "@polymer/iron-icons/iron-icons"
import "@polymer/iron-icons/social-icons"
import "@polymer/iron-iconset-svg/iron-iconset-svg"
import "@ucd-lib/fin-icons/fin-icons"

// sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils";

// styles
import "./styles/style-properties"
import "./styles/shared-styles"

// main library
import '../lib'

// app elements
import "./pages/home/app-home"
import "./pages/search/app-search"
import "./pages/record/app-record"
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
        value : 'home'
      },
      appRoutes : {
        type : Array,
        value : () => APP_CONFIG.appRoutes
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  ready() {
    let loadingEle = document.querySelector('#loading');
    if( loadingEle ) document.body.removeChild(loadingEle);

    super.ready();

    // set initial user state
    this.AuthModel.store.setUser(APP_CONFIG.user);

    this._getCollectionOverview(); // from CollectionInterface
  }

  /**
   * @method _onAppStateUpdate
   * @description AppStateInterface
   */
  _onAppStateUpdate(e) {
    let page = e.location.path ? e.location.path[0] : 'home';
    if( !page ) page = 'home'

    if( page === this.page ) return;
    
    window.scrollTo(0, 0);
    this.page = page;
  }

  /**
   * @method _onRecordSearchUpdate
   * @description RecordInterface, fired when search document updates.
   * used to set the window url
   * 
   */
  _onRecordSearchUpdate(e) {
    this._setWindowLocation('/search/'+this._searchDocumentToUrl(e.searchDocument));
  }
}

customElements.define('fin-app', FinApp);