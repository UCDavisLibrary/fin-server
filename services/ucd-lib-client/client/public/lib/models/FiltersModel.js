const {BaseModel} = require('@ucd-lib/cork-app-utils');
const RecordModel = require('./RecordModel');
const CollectionModel = require('./CollectionModel');
const config = require('../config');

/**
 * Listens to record-search and collection-select events and creates the buckets object
 * to render left hand filters
 */
class FiltersModel extends BaseModel {
  
  constructor() {
    super();

    this.updateTimer = -1;
    this.selectedCollection = null;

    this.EventBus.on(RecordModel.store.events.RECORD_SEARCH_UPDATE, e => this._update());
    this.EventBus.on(CollectionModel.store.events.SELECTED_COLLECTION_UPDATE, e => {
      this.selectedCollection = e ? e['@id'] : '';
      this._update();
    });

    this.events = {
      FILTER_BUCKETS_UPDATE : 'filter-buckets-update'
    }

    this.register('FiltersModel');
  }

  _update() {
    if( this.updateTimer !== -1 ) {
      clearTimeout(this.updateTimer);
    }

    this.updateTimer = setTimeout(() => {
      this.updateTimer = -1;
      for( var key in config.elasticSearch.facets ) {
        this._updateFilter(key);
      }
    }, 100);
  }

  _updateFilter(key) {
    let e = RecordModel.store.data.search;
    if( e.state !== 'loaded' ) return;

    setTimeout(() => this._updateFilterAsync(key), 0);
  }

  async _updateFilterAsync(filter) {
    let e = RecordModel.store.data.search;
    if( e.state !== 'loaded' ) return;

    var activeFilters = [];
    if( e.searchDocument.filters[filter] ) {
      activeFilters = e.searchDocument.filters[filter].value || [];
    }

    if( !activeFilters ) {
      return this._fireUpdate({filter, buckets: []});
    }

    let availableFilters = e.payload.aggregations.facets[filter] || {};

    let cid = this.selectedCollection;
    let defaultSearch = await RecordModel.defaultSearch(this.selectedCollection);
    if( cid !== this.selectedCollection ) return; // make sure we haven't updated

    let defaultFacets = defaultSearch.payload.aggregations.facets[filter] || {};

    let ignore = config.elasticSearch.facets[filter].ignore
    if( ignore && ignore.length ) {
      ignore.forEach(key => {
        if( defaultFacets[key] ) delete defaultFacets[key];
      });
    }

    let buckets = [];
    for( var key in defaultFacets ) {
      let item = {
        key,
        sortKey : key.toLowerCase().replace(/\W/g,''),
        doc_count: availableFilters[key] || 0
      }

      if( activeFilters.indexOf(key) > -1 ) {
        item.active = true;
      } else {
        item.active = false;
      }

      item.empty = item.doc_count ? false : true;
      item.disabled = item.active ? false : item.empty;
      buckets.push(item);
    }

    buckets.sort((a,b) => {
      // this is for if there is an active item but it has not results
      // under this condition, we don't want the result buried at
      // the bottom of the filter list, we want it on top so the can
      // (most likely) remove the filter
      if( a.active && a.doc_count === 0 ) return -1;
      if( b.active && b.doc_count === 0 ) return 1;

      if( a.doc_count < b.doc_count ) return 1;
      if( a.doc_count > b.doc_count ) return -1;
      
      if( a.sortKey > b.sortKey ) return 1;
      if( a.sortKey < b.sortKey ) return -1;
      return 0
    });

    this._fireUpdate({filter, buckets});
  }

  _fireUpdate(state) {
    this.emit(this.events.FILTER_BUCKETS_UPDATE, state)
  }

}

module.exports = new FiltersModel();