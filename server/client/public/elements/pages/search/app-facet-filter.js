import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import SearchInterface from '../../interfaces/SearchInterface'
import template from './app-facet-filter.html'

class AppFacetFilter extends Mixin(Polymer.Element)
  .with(EventMixin, SearchInterface) {

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

  static get template() {
    return template;
  }

  ready() {
    super.ready();
    this._onDefaultSearchUpdate(this._getDefaultSearch());
  }

  _onDefaultSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.buckets = e.payload.aggregations[this.filter].buckets;
  }

  _onSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    var query = e.request.query;
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

    this.buckets = this.buckets.map(item => {
      item.active = (activeFilters.indexOf(item.key) > -1) ? true : false;
      return Object.assign({}, item);
    });
  }

  _toggleFilter(e) {
    if( e.currentTarget.checked ) this.appendFilter(e);
    else this.removeFilter(e);
  }

  appendFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];
    this._appendSearchFilter(this.filter, item.key);
  }

  removeFilter(e) {
    var item = this.buckets[parseInt(e.currentTarget.getAttribute('index'))];
    this._removeSearchFilter(this.filter, item.key);
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);