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

// sets globals
import {Mixin, EventInterface} from "@ucd-lib/cork-app-utils";

import "./pages/home/app-home"
import "./pages/search/app-search"
import "./app-footer"
import "./utils/app-header-colorbar"

import '../lib'
import "./shared-styles"

import AppStateInterface from "./interfaces/AppStateInterface"

import template from "./fin-app.html";

// allow for lit-html style stuff
window.html = (str) => str[0];

export class FinApp extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface) {

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

  _onAppStateUpdate(e) {
    this.page = e.location.path[0] || 'home';
  }
}

customElements.define('fin-app', FinApp);