import { LitElement} from 'lit-element';
import render from './nav-bar.tpl.js';
import "@polymer/polymer/polymer-element";
import "@polymer/iron-icons/iron-icons";

/**
 * @class AppNavBar
 * @description UI component for the Navigation Bar
 */
export class AppNavBar extends LitElement {

  static get properties() {
    return {
      placeholder : {
        type : String,
      },
      browse : {
        type : Object,
      },
      background : {
        type: String,
      },
      choices: {
        type: Array
      }
    };

  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "";
    this.searchValue = "";
    this.background = '/images/home-gradient.png';
    this.choices = [];

    window.addEventListener('click', () => this.hideDropdowns());
  }

  /**
   * @method _onBtnClick
   * @description bound to click events on nav buttons, show menu
   * if there are choices (dropdown) for this menu
   * 
   * @param {MouseEvent} e 
   */
  _onBtnClick(e) {
    let index = parseInt(e.currentTarget.getAttribute('index'));
    this.showBtnDropdownByIndex(index);    

    e.stopPropagation();
    e.preventDefault();
  }

  /**
   * @method _onBtnKeyDown
   * @description bound to key down events on main button.  Show
   * dropdown if enter key is pressed
   * 
   * @param {KeyboardEvent} e 
   */
  _onBtnKeyDown(e) {
    if( e.which === 13 ) {
      let index = parseInt(e.currentTarget.getAttribute('index'));
      this.showBtnDropdownByIndex(index);
    }
  }

  /**
   * @method _onBtnMouseOver
   * @description bound to mouse over event on main button.
   * Show dropdown on mouse over
   * 
   * @param {MouseEvent} e 
   */
  _onBtnMouseOver(e) {
    let index = parseInt(e.currentTarget.getAttribute('index'));
    this.showBtnDropdownByIndex(index);    
  }

  /**
   * @method _onBtnMouseOut
   * @description bound to mouse out events on main button.
   * Hide the dropdown
   */
  _onBtnMouseOut() {
    this.hideDropdowns();    
  }

  /**
   * @method _onBtnFocusOut
   * @description bound to focusout events on main button.  Hide
   * dropdown if a child element doesn't have focus.
   * 
   * @param {FocusEvent} e 
   * @returns 
   */
  _onBtnFocusOut(e) {
    if( e.currentTarget.contains(e.relatedTarget) ) {
      return;
    }
    this.hideDropdowns();
  }

  /**
   * @method showBtnDropdownByIndex
   * @description down a dropdown based on choice index in choices array.
   * If the choice doesn't have a dropdown, this opp is ignored
   * 
   * @param {Number} index 
   */
  showBtnDropdownByIndex(index) {
    let choice = this.choices[index];
    if( !choice.dropdown ) return;

    this.choices.forEach((choice,i) => choice.dropdownVisible = (i === index));
    this.dropdownVisible = true;
    this.requestUpdate();
  }

  /**
   * @method hideDropdowns
   * @description hide all dropdowns
   */
  hideDropdowns() {
    if( !this.dropdownVisible ) return;
    this.choices.forEach(choice => choice.dropdownVisible = false);
    this.dropdownVisible = false;
    this.requestUpdate();
  }


}
customElements.define('app-nav-bar', AppNavBar);