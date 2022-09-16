import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-tabs.html"

export default class AppTabs extends PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      role : {
        type : String,
        value : 'tablist',
        reflectToAttribute : true
      },
      selected : {
        type : String,
        value : '',
        notify : true,
        observer : '_renderTabs'
      },
      tabs : {
        type : Array,
        value : () => [],
        observer : '_renderTabs'
      }
    }
  }

  /**
   * @method _renderTabs
   * @description bound to 'tabs' property observer
   */
  _renderTabs() {
    if( !this.tabs ) return;

    if( !this.selected && this.tabs.length ) {
      this.selected = this.tabs[0];
      return;
    }

    this.tabs.forEach((tab, index) => {
      let selected = (tab.value === this.selected);
      this.set(`tabs.${index}.selected`, selected);
      this.set(`tabs.${index}.ariaSelected`, selected+'');
      if( !tab.label ) this.set(`tabs.${index}.label`, tab.value);
    });
  }

  _onTabClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    this.selected = e.currentTarget.getAttribute('value');
  }

}

customElements.define('app-tabs', AppTabs);