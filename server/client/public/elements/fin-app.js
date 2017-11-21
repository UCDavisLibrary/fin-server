import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/app-layout/app-header/app-header"
import "@polymer/app-layout/app-toolbar/app-toolbar"
import "@polymer/app-layout/app-drawer/app-drawer"
import "@polymer/paper-material/paper-material"
import "@polymer/paper-styles/paper-styles"
import "@polymer/paper-button/paper-button"
import "@polymer/iron-pages/iron-pages"
import "@polymer/iron-icons/iron-icons"
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
import "./app-footer"
import "./utils/app-header-colorbar"

import AppStateInterface from "./interfaces/AppStateInterface"
import AuthInterface from "./interfaces/AuthInterface"

import template from "./fin-app.html";

// allow for lit-html style stuff
window.html = (str) => str[0];

export class FinApp extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, AuthInterface) {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return template;
  }

  static get properties() {
    return {
      page : {
        type : String,
        value : 'home'
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  _onAppStateUpdate(e) {
    this.page = e.location.path[0] || 'home';
  }
}

customElements.define('fin-app', FinApp);