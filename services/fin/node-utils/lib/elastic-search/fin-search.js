
/**
 */
class FinSearch {

  constructor() {
    this.DEFAULT_OFFSET = 0;
    this.DEFAULT_LIMIT = 10;
  }

  /**
   * @method esResultToDamsResult
   * @description given a es result object, return a ucd dams
   * result object
   * 
   * @param {Object} esResult 
   * @param {Object} searchDocument 
   */
  esResultToDamsResult(esResult, searchDocument = {}) {
    let response = {
      total : 0,
      offset : searchDocument.offset,
      limit : searchDocument.limit,
      results : [],
      aggregations : {
        facets : {},
        ranges : {}
      },
    }

    if( esResult.hits ) {
      response.total = esResult.hits.total;

      if( esResult.hits.hits ) {
        response.results = esResult.hits.hits
          .map(item => {
            item._source._score = item._score;
            return item._source;
          });
      }
    }

    if( esResult.aggregations ) {
      for( let facet in esResult.aggregations ) {
        

        // it's a facet filter, just add
        if( esResult.aggregations[facet].buckets ) {
          response.aggregations.facets[facet] = {};
          esResult.aggregations[facet].buckets.forEach(item => {
            response.aggregations.facets[facet][item.key] = item.doc_count;
          });
        } else {
          // check for range filter
          facet = facet.replace(/-(min|max)$/, '');

          // we are going to check
          //  - the type in the ucd dams document is of range
          //  - we have the -min and -max keys in the es aggs result
          //  - the es aggs result range has a value (ie ignore null)
          //  - we haven't already added the range (cause you will hit this twice)
          if( !response.aggregations.ranges[facet] &&
              searchDocument.facets[facet] &&
              searchDocument.facets[facet].type === 'range' && 
              esResult.aggregations[facet+'-min'] &&
              esResult.aggregations[facet+'-max'] &&
              esResult.aggregations[facet+'-max'].value ) {

                response.aggregations.ranges[facet] = {
              min : esResult.aggregations[facet+'-min'].value,
              max : esResult.aggregations[facet+'-max'].value,
            };
          }
        }
      }
    }

    return response;
  }

  /**
   * @method searchDocumentToEsBody
   * @description transform ucd dams search query to elastic search body
   * 
   * @param {Object} query
   * @param {Object} query.filters query filters
   * @param {String} query.text text search
   * @param {Array} query.textFields fields to include in text search
   * @param {Object} query.facets facet to return with query
   * @param {Number} query.offset
   * @param {Number} query.limit
   * @param {Object} query.sort 
   * @param {Boolean} noLimit defaults to false
   */
  searchDocumentToEsBody(query, noLimit=false) {
    let esBody = {
      from : query.offset !== undefined ? query.offset : 0,
      size : query.limit !== undefined ? query.limit : 10
    }
    if( !query.limit && noLimit === true ) {
      esBody.size = 10000 - esBody.from;
    }

    let aggs = this._getEsAggs(query.facets);
    if( Object.keys(aggs).length ) esBody.aggs = aggs;

    if( query.sort ) {
      esBody.sort = query.sort;
    } else {
      esBody.sort = [
        '_score',
        { 'node.name.raw' : 'asc' }
      ]
    }

    if( !query.text && !query.filters ) return esBody;


    esBody.query = {
      bool : {}
    }

    // append a text 'multi_match' search
    if( query.text && query.textFields ) {
      esBody.query.bool.must = [{
        multi_match : {
          query : query.text,
          fields : query.textFields
        }
      }];
    }

    if( !query.filters ) return esBody;

    let range = {};
    let rangeWithNull = [];
    let keywords = [];
    let prefix = {};

    // loop all provided filters, splitting into keyword
    // and range filters
    for( var attr in query.filters ) {
      let attrProps = query.filters[attr];
      
      // the attribute is a keyword facet
      if( attrProps.type === 'keyword' ) {

        // or query, simply add terms as array
        if( attrProps.op === 'or' ) {
          keywords.push({
            terms : {
              [attr] : attrProps.value
            }
          });

        // and query, add a new term for each keyword
        } else if( attrProps.op === 'and' ) {
          attrProps.value.forEach(val => {
            keywords.push({
              term : {
                [attr] : val
              }
            });
          });
        }
      
      // the attribute is a range facet
      } else if( attrProps.type === 'range' ) {

        // we want to include null values in the range filter        
        if( attrProps.value.includeNull ) {
          
          let r = Object.assign({}, attrProps.value);
          let nullValue = r.includeNull;
          delete r.includeNull;

          rangeWithNull.push(this._getRangeWithNullQuery(r, attr));
        } else {
          if( attrProps.value.includeNull !== undefined ) {
            delete attrProps.value.includeNull;
          }
          range[attr] = attrProps.value;
        }
      } else if( attrProps.type === 'prefix' ) {

        prefix[attr] = attrProps.value;

      }
    }

    // if we found keyword filters, append the 'filter' attribute
    if( keywords.length > 0 ) {
      esBody.query.bool.filter = keywords;
    }

    // if we found range filters, append.  This uses query.bool.must
    // just like text search, so check to see if query.bool.must was already
    // created
    if( Object.keys(range).length > 0 ) {
      if( !esBody.query.bool.must ) {
        esBody.query.bool.must = [];
      }

      esBody.query.bool.must.push({range});
    }

    // just like above, range with null uses query.bool.must, so repeat steps
    if( rangeWithNull.length > 0 ) {
      if( !esBody.query.bool.must ) {
        esBody.query.bool.must = [];
      }

      esBody.query.bool.must = esBody.query.bool.must.concat(rangeWithNull);
    }

    if( Object.keys(prefix).length > 0 ) {
      if( !esBody.query.bool.must ) {
        esBody.query.bool.must = [];
      }
      esBody.query.bool.must.push({prefix});
    }

    return esBody;
  }

  /**
   * @method _getEsAggs
   * @description given a ucd dams search document facets object, return
   * a elastic search aggregation object.
   * 
   * @param {Object.<string, {type: string, max: number}>} facets hash of facet key to facet description object
   */
  _getEsAggs(facets = {}) {
    let aggs = {};

    for( var key in facets ) {
      if( facets[key].type === 'facet' ) {
        aggs[key] = {
          terms : { 
            field : key,
            size : facets[key].max || 1000
          }
        }
      } else if( facets[key].type === 'range' ) {
        aggs[key+'-min'] = {
          min : { 
            field : key
          }
        }
        aggs[key+'-max'] = {
          max : { 
            field : key
          }
        }
      }
    }

    return aggs;
  }

  /**
   * @method _getRangeWithNullQuery
   * @description get the part of the es query document for a range
   * value but allowing nulls (so range value is either in range
   * or not present).
   * 
   * @param {Object} rangeQuery 
   * @param {String} attr 
   * 
   * @returns {Object}
   */
  _getRangeWithNullQuery(rangeQuery, attr) {
    return {
      bool : {
        should : [
          {
            range: {
              [attr] : rangeQuery
            }
          },
          {
            bool: {
              must_not: {
                exists: {
                  field: attr
                }
              }
            }
          }
        ]
      }
    }
  }

}

module.exports = new FinSearch();