import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-record.html"
import moment from "moment"
import bytes from "bytes"

import "./app-image-viewer"
import "./app-image-download"
import "./app-record-metadata-layout"

import AppStateInterface from "../../interfaces/AppStateInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"

const lorem = 'Lorem ipsum dolor sit amet cons ectetuer adipiscing elit sed et diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam';
const citeText = [
  {
    label : 'MLA',
    text : lorem
  },
  {
    label : 'APA',
    text : lorem
  },
  {
    label : 'Chicago / Turabian',
    text : lorem
  },
  {
    label : 'Harvard',
    text : lorem
  }
];

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
      resolution : {
        type : String,
        value : ''
      },
      fileFormat : {
        type : String,
        value : ''
      },
      rights : {
        type : String,
        value : ''
      },
      metadata : {
        type : Array,
        value : () => []
      },
      cite : {
        type : Array,
        value : () => citeText
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
  _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    this.currentRecordId = '/'+path.join('/');

    // TODO: check this isn't cached
    this._esGetRecord(this.currentRecordId);
  }

  /**
   * @method _onEsRecordUpdate
   * @description from ElasticSearchInterface, called when search state updates
   * 
   * @param {Object} e 
   */
  async _onEsRecordUpdate(e) {
    if( e.id !== this.currentRecordId ) return;
    if( e.state !== 'loaded' ) return;

    this.record = e.payload._source;

    this.resolution = this.record.width+'x'+this.record.height;
    
    let imgPath = this._getImgPath(this.record);
    this.$.imageViewer.render(imgPath);

    this.name = this.record.name || '';

    this.description = this.record.description || '';
    this.$.link.value = window.location.href;

    this.date = this.record.created ? 
                  moment(this.record.created).format(this.momentFormat) :
                  '';

    this.resourceType = this.record.type || this.record.fileFormat || 'Unknown';

    this.size = bytes(this.record.hasSize ? parseInt(this.record.hasSize) : 0);
    this.fileFormat = this.record.fileFormat || '';

    this.rights = this.record.rights || '';

    this.$.download.render({
      resolution : [this.record.width, this.record.height],
      fileFormat : this.fileFormat,
      size : this.record.hasSize ? parseInt(this.record.hasSize) : 0,
      url : imgPath
    });

    this.collectionName = this.record.isPartOf || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
    }

    this._updateMetadataRows();
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