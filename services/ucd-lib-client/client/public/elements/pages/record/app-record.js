import {PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-record.html"
import moment from "moment"
import bytes from "bytes"
import rightsDefinitions from "../../../lib/rights.json"
import citations from "../../../lib/models/CitationsModel"

import "./viewer/app-image-viewer-static"
import "./app-image-download"
import "./app-record-metadata-layout"
import "./app-copy-cite"

import AppStateInterface from "../../interfaces/AppStateInterface"
import RecordInterface from "../../interfaces/RecordInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"

export default class AppRecord extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, RecordInterface, CollectionInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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

    let result = await this._getRecord(this.currentRecordId);
    this._setSelectedRecord(result.payload);
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

    this.$.resourceType.innerHTML = this.record.type ? '<div>'+this.record.type.join('</div><div>')+'</div>' : 'Unknown';

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
    this.$.mla.text = citations.renderEsRecord(this.record, 'mla');
    this.$.apa.text = citations.renderEsRecord(this.record, 'apa');
    this.$.chicago.text = citations.renderEsRecord(this.record, 'chicago');


    // render associated media
    if( record.associatedMedia ) {
      let imageList = this._getImageMediaList(record);
      if( imageList.length ) this._setSelectedRecordMedia(imageList[0]);
      else this._setSelectedRecordMedia(record);
    } else {
      this._setSelectedRecordMedia(record);
    }

    // left side metadata items

    // find arks or doi
    this._renderIdentifier(record);
    this._renderCreators(record);

    // set collection link
    let searchDoc = this._getEmptySearchDocument();
    this._appendKeywordFilter(searchDoc, 'isPartOf', record.collectionId);
    let link = this._getHost()+'search/'+this._searchDocumentToUrl(searchDoc);
    this.$.collectionValue.innerHTML = `<a href="${link}">${this.collectionName}</a>`;

    // set fedora collection link
    let metadataPart = record['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
    link = this._getHost()+'fcrepo/rest'+record.id+metadataPart;
    this.$.fedoraValue.innerHTML =  `<a href="${link}">${record.id}</a>`;

    this._updateMetadataRows();
  }

  /**
   * @method _renderCreators
   * @description render creator field
   * 
   * @param {Object} record
   */
  _renderCreators(record) {
    if( !record.creators ) {
      return this.$.creator.display = 'none';
    }
    let creators = Array.isArray(record.creators) ? record.creators : [record.creators];

    this.$.creatorValue.innerHTML = creators
      .map(creator => {
        let searchDoc = this._getEmptySearchDocument();
        this._appendKeywordFilter(searchDoc, 'creators', creator);
        this._appendKeywordFilter(searchDoc, 'isPartOf', record.collectionId);
        let link = this._getHost()+'search/'+this._searchDocumentToUrl(searchDoc);
        return `<a href="${link}">${creator}</a>`;
      })
      .join(', ');

    this.$.creator.style.display = 'flex';
  }

  /**
   * @method _renderIdentifier
   * @description render ark/doi field
   * 
   * @param {Object} record 
   */
  _renderIdentifier(record) {
    if( !record.identifier ) {
      return this.$.identifier.style.display = 'none';
    }

    let ids = Array.isArray(record.identifier) ? record.identifier : [record.identifier];
    ids = ids.filter(id => id.match(/^(ark|doi)/) ? true : false);

    if( ids.length ) {
      this.$.identifier.style.display = 'flex';
      this.$.identifierValue.innerHTML = ids.map(id => `<div><a href="${this._getHost()}${id}">${id}</a></div>`).join('')
    } else {
      this.$.identifier.style.display = 'none';
    }      
  }

  /**
   * @method _getHost
   * @description helper for getting protocol/host of window
   * 
   * @returns {String}
   */
  _getHost() {
    return window.location.protocol+'//'+window.location.host+'/';
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