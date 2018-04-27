import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-checkbox/paper-checkbox"

import template from "./app-normal-checkbox.html"

export class AppNormalCheckbox extends PolymerElement {
  
  static get properties() {
    return {
      value : {
        type : String,
        value : ''
      },
      label : {
        type : String,
        value : ''
      },
      labelMap : {
        type : Object,
        value : () => {}
      },
      realLabel: {
        type: String,
        computed: '_realLabel(value, label)'
      },
      checked : {
        type : Boolean,
        value : false,
        notify: true,
        reflectToAttribute : true
      },
      disabled : {
        type : Boolean,
        value : false,
      }
    };
  }

  static get template() {
    return template;
  }

  /**
   * @method _realLabel
   * @description render label
   * 
   * @param {String} value 
   * @param {String} label 
   */
  _realLabel(value, label) {
    return this._getLabel();
  }

  _getLabel() {
    if( this.labelMap && this.labelMap[this.value] ) {
      return this.labelMap[this.value];
    }
    return this.value;
  }

  /**
   * @method _onClick
   * @description called when div wrapper is clicked
   * 
   * TODO: add aria checkbox role
   */
  _onClick() {
    if( this.disabled ) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {bubbles: true, composed: true}));
  }

}

window.customElements.define('app-normal-checkbox', AppNormalCheckbox);