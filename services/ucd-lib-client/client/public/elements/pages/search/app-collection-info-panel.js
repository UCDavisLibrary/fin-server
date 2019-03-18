import {PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from '../../interfaces/CollectionInterface'

import template from "./app-collection-info-panel.html"

class AppCollectionInfoPanel extends Mixin(PolymerElement)
      .with(EventInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      description : {
        type : String,
        value : ''
      },
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

    this.selectedCollectionId = '';
    this._injectModel('AppStateModel', 'CollectionModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to app-state-update event.  Set current collection information
   * 
   * @param {Object} e 
   */
  async _onAppStateUpdate(e) {
    if( this.selectedCollectionId === e.selectedCollection ) return;
    this.selectedCollectionId = e.selectedCollection;

    if( !e.selectedCollection ) {
      this.description = '';
      this.subject = '';
      this.coverage = '';
      return;
    }

    let selected = await this.CollectionModel.get(this.selectedCollectionId);
    
    this.description = selected.description || '';

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