import { LitElement} from 'lit-element';
import render from './radioButton.tpl.js';

/**
 * @class AppRadioButton
 * @description Styleized UI component for Radio button. Wrapper around polymer's options.
 */
export class AppRadioButton extends LitElement {
  static get properties() {
    return {
      count : {type : String},
      choices: {
        type: Array
      },
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

  }


  /**
   * @method _onAppStateUpdate
   * @description on the App update, the state is determined and by checking
   * the location
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( e.location.hash === 'collections' ) {
      setTimeout(() => {
        let ele = this.shadowRoot.querySelector('#collections-home');
        if( ele ) ele.scrollIntoView();
      }, 25);
    }
  }
}

customElements.define('app-radio-button', AppRadioButton);
