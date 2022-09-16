import {PolymerElement} from "@polymer/polymer/polymer-element";
import template from "./app-record-metadata-layout.html";

// import "@polymer/paper-tabs/paper-tabs"
// import "@polymer/paper-tabs/paper-tab"
import "../../utils/app-tabs";
import "@polymer/iron-pages/iron-pages";
import "@polymer/iron-media-query/iron-media-query";

export default class AppRecordMetadataLayout extends PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      mobile : {
        type : Boolean,
        value : false,
        observer : '_updateVisiblePanels'
      },
      selectedTab : {
        type : Number,
        value : 'data',
        observer : '_updateVisiblePanels'
      },
      showRight : {
        type : Boolean,
        value : true
      },
      showLeft : {
        type : Boolean,
        value : true
      },
      tabs : {
        type : Array,
        value : () => [
          {label : 'Item Data', value: 'data'},
          {label : 'Cite Item', value: 'cite'}
        ]
      }
    };
  }

  /**
   * @method _updateVisiblePanels
   * @description called when `mobile` or `selectedTab` property is updated
   * Set the correct panel to display.
   */
  _updateVisiblePanels() {
    this.showRight = true;
    this.showLeft = true;

    if( !this.mobile ) return;
    
    if( this.selectedTab === 'data' ) this.showRight = false;
    else this.showLeft = false;
  }

}

customElements.define('app-record-metadata-layout', AppRecordMetadataLayout);