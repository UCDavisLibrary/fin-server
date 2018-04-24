  import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-tabs/paper-tabs"
import "@ucd-lib/cork-toggle-panel/cork-toggle-panel"

import "./app-range-filter"
import template from "./app-filter-panel.html"
import "./app-facet-filter"

export class AppFilterPanel extends PolymerElement {

  static get properties() {
    return {
      filter : {
        type : Object,
        value : null,
        observer : '_render'
      },
      opened : {
        type : Boolean,
        value : false,
        observer : '_toggleOpened'
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
    ele.ignore = this.filter.ignore;
    ele.valueMap = this.filter.valueMap || {};
    ele.isDollar = this.filter.isDollar;

    ele.addEventListener('update-visibility', (e) => {
      this.style.display = e.detail.show ? 'block' : 'none';
    });

    this.ele = ele;
    
    this.$.filters.appendChild(ele);
  }

  _toggleOpened() {
    if( !this.opened ) return;
    if( this.ele && this.ele.resize ) {
      this.ele.resize();
    }
  }

}

window.customElements.define('app-filter-panel', AppFilterPanel);