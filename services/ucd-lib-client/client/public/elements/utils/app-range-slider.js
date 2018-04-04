import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-range-slider.html"

export default class AppRangeSlider extends PolymerElement {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('app-range-slider', AppRangeSlider);