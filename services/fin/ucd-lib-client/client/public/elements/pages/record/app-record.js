import { LitElement } from 'lit';
import render from "./app-record.tpl.js";

import {markdown} from "markdown"
import rightsDefinitions from "../../../lib/rights.json"
import citations from "../../../lib/models/CitationsModel"
import utils from "../../../lib/utils"

import "./app-media-download"
import "./app-fs-media-download"
import "./app-copy-cite"
import "./viewer/app-media-viewer"
import "../../components/citation"

class AppRecord extends Mixin(LitElement)
      .with(LitCorkUtils) {

  static get properties() {
    return {
      record : {type: Object},
      currentRecordId : {type: String},
      name : {type: String},
      collectionName : {type: String},
      collectionImg : {type: String},
      date : {type: String},
      publisher : {type: String},
      keywords : {type: Array},
      callNumber : {type: String},
      size : {type: String},
      rights : {type: Object},
      metadata : {type: Array},
      isBagOfFiles : {type: Boolean},
      arkDoi : {type: Array},
      fedoraLinks : {type: Array},
      // citations : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.record = {};
    this.currentRecordId = '';
    this.name = 'Yuletide Vintage of Values 1968';
    this.collectionName = '';
    
    this.date = '1968';
    this.publisher = 'Sherry-Lehmann Inc.';
    this.keywords = ['Wine--Marketing', 'Manuscripts--Catalogs'];
    this.callNumber = 'D-192, Box:28, Folder:3';
    this.collectionImg = '/images/stub/slater.jpg';

    this.size = '';
    this.rights = {};
    this.metadata = [];
    this.isBagOfFiles = false;    
    this.arkDoi = [];
    this.fedoraLinks = [];
    // this.citations = [];

    this._injectModel('AppStateModel', 'RecordModel', 'CollectionModel', 'RecordVcModel');
  }

  async firstUpdated() {
    let selectedRecord = await this.AppStateModel.getSelectedRecord();
    if( selectedRecord ) {
      await this._onSelectedRecordUpdate(selectedRecord);
      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
  }

  /**
   * @method _onRecordUpdate
   * @description from RecordModel, listen for loading events and reset UI.
   * 
   * @param {Object} e state event 
   */
  _onRecordUpdate(e) {
    if( e.state !== 'loading' ) return;

    // this.renderedRecordId = null;
    // this.record = null;
    // this.$.description.classList.add('hidden');
    // this.description = '';
    // this.alternativeHeadline = '';
    // this.$.link.value = '';
    // this.date = '';
    // this.collectionName = '';
    // this.rights = null;
    // this.$.collectionValue.innerHTML = '';
    // this.$.mla.text = '';
    // this.$.apa.text = '';
    // this.$.chicago.text = '';
    // this.$.identifier.classList.add('hidden');
    // this.$.creator.classList.add('hidden');
    // this.$.subject.classList.add('hidden');
    // this.$.publisher.classList.add('hidden');
    // this.$.fedoraValue.innerHTML = '';
    // this.metadata = [];
    // this.isBagOfFiles = false;
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  async _onSelectedRecordUpdate(record) {
    if( !record ) return;

    let vcRecord = this.RecordVcModel.translate(record);
    if( vcRecord.id === this.renderedRecordId ) return;

    this.renderedRecordId = vcRecord.id;
    this.record = vcRecord;
    
    this.currentRecordId = this.record.id;
    this.name = this.record.name;
    this.collectionName = this.record.collectionName;
    this.date = this.record.date;
    this.publisher = this.record.publisher;
    this.keywords = this.record.keywords;
    this.callNumber = this.record.callNumber;
    // this.callNumber = record.root.identifier[0].split(';')[1].trim();
    this.collectionImg = this.record.collectionImg;

    this._updateLinks(this.AppStateModel.locationElement.location, record);

    // debugger;
    // if( this.AppStateModel.locationElement.location.pathname.split('/media').length < 2 ) {
    //   // pull image with position 1

    //   //    pathname + record.root.image.url for second links in ark/fedora
    //   // record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].id === /item/bla
    //   // record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].image.url === /fcrepo/bla
    //   this.arkDoi = [
    //     this.AppStateModel.locationElement.location.pathname.split('/media')[0],
    //     record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].id,
    //   ];
  
    //   this.fedoraLinks = [
    //     '/fcrepo/rest' + this.AppStateModel.locationElement.location.pathname.split('/media')[0],
    //     record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].image.url + '/fcr:metadata',
    //   ]; 
  
    // } else {
    //   this.arkDoi = [
    //     this.AppStateModel.locationElement.location.pathname.split('/media')[0],
    //     this.AppStateModel.locationElement.location.pathname,
    //   ];
  
    //   this.fedoraLinks = [
    //     '/fcrepo/rest' + this.AppStateModel.locationElement.location.pathname.split('/media')[0],
    //     '/fcrepo/rest' + this.AppStateModel.locationElement.location.pathname + '/fcr:metadata',
    //   ];
    // }


    // this.size = '?'
    // this.rights = {'?': '?'}
    // this.metadata = ['?'],
    // this.isBagOfFiles : {type: Boolean}

      /*
      arkDoi: ['?']
      callNumber: "?"
      citationText: "?"
      clientMedia: 
        ClientMedia {id: '/item/ark:/87287/d7k06n', graph: Array(86), index: Array(0), root: {…}, mediaGroups: Array(2)}
      collectionId: "/collection/sherry-lehmann"
      collectionItemsCount: 42
      collectionName: "Sherry-Lehmann Wine & Spirits Co."
      date: 2010
      fedoraLinks: ['?']
      id: "/item/ark:/87287/d7k06n"
      keywords: ['?']
      name: "Holiday 2010: Sherry-Lehmann Wine & Spirits Merchants Since 1934"
      publisher: "Sherry-Lehmann Wine & Spirits Co."
    */

    // if( this.record.description ) {
    //   this.$.description.classList.remove('hidden');
    //   this.$.descriptionValue.innerHTML = markdown.toHTML(this.record.description);
    // } else {
    //   this.$.description.classList.add('hidden');
    // }

    // this.description = this.record.description || '';
    // this.alternativeHeadline = this.record.alternativeHeadline || '';
    // this.$.link.value = window.location.href;

    // this.$.dateValue.innerHTML = this.record.datePublished || 'Undated';

    // TODO: add back in when we figure out consolidated resource type 
    // this.$.resourceType.innerHTML = this.record.type ? '<div>'+this.record.type.join('</div><div>')+'</div>' : 'Unknown';
    // if( this.record.license &&
    //     this.record.license['@id'] && 
    //     rightsDefinitions[this.record.license['@id']] ) {

    //   let def = rightsDefinitions[this.record.license['@id']];
    //   this.rights = {
    //     link : this.record.license['@id'],
    //     label : def.text.toLowerCase(),
    //     icon : `/images/rights-icons/${def.icon}.svg`
    //   }
    // } else {
    //   this.rights = null;
    // }

    // this.collectionName = this.record.collectionId || '';
    // if( this.collectionName ) {
    //   let collection = await this._getCollection(this.collectionName);
    //   this.collectionName = collection.name;
    //   this.record.collectionName = collection.name;
    // }

    // Attach a recod to the download options
    // this.$.download.setRootRecord(record);

    // find arks or doi
    // this._renderIdentifier(record);
    // this._renderCreators(record);
    // this._renderSubjects(record);
    // this._renderPublisher(record);

    // set collection link
    // this.$.collectionValue.innerHTML = `<a href="${record.collectionId}">${this.collectionName}</a>`;

    // set fedora collection link
    // this._renderFcLink(record);

    // this._updateMetadataRows();
    // this._setTarHref();

    // render citations.. this might need to load library, do it last
    // debugger;
    // this.citations.push({
    //   type : 'mla',
    //   text : await citations.renderEsRecord(this.record.root, 'mla')
    // });
    // this.citations.push({
    //   type : 'apa',
    //   text : await citations.renderEsRecord(this.record.root, 'apa')
    // });
    // this.citations.push({
    //   type : 'chicago',
    //   text : await citations.renderEsRecord(this.record.root, 'chicago')
    // });
    

    // this.$.mla.text = await citations.renderEsRecord(this.record, 'mla');
    // this.$.apa.text = await citations.renderEsRecord(this.record, 'apa');
    // this.$.chicago.text = await citations.renderEsRecord(this.record, 'chicago');

    // this.isBagOfFiles = this.record['@type'].includes('http://digital.ucdavis.edu/schema#BagOfFiles');
  }

  /**
   * @method _onAppStateUpdate
   * @description AppStateInterface
   */
  _onAppStateUpdate(e) {
    this._updateLinks(e.location);
  }

  /**
   * @method _updateLinks
   * @description update ark/fedora links
   * 
   * @param {Object} location location element
   * @param {Object} record selected record
   */
  _updateLinks(location, record) {
    if( location.pathname.split('/media').length < 2 ) {
      if( !record ) return;

      // pull image with position 1
      this.arkDoi = [
        location.pathname.split('/media')[0],
        record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].id,
      ];
  
      this.fedoraLinks = [
        '/fcrepo/rest' + location.pathname.split('/media')[0],
        record.data.node.filter(r => parseInt(r.position) === 1 && r.image)[0].image.url + '/fcr:metadata',
      ]; 
  
    } else {
      this.arkDoi = [
        location.pathname.split('/media')[0],
        location.pathname,
      ];
  
      this.fedoraLinks = [
        '/fcrepo/rest' + location.pathname.split('/media')[0],
        '/fcrepo/rest' + location.pathname + '/fcr:metadata',
      ];
    }
  }

  /**
   * @method _onRecordVcUpdate
   * @description from RecordVcModel, called when a record is selected
   * 
   * @param {Object} e payload
   */
  // _onRecordVcUpdate(e) {
  //   debugger;
  // }

  // _renderFcLink(record, media) {
  //   let metadataPart = record['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
  //   let link = this._getHost()+'fcrepo/rest'+record['@id']+metadataPart;
  //   let html = `<a href="${link}">${record['@id']}</a>`;

  //   if( media && record['@id'] !== media['@id'] ) {
  //     metadataPart = media['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
  //     link = this._getHost()+'fcrepo/rest'+media['@id']+metadataPart;
  //     html += `<div class="fc-break"></div><div><a href="${link}">${media['@id']}</a></div>`;
  //   }

  //   this.$.fedoraValue.innerHTML = html;
  // }

  // _renderSelectedMedia() {
  //   let imageList = this._getImageMediaList(this.record);
  //   if( this.record.associatedMedia ) { 
  //     if( imageList.length ) {

  //       // see if url has selected an image
  //       let selected = imageList[0];
  //       for( let img of imageList ) {
  //         if( img['@id'] === window.location.pathname ) {
  //           selected = img;
  //         }
  //       }

  //       this._setSelectedRecordMedia(selected);
  //     } else {
  //       this._setSelectedRecordMedia(this.record);
  //     }
  //   } else {
  //     this._setSelectedRecordMedia(this.record);
  //   }
  // }

  /**
   * @method _renderCreators
   * @description render creator field
   * 
   * @param {Object} record
   */
  // _renderCreators(record) {
  //   // filter to those w/ labels
  //   let creators = utils.asArray(record, 'creators');

  //   if( creators.length === 0 ) {
  //     return this.$.creator.classList.add('hidden');
  //   }

  //   // TODO: label is under creator.name
  //   this.$.creatorValue.innerHTML = creators 
  //     .map(creator => {
  //       let searchDoc = this.RecordModel.emptySearchDocument();
  //       this.RecordModel.appendKeywordFilter(searchDoc, 'creators', creator);
  //       this.RecordModel.appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
  //       let link = this._getHost()+'search/'+this.RecordModel.searchDocumentToUrl(searchDoc);
  //       return `<a href="${link}">${creator}</a>`;
  //     })
  //     .join(', ');

  //   this.$.creator.classList.remove('hidden');
  // }

  /**
   * @method _renderSubjects
   * @description render subject field, which is really 'abouts' derived from 'schema:about'
   * 
   * @param {Object} record
   */
  // _renderSubjects(record) {
  //   // filter to those w/ labels
  //   let subjects = utils.asArray(record, 'abouts');
  //   // .filter(subject => subject.name ? true : false);

  //   if( subjects.length === 0 ) {
  //     return this.$.subject.classList.add('hidden');
  //   }

  //   // TODO: label is under creator.name
  //   this.$.subjectValue.innerHTML = subjects 
  //     .map(subject => {
  //       // subject = subject.name;
  //       let searchDoc = this.RecordModel.emptySearchDocument();
  //       this.RecordModel.appendKeywordFilter(searchDoc, 'abouts.raw', subject);
  //       this.RecordModel.appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
  //       let link = this._getHost()+'search/'+this.RecordModel.searchDocumentToUrl(searchDoc);
  //       return `<a href="${link}">${subject}</a>`;
  //     })
  //     .join(', ');

  //   this.$.subject.classList.remove('hidden');
  // }

  /**
   * @method _renderPublisher
   * @description render publisher field
   * 
   * @param {Object} record
   */
  // _renderPublisher(record) {
  //   // filter to those w/ labels
  //   let publishers = utils.asArray(record, 'publisher')
  //     .filter(publisher => publisher.name ? true : false);

  //   if( publishers.length === 0 ) {
  //     return this.$.publisher.classList.add('hidden');
  //   }

  //   this.$.publisherValue.innerHTML = publishers 
  //     .map(publisher => publisher.name)
  //     .join(', ');

  //   this.$.publisher.classList.remove('hidden');
  // }

  /**
   * @method _renderIdentifier
   * @description render ark/doi field
   * 
   * @param {Object} record 
   */
  // _renderIdentifier(record, media) {
  //   if( !record.identifier ) {
  //     return this.$.identifier.classList.add('hidden');
  //   }

  //   let ids = Array.isArray(record.identifier) ? record.identifier : [record.identifier];
  //   let arks = ids.filter(id => id.match(/^(ark|doi)/) ? true : false);

  //   if( arks.length ) {

  //     // if we are passed a selected media, append identifiers as well
  //     if( media && media.identifier ) {
  //       let mediaIds = Array.isArray(media.identifier) ? media.identifier : [media.identifier];
  //       mediaIds = mediaIds.filter(id => id.match(/^(ark|doi)/) ? true : false);
  //       for( let id of mediaIds ) {
  //         if( arks.indexOf(id) === -1 ) arks.push(id);
  //       }
  //     }

  //     this.$.identifier.classList.remove('hidden');
  //     this.$.identifierValue.innerHTML = arks.map(id => `<div><a href="${this._getHost()}${id}">${id}</a></div>`).join('')
  //   } else {
  //     this.$.identifier.classList.add('hidden');
  //   }

  //   if( !record.identifiers ) {
  //     return this.$.libLocation.classList.add('hidden');
  //   }

  //   let callNumber = Array.isArray(record.identifiers) ? record.identifiers : [record.identifiers];
  //   callNumber = callNumber.filter(id => id.match(/^.*,.*box:.*,.*folder:.*$/i) ? true : false);
  //   if( callNumber.length ) {
  //     this.$.callNumberValue.innerHTML = callNumber.map(id => `<div>${id}</div>`).join('')
  //     this.$.callNumber.classList.remove('hidden');
  //   } else {
  //     this.$.callNumber.classList.add('hidden');
  //   }
  // }

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
    // if( record._has360ImageList ) {
    //   this.$.download.style.display = 'none';
    //   return;
    // }

    this.name = this.record.name || '';

    // if (!record.image) return;

    // this.$.download.render({
    //   resolution : [record.image.width, record.image.height],
    //   fileFormat : record.image.encodingFormat,
    //   size : record.image.contentSize ? parseInt(record.image.contentSize) : 0,
    //   url : record.image.url
    // });

    // this._renderIdentifier(this.record, record);
    // this._renderFcLink(this.record, record);
  }

  /**
   * @method _updateMetadataRows
   * @description update metadata table
   */
  // _updateMetadataRows() {
  //   let metadata = [];

  //   this._addMetadataRow(metadata, 'name', 'Item Name');
  //   this._addMetadataRow(metadata, 'collectionName', 'Collection');
  //   this._addMetadataRow(metadata, 'date', 'Date');
  //   this._addMetadataRow(metadata, 'resourceType', 'Resource Type');

  //   this.metadata = metadata;
  // }

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