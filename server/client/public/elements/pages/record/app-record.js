import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-record.html"

import "./app-image-viewer"

import AppStateInterface from "../../interfaces/AppStateInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"

export default class AppRecord extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, ElasticSearchInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      currentRecordId : {
        type : String,
        value : ''
      },
      title : {
        type : String,
        value : ''
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    this.currentRecordId = '/'+path.join('/');

    this._esGetRecord(this.currentRecordId);
  }

  _onEsRecordUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.record = e.payload._source;

    this.$.imageViewer.render(this.record.id);

    this.title = this.record.title || '';
    this.description = this.record.description || '';
    this.$.link.value = window.location.href;
  }

}

customElements.define('app-record', AppRecord);