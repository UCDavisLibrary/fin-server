const clone = require('clone');
const uuid = require('uuid');

let API;

class JsonLdUtils {

  constructor(api) {
    API = api;
  }

  /**
   * @method patchJsonLd
   * @description given a path as well as insert and delete in JSON-LD format, will create
   * a sparql query and apply patch.  Note, any uri's in the insert or delete objects should
   * be uncompacted, ie full uri's.
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {Object} options.insert properties to insert
   * @param {Object} options.delete properties to delete (if they exist)
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   */
  async patch(options) {
    if( !options.headers ) options.headers = {};
    let orgOptions = clone(options);

    options.headers.Accept = API.RDF_FORMATS.JSON_LD;
    let response = await API.get(options);
    if( !response.checkStatus(200) ) {
      return response.setError('Unable to access path: '+options.path);
    }

    let orgJsonLd = this.getByRdfType(response.last.body, API.FEDORA_TYPES.RESOURCE);
    if( !orgJsonLd ) {
      return response.setError('Unable to find type Resource in rdf response');
    }

    let fakeUrl = 'http://'+uuid.v4();

    // new we edit a clone of original
    let newJsonLd = clone(orgJsonLd);

    // remove properties
    if( options.delete ) {
      for( var uri in options.delete ) {
        // uri doesn't exist in current object
        if( !newJsonLd[uri] ) continue;

        // make sure we have an array
        if( !Array.isArray(options.delete[uri]) ) {
          options.delete[uri] = [options.delete[uri]];
        }

        options.delete[uri].forEach(obj => {
          // find which term type we are trying to delete, id or value
          let term, isString = false;

          if( typeof obj === 'string' ) {
            isString = true;
          } else if( obj['@id'] ) {
            term = '@id';
            obj['@id'] = appendBaseUrl(obj['@id'], fakeUrl);
          } else if( obj['@value'] ) {
            term = '@value';
          }

          // didn't find a term, badness
          if( !term && !isString ) return;

          // see if the term exists in current object
          let index = newJsonLd[uri].findIndex(item => {
            if( isString ) return item === obj;
            else return item[term] === obj[term];
          });
          
          // if it exists, remove
          if( index > -1 ) newJsonLd[uri].splice(index, 1);
        });

        // if we have removed all terms of this type, delete uri
        if( newJsonLd[uri].length === 0 ) {
          delete newJsonLd[uri];
        }
      }
    }

    if( options.insert ) {
      for( var uri in options.insert ) {

        // make sure we have an array
        if( !Array.isArray(options.insert[uri]) ) {
          options.insert[uri] = [options.insert[uri]];
        }

        // uri doesn't exist in current object, just add
        if( !newJsonLd[uri] ) {
          options.insert[uri].forEach(obj => {
            if( obj['@id'] ) {
              obj['@id'] = appendBaseUrl(obj['@id'], fakeUrl);
            }
          });

          newJsonLd[uri] = options.insert[uri];
          continue;
        }

        // we need to make sure we aren't adding repeats
        options.insert[uri].forEach(obj => {
          // find which term type we are trying to insert, id or value
          let term, isString = false;

          if( typeof obj === 'string' ) {
            isString = true;
          } else if( obj['@id'] ) {
            term = '@id';
            obj['@id'] = appendBaseUrl(obj['@id'], fakeUrl);
          } else if( obj['@value'] ) {
            term = '@value';
          }

          // see if the term exists in current object
          let index = newJsonLd[uri].findIndex(item => {
            if( isString ) return item === obj;
            else return item[term] === obj[term];
          });

          if( index === -1 ) {
            newJsonLd[uri].push(obj);
          }
        });
      }
    }

    let orgTtl = await API.transform.jsonldToTurtle(orgJsonLd);
    let newTtl = await API.transform.jsonldToTurtle(newJsonLd);
    let sparql = await API.transform.diffToSparql(orgTtl, newTtl);

    sparql = sparql.replace(fakeUrl, '');
    
    options = clone(orgOptions);
    options.content = sparql;
    response.appendResponse(await API.patch(options));
    if( !response.checkStatus(204) ) {
      response.setError('Failed to update container');
    }

    return response;
  }

  /**
   * @method getByRdfType
   * @description given jsonld data and a fedora type, return the first object
   * in array that is of the type
   * 
   * @param {Array} jsonld 
   * @param {String} type
   * 
   * @returns {Object} 
   */
  getByRdfType(jsonld, type) {
    if( typeof jsonld === 'string' ) {
      jsonld = JSON.parse(jsonld);
    }

    if( !Array.isArray(jsonld) ) {
      if( !jsonld['@type'] ) return null;
      if( jsonld['@type'].indexOf(type) > -1 ) return jsonld;
      return null;
    }

    for( var i = 0; i < jsonld.length; i++ ) {
      let item = jsonld[i];
      if( !item['@type'] ) continue;
      if( item['@type'].indexOf(type) > -1 ) {
        return item;
      }
    }

    return null;
  }

}

// if relative url, our transform tools want full url
function appendBaseUrl(uri, fake) {
  if( uri.match(/^(http:|urn:)/) ) return uri;
  return fake+uri;  
}

module.exports = JsonLdUtils;