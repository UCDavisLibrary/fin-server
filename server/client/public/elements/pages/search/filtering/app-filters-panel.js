import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-tabs/paper-tabs"
import "@polymer/iron-pages/iron-pages"
import "./app-filter-panel"
import "../app-collection-info-panel"

import ElasticSearchInterface from "../../../interfaces/ElasticSearchInterface"
import CollectionInterface from "../../../interfaces/CollectionInterface"

import template from "./app-filters-panel.html"

// init facet filters from template
import config from "../../../../lib/config"
const facetFilters = [];
for( var key in config.elasticSearch.facets ) {
  facetFilters.push({
    label : config.elasticSearch.facets[key].label,
    type : config.elasticSearch.facets[key].type,
    isDollar : config.elasticSearch.facets[key].isDollar,
    filter : key
  });
}


class AppFiltersPanel extends Mixin(PolymerElement)
      .with(EventInterface, ElasticSearchInterface, CollectionInterface) {
  
  static get template() {
    return template;
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
        value : 'filters'
      },

      selectedCollection : {
        type : Object,
        value : () => {}
      },

      collectionMode : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.selectedTab = 'filters';
      this.collectionMode = false;
      return;
    } 

    
    this.collectionMode = true;
    this.selectedCollection = selected;
    this.selectedTab = 'info';
  }
}

customElements.define('app-filters-panel', AppFiltersPanel);