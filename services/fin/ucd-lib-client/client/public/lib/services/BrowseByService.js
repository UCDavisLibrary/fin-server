const {BaseService} = require('@ucd-lib/cork-app-utils');
const BrowseByStore = require('../stores/BrowseByStore');

class BrowseByService extends BaseService {

  constructor() {
    super();
    this.store = BrowseByStore;
    this.recordsBaseUrl = '/api/records';
  }

  /**
   * @method getFacets
   * @description Search the records
   * 
   * @param {String} property record property to get facet for
   * @param {String} type Optional. type of aggregation (normally facet)
   * 
   * @returns {Promise}
   */
  getFacets(property, type='facet') {
    let searchDocument = {
      text : '',
      filters : {},
      sort : null,
      limit : 0,
      offset : 0,
      facets : {
        [property] : {type}
      }
    };

    return this.request({
      url : `${this.recordsBaseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      checkCached : () => this.store.data.facets[property],
      onLoading : promise => this.store.setFacetLoading(property,  promise),
      onLoad : result => this.store.setFacetLoaded(property, result.body),
      onError : e => this.store.setFacetError(property, e)
    });
  }

}

module.exports = new BrowseByService();