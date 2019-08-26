import {PolymerElement} from "@polymer/polymer/polymer-element"
import {markdown} from "markdown";

import template from "./app-record.html"
import rightsDefinitions from "../../../lib/rights.json"
import citations from "../../../lib/models/CitationsModel"
import utils from "../../../lib/utils"
import config from "../../../lib/config"

import "./viewer/app-image-viewer-static"
import "./app-media-download"
import "./app-record-metadata-layout"
import "./app-copy-cite"
import "./viewer/app-360-image-viewer"
import "./viewer/app-video-viewer"

import AppStateInterface from "../../interfaces/AppStateInterface"
import RecordInterface from "../../interfaces/RecordInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"
import { debug } from "util";

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
  }

  /**
   * @method _onAppStateUpdate
   * @description from AppStateInterface, called when happ state updates
   * 
   * @param {*} e 
   */
  async _onAppStateUpdate(e) {
    if( e.location.page !== 'record' ) return;

    let id = '/'+e.location.path.join('/');
    if( this.currentRecordId === id ) return;
    this.currentRecordId = id;

    let result = await this._getRecord(this.currentRecordId);
    let record = await this.RecordModel.createMediaObject(result.payload);

    this._onSelectedRecordUpdate(record);

    //this._setSelectedRecord(result.payload);
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  async _onSelectedRecordUpdate(record) {
    if( record['@id'] === this.renderedRecordId ) return;

    this.renderedRecordId = record['@id'];
    this.record = record;
    this.isVideo = false;

    if(record.media.video) {
      this.isVideo = true;
      let videoObj = utils.formatVideo(record.media.video);
      if (videoObj.sources && videoObj.sources[0].license) {
        this.record.license = videoObj.sources[0].license;
      }
    }

    if( this.record.description ) {
      this.$.description.style.display = 'flex';
      this.$.descriptionValue.innerHTML = markdown.toHTML(this.record.description);
    } else {
      this.$.description.style.display = 'none';
    }

    this.description = this.record.description || '';
    this.alternativeHeadline = this.record.alternativeHeadline || '';
    this.$.link.value = window.location.href;

    this.date = utils.getYearFromDate(this.record.datePublished);

    // TODO: add back in when we figure out consolidated resource type 
    // this.$.resourceType.innerHTML = this.record.type ? '<div>'+this.record.type.join('</div><div>')+'</div>' : 'Unknown';
    
    if( this.record.license &&
        this.record.license['@id'] && 
        rightsDefinitions[this.record.license['@id']] ) {

      let def = rightsDefinitions[this.record.license['@id']];
      this.rights = {
        link : this.record.license['@id'],
        label : def.text,
        icon : `/images/rights-icons/${def.icon}.svg`
      }
    } else {
      this.rights = null;
    }

    this.collectionName = this.record.collectionId || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
      this.record.collectionName = collection.name;
    }

    // render associated media
    let imageList = this._getImageMediaList(record);
    this.$.download.setRootRecord(record, imageList);

    if( record.associatedMedia ) { 
      if( imageList.length ) this._setSelectedRecordMedia(imageList[0]);
      else this._setSelectedRecordMedia(record);
    } else {
      this._setSelectedRecordMedia(record);
    }

    // find arks or doi
    this._renderIdentifier(record);
    this._renderCreators(record);
    this._renderSubjects(record);
    this._renderPublisher(record);

    // set collection link
    this.$.collectionValue.innerHTML = `<a href="${record.collectionId}">${this.collectionName}</a>`;

    // set fedora collection link
    let metadataPart = record['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
    let link = this._getHost()+'fcrepo/rest'+record['@id']+metadataPart;
    this.$.fedoraValue.innerHTML =  `<a href="${link}">${record['@id']}</a>`;

    this._updateMetadataRows();
    //this._setTarHref();

    // render citations.. this might need to load library, do it last
    this.$.mla.text = await citations.renderEsRecord(this.record, 'mla');
    this.$.apa.text = await citations.renderEsRecord(this.record, 'apa');
    this.$.chicago.text = await citations.renderEsRecord(this.record, 'chicago');
  }

  _setTarHref() {
    let urls = {};
    this._getImageMediaList(this.record)
      .forEach(item => {
        urls[item.filename || item.name] = this._getImgUrl(item['@id']).replace(config.fcrepoBasePath, '')
      });

    this.tarName = this.record.name.replace(/[^a-zA-Z0-9]/g, '');
    this.$.tarPaths.value = JSON.stringify(urls);

    // this.tarUrl = TarService.create(
    //   encodeURI(this.record.name.replace(/[^a-zA-Z0-9]/g, '')), 
    //   urls
    // )
  }

  /**
   * @method _renderCreators
   * @description render creator field
   * 
   * @param {Object} record
   */
  _renderCreators(record) {
    // filter to those w/ labels
    let creators = utils.asArray(record, 'creators');

    if( creators.length === 0 ) {
      return this.$.creator.style.display = 'none';
    }

    // TODO: label is under creator.name
    this.$.creatorValue.innerHTML = creators 
      .map(creator => {
        let searchDoc = this._getEmptySearchDocument();
        this._appendKeywordFilter(searchDoc, 'creators', creator);
        this._appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
        let link = this._getHost()+'search/'+this._searchDocumentToUrl(searchDoc);
        return `<a href="${link}">${creator}</a>`;
      })
      .join(', ');

    this.$.creator.style.display = 'flex';
  }

  /**
   * @method _renderSubjects
   * @description render subject field, which is really 'abouts' derived from 'schema:about'
   * 
   * @param {Object} record
   */
  _renderSubjects(record) {
    // filter to those w/ labels
    let subjects = utils.asArray(record, 'abouts');
    // .filter(subject => subject.name ? true : false);

    if( subjects.length === 0 ) {
      return this.$.subject.style.display = 'none';
    }

    // TODO: label is under creator.name
    this.$.subjectValue.innerHTML = subjects 
      .map(subject => {
        // debugger;
        // subject = subject.name;
        let searchDoc = this._getEmptySearchDocument();
        this._appendKeywordFilter(searchDoc, 'abouts.raw', subject);
        this._appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
        let link = this._getHost()+'search/'+this._searchDocumentToUrl(searchDoc);
        return `<a href="${link}">${subject}</a>`;
      })
      .join(', ');

    this.$.subject.style.display = 'flex';
  }

  /**
   * @method _renderPublisher
   * @description render publisher field
   * 
   * @param {Object} record
   */
  _renderPublisher(record) {
    // filter to those w/ labels
    let publishers = utils.asArray(record, 'publisher')
      .filter(publisher => publisher.name ? true : false);

    if( publishers.length === 0 ) {
      return this.$.publisher.style.display = 'none';
    }

    this.$.publisherValue.innerHTML = publishers 
      .map(publisher => publisher.name)
      .join(', ');

    this.$.publisher.style.display = 'flex';
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
    if( record._has360ImageList ) {
      this.$.download.style.display = 'none';
      return;
    }

    this.name = this.record.name || '';
    this.$.download.style.display = 'block';

    this.$.videoViewer.style.display = 'none';
    if (this.isVideo) {
      this.$.videoViewer.style.display = 'block';
      this.$.download.render();
      return;
    }

    // Works for Images
    this.$.download.render({
      resolution : [record.image.width, record.image.height],
      fileFormat : record.image.encodingFormat,
      size : record.image.contentSize ? parseInt(record.image.contentSize) : 0,
      url : record.image.url
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
    this.$.link.focus();
    this.$.link.setSelectionRange(0, 9999);
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