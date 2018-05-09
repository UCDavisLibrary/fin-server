import {PolymerElement} from "@polymer/polymer/polymer-element"
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
        value : null,
        observer : '_onLabelMapUpdate'
      },
      labelMapType : {
        type : String,
        value : null
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
      },

      ariaChecked : {
        type : String,
        reflectToAttribute : true,
        computed: '_computeAriaChecked(checked)'
      },
      ariaDisabled : {
        type : String,
        reflectToAttribute : true,
        computed: '_computeAriaDisabled(disabled)'
      },
      role : {
        type : String,
        value : 'checkbox',
        reflectToAttribute : true
      },
      tabindex : {
        type : Number,
        computed: '_computeTabIndex(disabled)',
        reflectToAttribute : true
      }
    };
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  constructor() {
    super();
    this.addEventListener('click', e => this._onClick(e));
    this.addEventListener('keyup', e => {
      if( e.which !== 13 ) return;
      this._onClick(e)
    });
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

  /**
   * @method _computeAriaChecked
   * @description Bound to 'checked' property.  set aria-checked value
   */
  _computeAriaChecked() {
    return this.checked ? 'true' : 'false';
  }

  /**
   * @method _computeAriaDisabled
   * @description Bound to 'disabled' property.  set aria-disabled value
   */
  _computeAriaDisabled() {
    return this.disabled ? 'true' : 'false';
  }

  /**
   * @method _computeTabIndex
   * @description Bound to 'disabled' property.  set tabindex value
   */
  _computeTabIndex() {
    return this.disabled ? -1 : 0;
  }

  /**
   * @method _getLabel
   * @description return label for a value
   */
  _getLabel() {
    if( this.labelMapType === null ) this._onLabelMapUpdate();
    if( !this.labelMapType ) return this.value;
    
    if( this.labelMapType === 'object' && this.labelMap[this.value] ) {
      return this.labelMap[this.value];
    } else if( this.labelMapType === 'function' ) {
      return this.labelMap(this.value);
    }

    return this.value;
  }

  /**
   * @method _onLabelMapUpdate
   * @description bound to 'labelMap' property observer.  set the 
   * labelMapType property
   */
  _onLabelMapUpdate() {
    this.labelMapType = '';
    if( !this.labelMap ) return;
    this.labelMapType = typeof this.labelMap;
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