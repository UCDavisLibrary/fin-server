import { LitElement} from 'lit-element';
// import "/../node_modules/@polymer/iron-dropdown/iron-dropdown";
import render from './filterButton.tpl.js';
import "./icon";

/**
 * @class AppFilterButton
 * @description Styleized UI component for button. Wrapper around polymer's options.
 */
export class AppFilterButton extends LitElement {
  static get properties() {
    return {
      themeColor: {type: String, attribute: 'theme-color'},
      choices: {type: Array},
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.choices = [];
    this.themeColor = "outline-primary";

  }

  /**
   * @method firstUpdated
   * @description Lit method called on first element update.
   */
  // firstUpdated() {
  //   this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
  //     (e) => {this.opened = e.target.opened;});
  // }


  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};
    if ( this.filterIcon ) {
      classes['has-filter-icon'] = true;
    }
    if ( this.themeColor ) {
      classes['color-' + this.themeColor] = true;
    }

    return classes;
  }

  /**
   * @method _deleteFilter
   * @description delete the filter button for filters
   * @param {Event} e  
   * 
   */
  _deleteFilter(e){
    e.target.parentNode.parentNode.remove();
    this.requestUpdate();
  }
  /**
   * @method _handleClick
   * @description Attached to list item click if no href present. Dispatches 'new-selection' event.
   * @param {Event} e - click event.
   */
  _handleClick(e){
    let i = e.target.getAttribute('index');
    if (i == this.chosen && !this.stickyTitle) {
      return;
    }

    this.chosen = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(new CustomEvent('new-selection', {
      detail: {
        index: i,
        selected : this.choices[i]
      }
    }));
  }
}

customElements.define('app-filter-button', AppFilterButton);
