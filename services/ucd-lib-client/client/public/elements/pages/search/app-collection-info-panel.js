import {PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from '../../interfaces/CollectionInterface'
import {markdown} from "markdown"

import template from "./app-collection-info-panel.html"

class AppCollectionInfoPanel extends Mixin(PolymerElement)
      .with(EventInterface, CollectionInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      coverage : {
        type : String,
        value : ''
      },
      subject : {
        type : String,
        value : ''
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called when a collection is selected.
   * This is done by setting a collection filter.
   * 
   * @param {Object} selected currently selected collection 
   */
  _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.$.description.innerHTML = '';
      this.subject = '';
      this.coverage = '';
      return;
    }

    this.$.description.innerHTML = markdown.toHTML(selected.description || '');

    if( selected.subject ) {
      this.subject = selected.subject.join(', ');
    } else {
      this.subject = '';
    }

    if( selected.coverage ) {
      this.coverage = selected.coverage.join(', ');
    } else {
      this.coverage = '';
    }
  }

}

customElements.define('app-collection-info-panel', AppCollectionInfoPanel);