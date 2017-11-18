import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-tabs/paper-tabs"
import "@polymer/iron-pages/iron-pages"
import "./app-filter-panel"

import ElasticSearchInterface from "../../../interfaces/ElasticSearchInterface"

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
      .with(EventInterface, ElasticSearchInterface) {
  
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
      collectionMode : {
        type : Boolean,
        value : true
      }
    }
  }
}

customElements.define('app-filters-panel', AppFiltersPanel);