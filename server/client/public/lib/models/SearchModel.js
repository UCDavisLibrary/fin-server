var BaseModel = require('cork-app-utils').BaseModel;
var config = require('../config');
var SearchService = require('../services/SearchService');
var SearchStore = require('../stores/SearchStore');

class SearchModel extends BaseModel {

  constructor() {
    super();
    this.store = SearchStore;
    this.service = SearchService;

    this.from = 0;
    this.size = 50;
    this.sort = {
      key : '',
      order : ''
    }

    this.defaultSearch();

    this.registerIOC('SearchModel');
  }

  /**
   * @method
   * @description Triggers search-update event
   * 
   * @param {Object} body
   * 
   * @returns {Promise}
   */
  async search(body = {}) {
    body.aggs = {};

    body.from = this.from;
    body.size = this.size;

    if( this.sort.key ) {
      body.sort = [{[this.sort.key] : this.sort.order}];
    } else if( body.sort ) {
      delete body.sort;
    }

    this._addFacetsToBody(body);

    return await this.service.search(body);
  }

  async defaultSearch() {
    var body = {
      aggs : {},
      from : 0,
      size : this.size
    };

    return await this.service.defaultSearch(body);
  }

  _addFacetsToBody(body) {
    for( var key in config.facets ) {
      if( config.facets[key].type === 'facet' ) {
        body.aggs[key] = {
          terms : { 
            field : key,
            size : 1000
          }
        }
      } else if( config.facets[key].type === 'range' ) {
        body.aggs[key+'-min'] = {
          min : { 
            field : key
          }
        }
        body.aggs[key+'-max'] = {
          max : { 
            field : key
          }
        }
      }
    }
  }

  getDefaultSearch() {
    var currentState = this.getState().defaultSearch;
  }

  getSearch() {
    return this.store.getSearch();
  }

  getDefaultSearch() {
    return this.store.getDefaultSearch();
  }

  getSuggest() {
    return this.store.getSuggest();
  }

  setSort(key, order, exec) {
    this.sort = {key, order};
    if( exec ) this.search(this.getSearch().request);
  }

  setPaging(from = 0, size = 10, exec) {
    this.from = from;
    this.size = size;

    if( exec ) this.search(this.getSearch().request);
  }

  clearFilters() {
    var body = this.getSearch().request;
    if( body.query ) delete body.query;

    this.setPaging(); // reset page
    this.search(body);
    return body;
  }

  appendFilter(key, value, exec) {
    this.ensurePath('query.bool.filter', []);
    var body = this.getSearch().request;

    var arr = body.query.bool.filter;
    var updated = false;

    for( var i = 0; i < arr.length; i++ ) {
      if( arr[i].terms[key] ) {
        arr[i].terms[key].push(value);
        updated = true;
        break;
      }
    }

    if( !updated ) {
      arr.push({
        terms : {
          [key] : [value]
        }
      });
    }

    if( exec ) {
      this.setPaging(); // reset page
      this.search(body);
    }

    return body;
  }

  removeFilter(key, value, exec) {
    this.ensurePath('query.bool.filter', []);
    var body = this.getSearch().request;

    var arr = body.query.bool.filter;

    for( var i = 0; i < arr.length; i++ ) {
      if( arr[i].terms[key] ) {
        if( arr[i].terms[key].indexOf(value) > -1 ) {
          arr[i].terms[key].splice(arr[i].terms[key].indexOf(value), 1);
        }
      }
    }

    this.cleanEmptyLeaves();
    if( exec ) {
      this.setPaging(); // reset page
      this.search(body);
    }

    return body;
  }

  removeRangeFilter(key, exec) {
    this.ensurePath('query.bool.must', []);
    var body = this.getSearch().request;

    for( var i = 0; i < body.query.bool.must.length; i++ ) {
      if( body.query.bool.must[i].range ) {

        if( body.query.bool.must[i].range[key] ) {
          delete body.query.bool.must[i].range[key];
        }

        break;
      }
    }

    this.cleanEmptyLeaves();
    if( exec ) {
      this.setPaging(); // reset page
      this.search(body);
    }

    return body;
  }

  addRangeFilter(key, range, exec) {
    this.ensurePath('query.bool.must', []);
    var body = this.getSearch().request;
    var rangeQuery = this.getOrCreateFromArray(body.query.bool.must, 'range', key);

    rangeQuery[key] = {};
    if( range.min !== undefined ) {
      rangeQuery[key].gte = range.min;
    }
    if( range.max ) {
      rangeQuery[key].lte = range.max;
    }

    if( exec ) {
      this.setPaging(); // reset page
      this.search(body);
    }

    return body;
  }

  // suggest(text, exec) {
  //   this.ensurePath('suggest');
  //   var body = this.getSuggest().request;
  //   body = {suggest: {}};

  //   body.suggest['name-suggest'] = {
  //     prefix : text,
  //     completion : {
  //       field : 'name-suggest',
  //       fuzzy : {}
  //     }
  //   }

  //   this.jstore.setSuggestLoading(body);
  //   ServiceWrapper.call({
  //     store : this.jstore,
  //     request : service.search(body),
  //     onSuccess : this.jstore.setSuggestLoaded,
  //     onError : this.jstore.setSuggestError
  //   });

  //   return this.getSuggest();
  // }

  // removeSuggest(key, exec) {
  //   var body = this.getSearch().request;

  //   if( body.suggest && body.suggest[key] ) {
  //     delete body.suggest[key];
  //   }

  //   this.cleanEmptyLeaves();
  //   if( exec ) this.search(body);

  //   return body;
  // }

  textSearch(text, options = {}) {
    var body = this.getSearch().request;

    this.ensurePath('query.bool.must', []);
    this.removeFromArray(body.query.bool.must, 'multi_match');

    if( !text ) {
      this.cleanEmptyLeaves();
      if( options.exec ) this.search(body);
      return body;
    }

    body.query.bool.must.push({
      multi_match : {
        query : text,
        fields : ['title', 'desciption']
      }
    });
    
    if( options.exec ) {
      this.setPaging(); // reset page
      return this.search(body);
    }

    return body;
  }

  /**
   * Clean query
   * Remove any leaf nodes in object that do not contain information
   */
  cleanEmptyLeaves() {
    var body = this.getSearch().request;
    for( var key in body ) {
      if( typeof body[key] === 'object' ) {
        this._cleanEmptyLeaves(body, key);
      }
    }
  }

  _cleanEmptyLeaves(parent, parentKey) {
    var object = parent[parentKey];

    for( var key in object ) {
      if( Array.isArray(object[key]) ) {
        for( var i = object[key].length-1; i >= 0; i-- ) {
          this._cleanEmptyLeaves(object[key], i);
        }
        if( object[key].length === 0 ) {
          delete object[key];
        }
      } else if( typeof object[key] === 'object' ) {
        this._cleanEmptyLeaves(object, key);
      } else if( object[key] === null || object[key] === undefined ) {
        delete object[key];
      }
    }

    if( Object.keys(object).length === 0 ) {
      if( Array.isArray(parent) ) {
        parent.splice(parent.indexOf(object), 1);
      } else {
        delete parent[parentKey];
      }
    }
  }

  /**
   * Ensure given path string exists in query body
   */
  ensurePath(path, last = {}) {
    var object = this.getSearch().request;
    path.split('.')
        .forEach((part, index, arr) => {
          if( !object[part] ) {
            if( arr.length-1 === index ) object[part] = last;
            else object[part] = {};
          }
          object = object[part];
        });
    

  }

  getOrCreateFromArray(array, type, subtype) {
    for( var i = 0; i < array.length; i++ ) {
      if( array[i][type] ) {
        if( subtype ) {
          if( array[i][type][subtype] ) {
            return array[i][type];
          }
        } else {
          return array[i][type];
        }
      }
    }

    var obj = {
      [type] : {}
    }
    array.push(obj);
    return obj[type];
  }

  removeFromArray(array, type) {
    for( var i = array.length-1; i >= 0; i-- ) {
      if( array[i][type] ) {
        array.splice(i, 1);
      }
    }
  }

}

module.exports = new SearchModel();