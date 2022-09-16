import {PolymerElement} from "@polymer/polymer/polymer-element"

import FiltersInterface from '../../../interfaces/FiltersInterface'
import RecordInterface from '../../../interfaces/RecordInterface'

import template from './app-facet-filter.html'

import clone from "clone"
import "./app-facet-checkbox"
import "@polymer/iron-list"

class AppFacetFilter extends Mixin(PolymerElement)
  .with(EventInterface, FiltersInterface, RecordInterface) {

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
      ironListActive : {
        type : Boolean,
        value : false
      },
      notified : {
        type : Object,
        value : () => ({})
      },
      includeTypeahead : {
        type : Boolean,
        value : false
      },
      typeaheadField : {
        type : String,
        value : ''
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

  _onFilterBucketsUpdate(e) {
    if( e.filter !== this.filter ) return;

    e.buckets.forEach(item => {
      if( this.notified[item.key] && !item.active ) {
        this._notifySelected(item.active, item.key);
      } else if( !this.notified[item.key] && item.active ) {
        this._notifySelected(item.active, item.key);
      }
    });

    if( Object.keys(e.buckets).length > 50 ) {
      this.$.list.style.display = 'block';
      let top = this.$.list.scrollTop;

      this.bucketsIronList = e.buckets;
      this.buckets = [];
      this.ironListActive = true;

      // make sure we don't change scroll position
      this.$.list.scrollTop = top;
      requestAnimationFrame(() => {
        this.$.list.scrollTop = top;
      });
    } else {
      this.$.list.style.display = 'none';
      this.bucketsIronList = [];
      this.buckets = e.buckets;
      this.ironListActive = false;
    }

    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {
          show: (e.buckets.length !== 0)
        }
      })
    );
  }

  getBuckets() {
    return this.ironListActive ? this.bucketsIronList : this.buckets;
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
    this.RecordModel.setSearchLocation(searchDoc);

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
    if( !selected && this.notified[key] ) {
      delete this.notified[key];
    } else if( selected ) {
      this.notified[key] = true;
    }

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
    let buckets = this.getBuckets();
    let item = buckets[parseInt(e.currentTarget.getAttribute('index'))];
    if( item.empty ) return;

    // reset typeahead incase it was active
    this.$.typeahead.value = '';
    if( this.originalBuckets ) {
      this.originalBuckets = null;
    }

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._appendKeywordFilter(searchDoc, this.filter, item.key);
    this.RecordModel.setSearchLocation(searchDoc);

    this._notifySelected(true, item.key);
  }

  removeFilter(e) {
    let buckets = this.getBuckets();
    let item = buckets[parseInt(e.currentTarget.getAttribute('index'))];

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._removeKeywordFilter(searchDoc, this.filter, item.key);
    this.RecordModel.setSearchLocation(searchDoc);

    this._notifySelected(false, item.key);
  }

  /**
   * @method _onTypeaheadKeyup
   * @description bound to typeahead text input keyup event
   * 
   * @param {Object} e 
   */
  _onTypeaheadKeyup() {
    this._updateTypeahead();
  }

  _updateTypeahead() {
    let text = this.$.typeahead.value;
    if( !text ) {
      if( this.originalBuckets ) {

        if( this.ironListActive ) {
          this.bucketsIronList = this.originalBuckets;
        } else {
          this.buckets = this.originalBuckets;
        }

        this.originalBuckets = null;
      }
      return;
    }

    if( !this.originalBuckets ) {
      this.originalBuckets = [...(this.ironListActive ? this.bucketsIronList : this.buckets)];
    }

    let re = new RegExp('.*'+text.toLowerCase()+'.*', 'i');
    let buckets = this.originalBuckets.filter(item => item.sortKey.match(re) ? true : false);

    if( this.ironListActive ) {
      this.bucketsIronList = buckets;
    } else {
      this.buckets = buckets;
    }
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);