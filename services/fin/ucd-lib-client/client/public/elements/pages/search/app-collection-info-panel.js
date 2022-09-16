import {PolymerElement} from "@polymer/polymer/polymer-element"
import {markdown} from "markdown"

import "../record/app-copy-cite"
import template from "./app-collection-info-panel.html"
import CitationsModel from "../../../lib/models/CitationsModel"

class AppCollectionInfoPanel extends Mixin(PolymerElement)
      .with(EventInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      showing : {
        type: Boolean,
        value: false,
        observer : '_onShowingUpdate'
      },
      title : {
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
      },
      citation : {
        type: String,
        value : ''
      },
      citationFormat : {
        type: String,
        value : 'mla'
      },
      engines : {
        type : Array,
        value : []
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.firstShow = true;

    this._injectModel('RecordModel', 'AppStateModel');
  }

  async ready() {
    super.ready();
    this._onSelectedCollectionUpdate(this.AppStateModel.getSelectedCollection());
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called when a collection is selected.
   * This is done by setting a collection filter.
   * 
   * @param {Object} selected currently selected collection 
   */
  async _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.title = '';
      this.$.description.innerHTML = '';
      this.subject = '';
      this.coverage = '';
      this.citation = '';
      return;
    }

    this.collection = selected;
    this.title = selected.name || '';
    this.$.description.innerHTML = markdown.toHTML(selected.description || '');

    if( selected.subject ) {
      this.subject = selected.subject.join(', ');
    } else {
      this.subject = '';
    }

    if( selected.coverage ) {
      this.coverage = selected.coverage.join(', ');
    } else {
      this.selectedCollectionId = selected['@id'];
      let result = await this.RecordModel.defaultSearch(selected['@id']);
      if( result.id !== this.selectedCollectionId ) return; // make sure we haven't updated

      if( result.payload && result.payload.aggregations && result.payload.aggregations.ranges &&
        result.payload.aggregations.ranges.yearPublished ) {
        let yearPublished = result.payload.aggregations.ranges.yearPublished;
        this.coverage = yearPublished.min+' - '+yearPublished.max;
      } else {
        this.coverage = '';
      }
    }

    if( !this.firstShow ) {
      this._onCiteFormatChange();
    }
  }

  async _onShowingUpdate() {
    if( !this.showing ) return;
    if( !this.firstShow ) return;
    this.firstShow = false;

    this.engines = CitationsModel.engineList.map((engine, index) => {
      return {engine, label: CitationsModel.engineListLabels[index]}
    });
    await CitationsModel._loadEngines();
    await this._onCiteFormatChange();
  }

  async _onCiteFormatChange() {
    this.citation = await CitationsModel.renderEsRecord(this.collection, this.$.citeFormatInput.value);
  }

}

customElements.define('app-collection-info-panel', AppCollectionInfoPanel);