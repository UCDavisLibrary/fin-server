const {BaseModel} = require('@ucd-lib/cork-app-utils');
const config = require('../config');

class ElasticSearchModel extends BaseModel {

  constructor() {
    super();
    this.defaultTextFields = ['title', 'description'];

    this.facets = {};
    for( var key in config.elasticSearch.facets ) {
      this.facets[key] = {
        type : config.elasticSearch.facets[key].type
      }
    }
  }

  /**
   * @method emptySearchDocument
   * @description return a base searchDocument
   * 
   * @returns {Object}
   */
  emptySearchDocument() {
    return {
      text : '',
      filters : {},
      sort : null,
      limit : 10,
      offset : 0,
      facets : this.facets
    };
  }

  /**
   * @method urlToSearchDocument
   * @description given array of url parts, create app search document
   * This document can be passed to fromSerializedToEsBody to create es
   * search document
   * 
   * @param {Array} urlParts array of strings from url
   * 
   * @returns {Object} app query object
   */
  urlToSearchDocument(urlParts) {
    if( !Array.isArray(urlParts) ) throw new Error('UrlParts should be an array');
    let searchDoc = this.emptySearchDocument();

    let i = 0;
    while( urlParts.length > 0 ) {
      let part = decodeURIComponent(urlParts.splice(0, 1)[0]);
      
      switch(i) {
        case 0:
          searchDoc.text = part;
          break;
        case 1:
          searchDoc.filters = part ? this._parseUrlFilters(part) : {};
          break;
        case 2:
          searchDoc.sort = part ? JSON.parse(part) : null;
          break;
        case 3:
          searchDoc.limit = part ? parseInt(part) : 10;
          break;
        case 4:
          searchDoc.offset = part ? parseInt(part) : 0;
          break;
      }

      i++;
    }

    return searchDoc;
  }

  /**
   * @method _parseUrlFilters
   * @private
   * @description given the serialized url filters, create the filters object
   * 
   * @param {String} txt url filters
   * 
   * @returns {Object} app filters object
   */
  _parseUrlFilters(txt = '') {
    let filters = {};
    let arr = JSON.parse(txt);
    arr.forEach(filter => {
      filters[filter[0]] = this._setUrlFilterOp({
        type : this._parseUrlFilterType(filter[1]),
        value : this._parseUrlFilterValue(filter)
      }, filter[1])
    });
    return filters;
  }

  _setUrlFilterOp(filter, op) {
    if( op !== 'range' ) {
      filter.op = op; 
    }
    return filter;
  }

  _parseUrlFilterType(type) {
    if( type === 'or' || type === 'and' ) return 'keyword';
    return type;
  }

  _parseUrlFilterValue(filters) {
    if( filters[1] === 'range' ) {
      return filters[2];
    }  
    return filters.splice(2, filters.length);
  }

  /**
   * @method searchDocumentToUrl
   * @description given a app search document, create the url representation
   * 
   * @param {Object} searchDocument app search document
   * 
   * @return {String} url path string
   */
  searchDocumentToUrl(searchDocument, allowSpecial=false) {
    let filters = [];
    if( searchDocument.filters ) {
      for( var attr in searchDocument.filters ) {
        let filter = searchDocument.filters[attr];
        let arr = [attr, filter.op || filter.type];

        if( Array.isArray(filter.value) ) arr = arr.concat(filter.value);
        else arr.push(filter.value);

        filters.push(arr);
      }
    }

    // special collection url
    if( allowSpecial &&
        !searchDocument.text &&
        !searchDocument.sort &&
        !searchDocument.offset &&
        filters.length === 1 && 
        searchDocument.limit === 10 &&
        filters[0].length === 3 &&
        // filters[0][0] === 'isPartOf.@id' &&
        filters[0][0] === 'collectionId' &&
        filters[0][1] === 'or' &&
        filters[0][2].match(/^\/collection\//) ) {
      return filters[0][2];
    }

    return [
      encodeURIComponent(searchDocument.text),
      encodeURIComponent(JSON.stringify(filters)),
      encodeURIComponent(searchDocument.sort ? JSON.stringify(searchDocument.sort) : ''),
      searchDocument.limit || '',
      searchDocument.offset || ''
    ].join('/')
  }

  /**
   * @method setSort
   * @description set the search sort order. Will reset offset
   * and preform query.
   * 
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-sort.html#search-request-sort
   * 
   * @param {Object} searchDocument search document to update
   * @param {String|Object} attr either attribute to sort on or sort object.  if not provide
   * sort is removed from search.
   * @param {String} order of attr is string, then provide order (asc or desc)
   * 
   * @return {Object} searchDocument
   */
  setSort(searchDocument, attr, order) {
    if( !attr ) searchDocument.sort = null;
    else if( typeof attr === 'object' ) searchDocument.sort = key;
    else if( order ) searchDocument.sort = {[attr]: order};

    searchDocument.offset = 0;

    return searchDocument;
  }

  /**
   * @method setPaging
   * @description set the paging offset and limit.  Limit is optional.
   * Will reset offset and preform query.
   * 
   * @param {Object} searchDocument search document to update
   * @param {Number} offset 
   * @param {Number} limit 
   * 
   * @return {Promise} service query promise
   */
  setPaging(searchDocument, offset, limit) {
    if( offset !== undefined ) searchDocument.offset = offset;
    if( limit !== undefined ) searchDocument.limit = limit;

    return searchDocument;
  }

  /**
   * @method setTextFilter
   * @description set the text search string.  Will reset offset
   * and preform query.
   * 
   * @param {Object} searchDocument search document to update
   * @param {String} text text string to search on
   * 
   * @return {Promise} service query promise
   */
  setTextFilter(searchDocument, text) {
    searchDocument.text = text;
    return searchDocument;
  }

  /**
   * @method clearFilters
   * @description clear all text and attribute filters.  resets offset and
   * preforms query.
   * 
   * @param {Object} searchDocument search document to update
   * 
   * @return {Promise} service query promise
   */
  clearFilters(searchDocument) {
    searchDocument.text = '';
    searchDocument.filters = {};
    return searchDocument;
  }

  /**
   * @method appendKeywordFilter
   * @description append keyword attribute filter to query.  Will reset offset
   * and preform query.
   * 
   * @param {Object} searchDocument search document to update
   * @param {String} attr attribute to filter
   * @param {String} value value of attribute to filter on
   * 
   * @return {Promise} service query promise
   */
  appendKeywordFilter(searchDocument, attr, value, op = 'or') {
    if( !searchDocument.filters[attr] ) {
      searchDocument.filters[attr] = {
        type : 'keyword',
        op : op,
        value : [value]
      }
    } else {
      searchDocument.filters[attr].value.push(value);
    }

    return searchDocument;
  }

  setKeywordFilter(searchDocument, attr, value, op = 'or') {
    searchDocument.filters[attr] = {
      type : 'keyword',
      op : op,
      value : [value]
    }
    return searchDocument;
  }

  /**
   * @method removeKeywordFilter
   * @description remove keyword attribute filter from query. Will reset offset
   * and preform query.
   *  
   * @param {Object} searchDocument search document to update
   * @param {String} attr attribute to remove
   * @param {String} value value of attribute to remove
   * 
   * @return {Promise} service query promise
   */
  async removeKeywordFilter(searchDocument, attr, value) {
    if( !searchDocument.filters[attr] ) return searchDocument;

    if( value === undefined ) {
      delete searchDocument.filters[attr];
    } else {
      let filter = searchDocument.filters[attr];
      let index = filter.value.indexOf(value);
      if( index === -1 ) return searchDocument;
  
      filter.value.splice(index, 1);
      if( filter.value.length === 0 ) {
        delete searchDocument.filters[attr];
      }
    }

    return searchDocument;
  }

   /**
   * @method appendRangeFilter
   * @description add range attribute filter from query. Will reset offset
   * and preform query.
   * 
   * @param {Object} searchDocument search document to update
   * @param {String} attr attribute to add
   * @param {Object} value range value. ex {gte: 1931, lte: 1960}
   * 
   * @return {Promise} service query promise
   */
  appendRangeFilter(searchDocument, attr, value) {    
    searchDocument.filters[attr] = {
      type : 'range',
      value
    }
    return searchDocument;
  }

  /**
   * @method removeRangeFilter
   * @description remove range attribute filter from query. Will reset offset
   * and preform query
   * 
   * @param {Object} searchDocument search document to update
   * @param {String} attr attribute to remove
   * 
   * @return {Promise} service query promise
   */
  removeRangeFilter(searchDocument, attr) {
    if( !searchDocument.filters[attr] ) return searchDocument;
    delete searchDocument.filters[attr];
    return searchDocument;
  }

}

module.exports = ElasticSearchModel;