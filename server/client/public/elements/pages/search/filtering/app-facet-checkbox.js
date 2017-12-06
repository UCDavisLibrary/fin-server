import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

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
      checked : {
        type : Boolean,
        value : false,
        notify : true,
        observer : '_onCheckedChange'
      }
    };
  }

  static get template() {
    return ' ';
  }

  get labelMap() {
    return {}
  }

  ready() {
    super.ready();

    this.ele = document.createElement('app-normal-checkbox');
    this.ele.label = this.labelMap[this.value] || this.value;
    
    this._setValue();
    if( this.checked ) {
      this.ele.setAttribute('checked', this.checked);
    }

    this.ele.addEventListener('checked-changed', (e) => {
      this.checked = e.detail.value;
    });

    this.shadowRoot.appendChild(this.ele);
  }

  _setValue() {
    if( this.value ) {
      this.ele.value = this.value;
      this.ele.label = this.labelMap[this.value] || this.value;
    }
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