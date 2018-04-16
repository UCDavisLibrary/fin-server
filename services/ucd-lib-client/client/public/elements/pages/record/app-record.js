import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-record.html"
import moment from "moment"
import bytes from "bytes"
import rightsDefinitions from "../../../lib/rights.json"
import citations from "../../../lib/models/CitationsModel"

import "./viewer/app-image-viewer-static"
import "./app-image-download"
import "./app-record-metadata-layout"

import AppStateInterface from "../../interfaces/AppStateInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"

export default class AppRecord extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, ElasticSearchInterface, CollectionInterface, MediaInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      currentRecordId : {
        type : String,
        value : ''
      },
      name : {
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
      rights : {
        type : Object,
        value : () => {}
      },
      metadata : {
        type : Array,
        value : () => []
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.momentFormat = 'YYYY';
  }

  /**
   * @method _onAppStateUpdate
   * @description from AppStateInterface, called when happ state updates
   * 
   * @param {*} e 
   */
  async _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    if( this.currentRecordId === '/'+path.join('/') ) return;

    this.currentRecordId = '/'+path.join('/');

    let result = await this._esGetRecord(this.currentRecordId);
    this._setSelectedRecord(result.payload._source);
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  async _onSelectedRecordUpdate(record) {
    if( record.id === this.renderedRecordId ) return;

    this.renderedRecordId = record.id;
    this.record = record;

    this.name = this.record.name || '';

    this.description = this.record.description || '';
    this.$.link.value = window.location.href;

    this.date = this.record.datePublished ? 
                  moment(this.record.datePublished).format(this.momentFormat) :
                  '';

    this.resourceType = this.record.type ? this.record.type.join(', ') : 'Unknown';

    if( this.record.license && rightsDefinitions[this.record.license] ) {
      let def = rightsDefinitions[this.record.license];
      this.rights = {
        link : this.record.license,
        label : def.text,
        icon : `/images/rights-icons/${def.icon}.svg`
      }
    } else {
      this.rights = null;
    }

    this.collectionName = this.record.isPartOf || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
      this.record.collectionName = collection.name;
    }

    // render citations
    this.$.mla.innerHTML = citations.renderEsRecord(this.record, 'mla');
    this.$.apa.innerHTML = citations.renderEsRecord(this.record, 'apa');
    this.$.chicago.innerHTML = citations.renderEsRecord(this.record, 'chicago');



    if( record.associatedMedia ) {
      let imageList = this._getImageMediaList(record);
      if( imageList.length ) this._setSelectedRecordMedia(imageList[0]);
      else this._setSelectedRecordMedia(record);
    } else {
      this._setSelectedRecordMedia(record);
    }

    this._updateMetadataRows();
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} record 
   */
  _onSelectedRecordMediaUpdate(record) {
    this.$.download.render({
      resolution : [record.width, record.height],
      fileFormat : record.fileFormat,
      size : record.fileSize ? parseInt(record.fileSize) : 0,
      url : this._getImgPath(record)
    });
  }

  /**
   * @method _updateMetadataRows
   * @description update metadata table
   */
  _updateMetadataRows() {
    let metadata = [];

    this._addMetadataRow(metadata, 'name', 'Item Name');
    this._addMetadataRow(metadata, 'collectionName', 'Collection');
    this._addMetadataRow(metadata, 'date', 'Date');

    this._addMetadataRow(metadata, 'resourceType', 'Resource Type');

    this.metadata = metadata;
  }

  /**
   * @method _addMetadataRow
   * @description update metadata table row
   * 
   * @param {Array} metadata 
   * @param {String} attr 
   * @param {String} label 
   */
  _addMetadataRow(metadata, attr, label) {
    if( !this[attr] ) return;
    metadata.push({
      attr: label || attr, 
      value: this[attr]
    });
  }

  /**
   * @method _copyLink
   * @description bound to click event on button.  Copy text to clipboard
   * show UI interaction.
   */
  _copyLink() {
    this.$.link.select();
    document.execCommand("Copy");

    this.$.copyIcon.icon = 'check';
    this.$.copyButton.setAttribute('active', 'active');

    setTimeout(() => {
      this.$.copyIcon.icon = 'content-copy';
      this.$.copyButton.removeAttribute('active', 'active');
    }, 3000);
  }

}

customElements.define('app-record', AppRecord);