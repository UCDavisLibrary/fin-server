import { LitElement} from 'lit';
import render from './citation.tpl.js';

/**
 * @class Citation
 * @description Styleized UI component for Citations
 */
export class Citation extends LitElement {
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

}

customElements.define('app-citation', Citation);
