import {PolymerElement} from "@polymer/polymer/polymer-element"

import RecordInterface from '../../../interfaces/RecordInterface'
import CollectionInterface from '../../../interfaces/CollectionInterface'

import template from './app-facet-filter.html'

import "./app-facet-checkbox"
import "@polymer/iron-list"

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
        value : null,
      },
      buckets : {
        type : Array,
        value : () => []
      },
      bucketsIronList : {
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
    this.updateTimer = -1;
  }

  resize() {
    requestAnimationFrame(() => {
      this.$.list.fire('iron-resize');
    });
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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


    var activeFilters = [];
    if( e.searchDocument.filters[this.filter] ) {
      activeFilters = e.searchDocument.filters[this.filter].value;
    }
    this.activeFilters = activeFilters;

    this.availableFilters = e.payload.aggregations.facets[this.filter] || {};

    
    this._updateActiveFilters();
  }

  _updateActiveFilters() {
    if( this.updateTimer !== -1 ) {
      clearTimeout(this.updateTimer);
    }

    this.updateTimer = setTimeout(() => {
      this.updateTimer = -1;
      this._updateActiveFiltersAsync();
    }, 100);
  }

  async _updateActiveFiltersAsync() {
    if( !this.activeFilters ) return;

    // grab default aggregations for collection
    let cid = this.selectedCollection;
    let result = await this._defaultRecordSearch(this.selectedCollection);
    if( cid !== this.selectedCollection ) return; // make sure we haven't updated
    this.default = result;

    let defaultFacets = this.default.payload.aggregations.facets[this.filter] || {};

    if( this.ignore && this.ignore.length ) {
      this.ignore.forEach(key => {
        if( defaultFacets[key] ) delete defaultFacets[key];
      });
    }

    let buckets = [];
    for( var key in defaultFacets ) {
      let item = {
        key,
        sortKey : key.toLowerCase().replace(/\W/g,''),
        doc_count: this.availableFilters[key] || 0
      }

      if( this.activeFilters.indexOf(key) > -1 ) {
        item.active = true;
        this._notifySelected(true, key);
      } else {
        item.active = false;
        this._notifySelected(false, key);
      }

      item.empty = item.doc_count ? false : true;

      buckets.push(item);
    }

    buckets.sort((a,b) => {
      if( a.doc_count < b.doc_count ) return 1;
      if( a.doc_count > b.doc_count ) return -1;
      if( a.sortKey > b.sortKey ) return 1;
      if( a.sortKey < b.sortKey ) return -1;
      return 0
    })

    if( Object.keys(buckets).length > 50 ) {
      this.$.list.style.display = 'block';
      this.bucketsIronList = buckets;
      this.buckets = [];
    } else {
      this.$.list.style.display = 'none';
      this.bucketsIronList = [];
      this.buckets = buckets;
    }

    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {
          show: (buckets.length !== 0)
        }
      })
    );
  }

  /**
   * @method onParentFilterClicked
   * @description called from parent toggle panel when selected filter
   * is clicked
   * 
   * @param {String} key filter key 
   */
  onParentFilterClicked(key) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._removeKeywordFilter(searchDoc, this.filter, key);
    this._searchRecords(searchDoc);

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
    if( item.empty ) return;

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._appendKeywordFilter(searchDoc, this.filter, item.key);
    this._searchRecords(searchDoc);

    this._notifySelected(true, item.key);
  }



  removeFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._removeKeywordFilter(searchDoc, this.filter, item.key);
    this._searchRecords(searchDoc);

    this._notifySelected(false, item.key);
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);