const es = require('../lib/esClient');
const config = require('../config');
const ElasticSearchModel = require('./elasticsearch');

class ApplicationsModel extends ElasticSearchModel {

  /**
   * @method get
   * @description get application
   * 
   * @returns {Promise} resolves to array for application graph
   */
  async get(appname) {
    let results = await this.esSearch({
      query : {
        bool : {
          filter : [
            {term : {'applicationId' : '/application/'+appname}},
          ]
        }
      },
      size : 10000
    });

    results = results.hits.hits.map(item => item._source);

    let tmp = [];
    for( let container of results ) {
      if( !container['@type'].includes('http://digital.ucdavis.edu/schema#ApplicationContainer') ) {
        continue;
      }

      let featuredProperties = Object.keys(container)
        .filter(key => key.match(/http:\/\/digital\.ucdavis\.edu\/schema#\/featured.*/));

      for( let prop of featuredProperties ) {
        let items = asArray(container[prop])
          .filter(item => !item['@id'].match(/^\/application/));
      
        for( let featured of items ) {
          let result = await es.get({
            index : config.elasticsearch.collection.alias,
            type: '_all',
            id : featured['@id']
          });

          tmp.push(result._source);
        }
      }

      let items = asArray(container.applicationText)
        .filter(item => !item['@id'].match(/^\/application/));
      
      for( let featured of items ) {
        let result = await es.get({
          index : config.elasticsearch.record.alias,
          type: '_all',
          id : featured['@id']
        });

        tmp.push(result._source);
      }
    }
    return [...results, ...tmp];
  }

    /**
   * @method esSearch
   * @description search the elasticsearch application using
   * es search document
   * 
   * @param {Object} body elasticsearch search body
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esSearch(body = {}) {
    return es.search({
      index : config.elasticsearch.application.alias,
      body : body
    });
  }

}

function asArray(val) {
  if( val === undefined ) return [];
  if( Array.isArray(val) ) return val;
  return [val];
}

module.exports = new ApplicationsModel();