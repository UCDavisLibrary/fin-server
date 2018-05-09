import {PolymerElement} from "@polymer/polymer/polymer-element"

import "./app-normal-checkbox"

class AppFacetCheckbox extends PolymerElement {
  
  static get properties() {
    return {
      type : {
        type : String,
        value : ''
      },
      value : {
        type : String,
        value : '',
        observer : '_onValueChange'
      },
      labelMap : {
        type : Object,
        value : () => {}
      },
      checked : {
        type : Boolean,
        value : false,
        notify : true,
        observer : '_onCheckedChange'
      }
    };
  }

  // static get template() {
  //   return ` `;
  // }

  ready() {
    super.ready();

    this.ele = document.createElement('app-normal-checkbox');
    this.ele.label = this._getLabel();
    
    this._setValue();
    if( this.checked ) {
      this.ele.setAttribute('checked', this.checked);
    }

    this.ele.addEventListener('checked-changed', (e) => {
      this.checked = e.detail.value;
    });

    this.appendChild(this.ele);
  }

  _setValue() {
    if( this.value ) {
      this.ele.value = this.value;
      this.ele.label = this._getLabel();
    }
  }

  _getLabel() {
    if( this.labelMap && this.labelMap[this.value] ) {
      return this.labelMap[this.value];
    }
    return this.value;
  }

  _onCheckedChange() {
    if( !this.ele || this.ele.checked === this.checked ) return;
    this.ele.checked = this.checked;
  }

  _onValueChange() {
    if( !this.ele ) return;
    this.ele.setAttribute('value', this.value);
  }

}

window.customElements.define('app-facet-checkbox', AppFacetCheckbox);