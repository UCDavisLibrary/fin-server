import { LitElement } from 'lit-element';
import render from "./ucdlib-site-footer-column.tpl.js";
import { styles } from "./ucdlib-site-footer.tpl";


/**
 * @class UcdlibSiteFooterColumn
 * @description Column UI component for use with UcdlibSiteFooter
 */
export default class UcdlibSiteFooterColumn extends LitElement {

  static get properties() {
    return {
      header: {type: String},
      role: {type: String, reflect: true},
      template: {type: String}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.header = "Footer Column Header";
    this.role = "navigation";
    this.template = "";
  }

}

customElements.define('ucdlib-site-footer-column', UcdlibSiteFooterColumn);
