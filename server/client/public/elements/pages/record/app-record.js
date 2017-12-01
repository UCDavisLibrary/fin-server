import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-toast/paper-toast"

import template from "./app-record.html"
import moment from "moment"
import bytes from "bytes"

import "./app-image-viewer"
import "./app-image-download"

import AppStateInterface from "../../interfaces/AppStateInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"

export default class AppRecord extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, ElasticSearchInterface, CollectionInterface) {

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
      },
      resourceType : {
        type : String,
        value : ''
      },
      collectionName : {
        type : String,
        value : ''
      },
      date : {
        type : String,
        value : ''
      },
      size : {
        type : String,
        value : ''
      },
      resolution : {
        type : String,
        value : ''
      },
      mimeType : {
        type : String,
        value : ''
      },
      rights : {
        type : String,
        value : ''
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.momentFormat = 'YYYY';
  }

  _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    this.currentRecordId = '/'+path.join('/');

    this._esGetRecord(this.currentRecordId);
  }

  _onResolutionResolved(e) {
    this.$.download.render({
      resolution : e.detail,
      mimeType : this.mimeType,
      size : this.record.hasSize ? parseInt(this.record.hasSize) : 0,
      url : this.record.id
    });
  }

  _onEsRecordUpdate(e) {
    if( e.id !== this.currentRecordId ) return;
    if( e.state !== 'loaded' ) return;

    this.record = e.payload._source;

    this.resolution = '';
    this.$.imageViewer.render(this.record.id);

    this.title = this.record.title || '';
    this.description = this.record.description || '';
    this.$.link.value = window.location.href;

    this.collectionName = this.record.memberOf || '';
    if( this.collectionName ) {
      this.collectionName = this._getCollection(this.collectionName).title;
    }

    this.date = this.record.created ? 
                  moment(this.record.created).format(this.momentFormat) :
                  '';

    this.resourceType = this.record.type || this.record.hasMimeType || 'Unknown';

    this.size = bytes(this.record.hasSize ? parseInt(this.record.hasSize) : 0);
    this.mimeType = this.record.hasMimeType || '';

    this.rights = this.record.rights || '';
  }

  _copyLink() {
    this.$.link.select();
    document.execCommand("Copy");
    this.$.copyToast.open();
  }

}

customElements.define('app-record', AppRecord);