import { LitElement} from 'lit';
import render from './citation.tpl.js';

import citations from '../../lib/models/CitationsModel';

/**
 * @class Citation
 * @description Styleized UI component for Citations
 */
export class Citation extends LitElement {
  static get properties() {
    return {
      // count : {type : String},
      // choices: { type : Array },
      record: {type : Object},
      citations : {type : Array},
      selectedCitation : {type : Object}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    
    this.record = {};
    this.citations = [];
    this.selectedCitation = {};
    
  }

  async updated() {
    if( !this.record || this.citations.length ) return;

    let newCitations = [];

    newCitations.push({
      type : 'mla',
      text : await citations.renderEsRecord(this.record, 'mla')
    });
    newCitations.push({
      type : 'apa',
      text : await citations.renderEsRecord(this.record, 'apa')
    });
    newCitations.push({
      type : 'chicago',
      text : await citations.renderEsRecord(this.record, 'chicago')
    });

    this.citations = newCitations;
    this.selectedCitation = newCitations.filter(c => c.type === 'apa')[0];
  }

  _citeChange(e) {
    this.selectedCitation = this.citations.filter(c => c.type === e.target.value)[0];
  }

  async _copyCiteText(e) {
    try {
      await navigator.clipboard.writeText(this.shadowRoot.querySelector('.csl-entry').innerHTML);
    } catch (err) {
      console.error('Failed to copy citation: ', err);
    }
  }

}

customElements.define('app-citation', Citation);
