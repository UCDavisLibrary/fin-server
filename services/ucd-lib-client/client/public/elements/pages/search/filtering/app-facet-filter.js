import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import RecordInterface from '../../../interfaces/RecordInterface'
import CollectionInterface from '../../../interfaces/CollectionInterface'
import template from './app-facet-filter.html'

import "./app-facet-checkbox"

class AppFacetFilter extends Mixin(PolymerElement)
  .with(EventInterface, CollectionInterface, RecordInterface) {

  static get properties() {
    return {
      label : {
        type : String,
        value : ''
      },
      filter : {
        type : String,
        value : ''
      },
      ignore : {
        type : Array,
        value : () => []
      },
      valueMap : {
        type : Object,
        value : () => {},
      },
      buckets : {
        type : Array,
        value : () => []
      },
      activeFilters : {
        type : Array,
        value : null
      },
      allFilters : {
        type : Array,
        value : null
      }
    };
  }

  constructor() {
    super();
    this.active = true;
  }

  static get template() {
    return template;
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface
   */
  async _onSelectedCollectionUpdate(e) {
    this.selectedCollection = e ? e.id : '';
    this._updateActiveFilters();
  }

  /**
   * @method _onRecordSearchUpdate
   * @description from RecordInterface
   * 
   * @param {*} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    var query = e.query.query;
    var activeFilters = [];

    // if( e.searchDocument.filters[this.filter] ) {
    //   activeFilters = e.searchDocument.filters[this.filter].value;
    // }

    // this.availableFilters = e.availableFilters[this.filter] || {};

    // this.activeFilters = activeFilters;
    this._updateActiveFilters();
  }

  async _updateActiveFilters() {
    if( !this.activeFilters ) return;

    debugger;

    // grab default aggregations for collection
    // let cid = this.selectedCollection;
    // let result = await this._defaultRecordSearch(this.selectedCollection);
    // if( cid !== this.selectedCollection ) return; // make sure we haven't updated
    // this.default = result;

    // let facets = this.default.payload.aggregations.facets[this.filter];

    // if( this.ignore && this.ignore.length ) {
    //   this.ignore.forEach(key => {
    //     if( this.buckets[key] ) delete this.buckets[key];
    //   });
    // }

    // let buckets = 
    // let buckets = this.buckets.map(item => {
    //   item = Object.assign({}, item);

    //   item.doc_count = this.availableFilters[item.key] || 0;

    //   if( this.activeFilters.indexOf(item.key) > -1 ) {
    //     item.active = true;
    //     this._notifySelected(true, item.key);
    //   } else {
    //     item.active = false;
    //     this._notifySelected(false, item.key);
    //   }

    //   item.empty = item.doc_count ? true : false;

    //   return item;
    // });

    // this.buckets = buckets;

    // this.dispatchEvent(
    //   new CustomEvent('update-visibility', {
    //     detail: {
    //       show: (this.buckets.length !== 0)
    //     }
    //   })
    // );
  }

  /**
   * @method onParentFilterClicked
   * @description called from parent toggle panel when selected filter
   * is clicked
   * 
   * @param {String} key filter key 
   */
  onParentFilterClicked(key) {
    this._esRemoveKeywordFilter(this.filter, key);
    this._notifySelected(false, key);
  };

  /**
   * @method _notifySelected
   * @description notify parent of selected/unselected filter
   * 
   * @param {Boolean} selected is the filter selected
   * @param {String} key filter key/label
   */
  _notifySelected(selected, key) {
    this.dispatchEvent(
      new CustomEvent(`${selected ? 'add' : 'remove'}-selected`, {
        detail: {
          label: key
        }
      })
    );
  }

  _toggleFilter(e) {
    if( e.currentTarget.checked ) this.appendFilter(e);
    else this.removeFilter(e);
  }

  appendFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];
    this._esAppendKeywordFilter(this.filter, item.key);
    this._notifySelected(true, item.key);
  }



  removeFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];
    this._esRemoveKeywordFilter(this.filter, item.key);
    this._notifySelected(false, item.key);
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);