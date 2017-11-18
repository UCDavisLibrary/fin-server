import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-tabs/paper-tabs"
import "@ucd-lib/cork-toggle-panel/cork-toggle-panel"

import template from "./app-filter-panel.html"
import "./app-facet-filter"

export class AppFilterPanel extends PolymerElement {

  static get properties() {
    return {
      filter : {
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
    if( !this.filter ) return;

    this.innerHTML = '';
    var ele = document.createElement('app-'+this.filter.type+'-filter');
    ele.label = this.filter.label;
    ele.filter = this.filter.filter;
    ele.isDollar = this.filter.isDollar;
    
    this.$.filters.appendChild(ele);
  }

}

window.customElements.define('app-filter-panel', AppFilterPanel);