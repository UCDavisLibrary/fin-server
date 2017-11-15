import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-tabs/paper-tabs"

import template from "./app-filter-panel.html"
import "./app-facet-filter"

export class AppFilterPanel extends PolymerElement {

  static get properties() {
    return {
      parameters : {
        type : Object,
        value : null,
        observer : '_render'
      }
    };
  }

  static get template() {
    return template;
  }

  _render() {
    if( !this.parameters ) return;

    this.innerHTML = '';
    var ele = document.createElement('app-'+this.parameters.type+'-filter');
    ele.label = this.parameters.label;
    ele.filter = this.parameters.filter;
    ele.isDollar = this.parameters.isDollar;
    
    this.shadowRoot.appendChild(ele);
  }

}

window.customElements.define('app-filter-panel', AppFilterPanel);