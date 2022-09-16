import { LitElement } from 'lit-element';
import render from "./app-top-active-filters.tpl.js"
import config from "../../../../lib/config"

export default class AppTopActiveFilters extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      activeFilters : {type : Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.filters = {};
    this.activeFilters = [];

    this._injectModel('FiltersModel', 'RecordModel');
  }

  /**
   * @method _onFilterBucketsUpdate
   * @description bound the FiltersModel filter-buckets-update event
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    let active = [];
    this.currentFilters = e.searchDocument.filters || {};
    
    for( let key in this.currentFilters ) {
      let filter = this.currentFilters[key];

      if( filter.type === 'keyword' ) {
        this.currentFilters[key].value.forEach(value => {
          active.push({
            bucket : key,
            type : 'keyword',
            value : value,
            label :  this._getLabel(key, value)
          });
        });
      } else if( filter.type === 'range' ) {
        let value = this.currentFilters[key].value;
        active.push({
          bucket : key,
          type : 'range',
          value : value,
          label :  value.gte+' to '+value.lte
        });
      }
    }

    active.sort((a, b) => a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1);

    this.activeFilters = active;
    this.style.display = active.length ? 'block' : 'none';
  }

  _getLabel(bucket, label) {
    let conf = config.elasticSearch.facets[bucket] || {};
    if( !conf.valueMap ) return label;
    if( typeof conf.valueMap === 'object' ) {
      return conf.valueMap[label] || label;
    }
    return conf.valueMap(label);
  }

  /**
   * @method _onRemoveFilterClicked
   * @description bound to remove filter button click event
   * 
   * @param {Element} e 
   */
  _onRemoveFilterClicked(e) {
    let item = this.activeFilters.splice(parseInt(e.currentTarget.getAttribute('index')), 1)[0];

    let searchDoc = this.RecordModel.getCurrentSearchDocument();
    this.RecordModel.setPaging(searchDoc, 0);
    if( item.type === 'keyword') {
      this.RecordModel.removeKeywordFilter(searchDoc, item.bucket, item.value);
    } else if( item.type === 'range' ) {
      this.RecordModel.removeRangeFilter(searchDoc, item.bucket);
    }
    this.RecordModel.setSearchLocation(searchDoc);

    this.requestUpdate();
  }

}

customElements.define('app-top-active-filters', AppTopActiveFilters);
