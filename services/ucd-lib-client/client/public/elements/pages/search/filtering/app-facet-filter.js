import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import ElasticSearchInterface from '../../../interfaces/ElasticSearchInterface'
import template from './app-facet-filter.html'

import "./app-facet-checkbox"

class AppFacetFilter extends Mixin(PolymerElement)
  .with(EventInterface, ElasticSearchInterface) {

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
        value : []
      },
      buckets : {
        type : Array,
        value : []
      },
      activeFilters : {
        type : Array,
        value : []
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

  _onDefaultEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.buckets = e.payload.aggregations[this.filter].buckets;

    if( this.ignore && this.ignore.length ) {
      this.ignore.forEach(key => {
        let index = this.buckets.findIndex(bucket => bucket.key === key);
        if( index > -1 ) this.buckets.splice(index, 1);
      });
    }

    this._updateActiveFilters();
  }

  _onEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    var query = e.query.query;
    var activeFilters = [];

    if( query && 
        query.bool && 
        query.bool.filter ) {
      
      var arr = query.bool.filter;

      for( var i = 0; i < arr.length; i++ ) {
        if( arr[i].terms[this.filter] ) {
          activeFilters = arr[i].terms[this.filter];
        }
      }
    }

    this.activeFilters = activeFilters;
    this._updateActiveFilters();
  }

  _updateActiveFilters() {
    if( !this.activeFilters ) return;

    this.buckets = this.buckets.map(item => {
      item.active = (this.activeFilters.indexOf(item.key) > -1) ? true : false;
      return Object.assign({}, item);
    });

    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {
          show: (this.buckets.length !== 0)
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
  }

  removeFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];
    this._esRemoveKeywordFilter(this.filter, item.key);
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);