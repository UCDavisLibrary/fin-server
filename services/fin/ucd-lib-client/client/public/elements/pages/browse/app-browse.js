import { LitElement} from 'lit';

import render from "./app-browse.tpl.js";

import AppStateInterface from "../../interfaces/AppStateInterface";

class AppBrowse extends Mixin(LitElement) 
      .with(EventInterface, AppStateInterface) {
  
  // static get template() {
  //   let tag = document.createElement('template');
  //   tag.innerHTML = template;
  //   return tag;
  // }

  static get properties() {
    return {
    
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this._injectModel('AppStateModel');
  }
  
}

customElements.define('app-browse', AppBrowse);