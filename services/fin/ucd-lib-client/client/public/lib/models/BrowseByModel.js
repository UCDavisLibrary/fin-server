const {BaseModel} = require('@ucd-lib/cork-app-utils');
const BrowseByService = require('../services/BrowseByService');
const BrowseByStore = require('../stores/BrowseByStore');

/**
 * @class BrowseByModel
 * @description base model for the browse by [facet] pages
 */
class BrowseByModel extends BaseModel {

  constructor() {
    super();

    this.store = BrowseByStore;
    this.service = BrowseByService;
      
    this.register('BrowseByModel');
  }


  /**
   * @method getFacets
   * @description get facets for all collections sorted and
   * paginated 
   * 
   * @param {String} property record property to get facet for
   * @param {String} type Optional. type of aggregation (normally facet)
   * 
   * @returns {Promise} 
   */
  async getFacets(property, type='facet') {
    let state = this.store.data.facets[property];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getFacets(property, type);
      }
    } catch(e) {
      console.error('Failed to load facets', e);
    }

    return this.store.data.facets[property];
  }


}

module.exports = new BrowseByModel();