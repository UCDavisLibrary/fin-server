import { html } from 'lit-element';

/**
 * @class SharedHtml
 * @description Lit html template strings used across the site.
 * Designed to be used with DAMS shared styles, so make sure you import those into your element
 */
class SharedHtml {

  /**
   * @method headerDots
   * @description Displays the yellow dots beneath a section header
   * @returns {TemplateResult}
   */
  headerDots(){
    return html`
      <div class="header-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  }

}
export default new SharedHtml();