import {PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-about.html"
import "../../utils/app-header-colorbar"

import AppStateInterface from "../../interfaces/AppStateInterface"

class AppAbout extends Mixin(PolymerElement) 
      .with(EventInterface, AppStateInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
    
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
  }
  
}

customElements.define('app-about', AppAbout);