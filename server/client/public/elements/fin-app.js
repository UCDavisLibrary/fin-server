import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/app-layout/app-header/app-header"
import "@polymer/app-layout/app-toolbar/app-toolbar"
import "@polymer/app-layout/app-drawer/app-drawer"
import "@polymer/paper-material/paper-material"
import "@polymer/paper-styles/paper-styles"
import "@polymer/paper-button/paper-button"
import "@polymer/iron-pages/iron-pages"

// sets globals
import "./utils/Mixin";
import "./utils/EventMixin"

import "./app-route"
import "./pages/app-search"
import '../lib'
import "./shared-styles"

import AppStateInterface from "./interfaces/AppStateInterface"

import template from "./fin-app.html";


export class FinApp extends Mixin(PolymerElement)
  .with(EventMixin, AppStateInterface) {

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
  }


  _onAppStateUpdate(e) {
    this.page = e.location.path[0] || 'home';
    console.log(e.location);
  }
}

customElements.define('fin-app', FinApp);