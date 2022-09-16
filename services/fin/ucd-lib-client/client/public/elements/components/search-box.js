import { LitElement} from 'lit-element';
import render from './search-box.tpl.js';
import "@polymer/polymer/polymer-element";
import "@polymer/iron-icons/iron-icons";

/**
 * @class AppSearchBox
 * @description search box for the DAMS v2
 */
export class AppSearchBox extends LitElement {

  static get properties() {
    return {
      placeholder : {
        type : String,
        value : ''
      },
      browse : {
        type : Object,
        observer : '_onBrowseOptionsChange',
        value : () => ({})
      }
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "";
    this.searchValue = "";
  }

  /**
   * @method browseValue
   * @description This is used in case browse functionality is added
   * @returns {String} browseValue
   */

  get value() {
    return this.$.input.value;
  }

  set value(value) {
    this.$.input.value = value;
  }


  /**
   * @method _handleChange
   * @description This handles the change when the button is clicked
   * and adds value to variable. 
   * 
   * @param {Object} e
   * 
   */
  _handleChange(e){
    this.searchValue = e.target.value;
  }

  /**
   * @method _fireSearch
   * @description Activates search when the button is clicked and 
   * creates a custom event. 
   * 
   */
  _fireSearch() {
    this.dispatchEvent(
      new CustomEvent(
        'search', 
        {
          detail: this.searchValue,
          bubbles: true, 
          composed: true
        }
      )
    );
  }

  /**
   * @method _fireSearch
   * @param {Object} e
   * @description The key value is activated if search is entered.
   * 
   * @return {NULL}
   */
  _onKeyUp(e) {
    if( e.which !== 13 ) return;
    this._handleChange(e);
    this._fireSearch();
  }

  /**
   * @method _onBrowseOptionsChange
   * @description Browse Options are created and added to the
   * browse button.
   * 
   */
  _onBrowseOptionsChange() {
    this.$.select.innerHTML = '';

    var option = document.createElement('option');
    option.value = 'Browse';
    option.textContent = 'Browse';
    option.setAttribute('selected', 'selected');
    this.$.select.appendChild(option);

    option = document.createElement('option');
    option.value = '';
    option.textContent = 'All Items';
    this.$.select.appendChild(option);

    for( let key in this.browse ) {
      option = document.createElement('option');
      option.textContent = this.browse[key];
      option.value = key;
      this.$.select.appendChild(option);
    }
  }

}
customElements.define('app-search-box', AppSearchBox);