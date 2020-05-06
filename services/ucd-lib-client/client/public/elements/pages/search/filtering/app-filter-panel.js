  import {PolymerElement} from "@polymer/polymer/polymer-element"
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
      },
      selected : {
        type : Array,
        value : () => []
      }
    };
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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
    ele.includeTypeahead = this.filter.includeTypeahead || false;
    ele.typeaheadField = this.filter.typeaheadField;

    ele.addEventListener('update-visibility', (e) => {
      this.style.display = e.detail.show ? 'block' : 'none';
    });
    ele.addEventListener('add-selected', (e) => {
      let index = this.selected.findIndex(item => item.label === e.detail.label);
      if( index > -1 ) return;
      this.push('selected', e.detail);
    });
    ele.addEventListener('remove-selected', (e) => {
      let index = this.selected.findIndex(item => item.label === e.detail.label);
      if( index === -1 ) return;
      this.splice('selected', index, 1);
    });
    ele.addEventListener('set-selected', (e) => {
      if( e.detail.selected ) {
        this.selected = [e.detail];
      } else {
        this.selected = [];
      }
    });

    this.ele = ele;
    
    this.$.filters.appendChild(ele);
  }

  /**
   * @method toggle
   * @description toggle opened state
   */
  toggle() {
    this.opened = !this.opened;
  }

  /**
   * @method _toggleOpened
   * @description bound to opened observer.  if opened is true,
   * tell the child to resize
   */
  _toggleOpened() {
    if( !this.opened ) return;
    if( this.ele && this.ele.resize ) {
      this.ele.resize();
    }
  }

  /**
   * @method _onToggleClicked
   * @description bound to main label click/keyboard events. Toggle
   * the panel.
   * 
   * @param {Object} e Click/Keyword event
   */
  _onToggleClicked(e) {
    if( e.type === 'keyup' ) { // from keyboard event
      if( e.which !== 13 && e.which !== 32 ) return;
    }

    this.toggle();
  }

  /**
   * @method _onFilterClicked
   * @description called when selected filter is clicked,
   * notify child of click
   */
  _onFilterClicked(e) {
    if( e.type === 'keyup' ) { // from keyboard event
      if( e.which !== 13 ) return;
    }

    this._notifyFilterClicked(e.currentTarget.getAttribute('label'));
  }

  /**
   * @method _onFilterClicked
   * @description notify child of filter click
   */
  _notifyFilterClicked(label) {
    if( !this.ele ) return;
    if( !this.ele.onParentFilterClicked ) return;
    this.ele.onParentFilterClicked(label);
  }

}

window.customElements.define('app-filter-panel', AppFilterPanel);