import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/iron-pages/iron-pages"
import "./app-filter-panel"
import "../app-collection-info-panel"
import "../../../utils/app-tabs"

import RecordInterface from "../../../interfaces/RecordInterface"
import CollectionInterface from "../../../interfaces/CollectionInterface"

import template from "./app-filters-panel.html"

// init facet filters from template
import config from "../../../../lib/config"
const facetFilters = [];
for( var key in config.elasticSearch.facets ) {
  let c = config.elasticSearch.facets[key];
  facetFilters.push({
    label : c.label,
    type : c.type,
    ignore : c.ignore,
    valueMap : c.valueMap,
    isDollar : c.isDollar,
    includeTypeahead : c.typeahead ? true : false,
    typeaheadField : c.typeahead,
    filter : key
  });
}


class AppFiltersPanel extends Mixin(PolymerElement)
      .with(EventInterface, RecordInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      facetFilters : {
        type : Array,
        value : function() {
          return facetFilters;
        }
      },
      selectedTab : {
        type : String,
        value : '',
        notify: true
      },

      selectedCollection : {
        type : Object,
        value : () => {}
      },

      collectionMode : {
        type : Boolean,
        value : false
      },

      tabs : {
        type : Array,
        value : () => [
          {label : 'Information', value: 'info'},
          {label : 'Filters', value: 'filters'}
        ]
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
  }

  ready() {
    super.ready();
    this._onSelectedCollectionUpdate();
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description CollectionInterface, render the iron-pages and current collection
   */
  _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.selectedTab = 'filters';
      this.collectionMode = false;
      return;
    } 
    
    this.collectionMode = true;
    this.selectedCollection = selected;
    
    if( !this.selectedTab ) this.selectedTab = 'info';
  }

  /**
   * @method _fireToggleDrawer
   * @description called from toggle button, dispatches event for app-search to handle hiding drawer;
   */
  _fireToggleDrawer() {
    this.dispatchEvent(new CustomEvent('toggle-drawer'));
  }

  /**
   * @method _removeCollectionFilter
   * @description fired from hard coded collection filter checkbox.  Remove
   * collection filter when clicked
   */
  _removeCollectionFilter() {
    let searchDoc = this._getCurrentSearchDocument();
    this._removeKeywordFilter(searchDoc, 'isPartOf.@id');
    this._setPaging(searchDoc, 0);
    this.RecordModel.setSearchLocation(searchDoc);
  }
}

customElements.define('app-filters-panel', AppFiltersPanel);