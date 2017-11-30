import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-record.html"

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
    console.log(e);
  }

}

customElements.define('app-record', AppRecord);