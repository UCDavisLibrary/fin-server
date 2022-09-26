const clone = require('clone');
const loadTemplate = require('./templates/load');
const transform = require('./utils/transform');
const assert = require('assert');
let API;




class ApplicationsUtils {

  constructor(api) {
    API = api;
    this.ROOT_PATH = '/';
    this.ROOT_SLUG = 'application'

    this.TYPES = {
      APPLICATION_CONTAINER : 'http://digital.ucdavis.edu/schema#ApplicationContainer',
      APPLICATION_TEXT_CONTAINER : 'http://digital.ucdavis.edu/schema#ApplicationTextContainer',
      FEATURED_CONTAINER : 'http://digital.ucdavis.edu/schema#FeaturedContainer',
      FEATURED_IMAGE : 'http://digital.ucdavis.edu/schema#featuredImage',
      FEATURED_COLLECTION : 'http://digital.ucdavis.edu/schema#featuredCollection',
      APPLICATION_TEXT : 'http://digital.ucdavis.edu/schema#applicationText'
    }

    this.APPLICATION_ROOT = {
      "@id" : "",
      "@type" : this.TYPES.APPLICATION_CONTAINER
    }
  }

  /**
   * @method create
   * @description create a new collection
   * 
   * @param {Object} options
   * @param {Object} options.id collection name in path
   * @param {String} options.content turtle content to write to collection root
   * @param {String} options.file turtle file to read from disk and write to collection root
   */
  async create(options) {
    if( !options.id ) {
      return new ApiResponse().setError('You must provide a id for collection');
    }

    let orgOptions = clone(options);

    // make sure the root collection container is setup
    let response = await this._ensureApplicationRoot(options);
    if( response.error ) return response;

    // transform to jsonld so we can manipulate 
    let jsonld = this.APPLICATION_ROOT;

    // set our content-type to turtle
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.headers['Slug'] = options.id;
    options.content = await transform.jsonldToTurtle(jsonld);
    options.path = '/'+this.ROOT_SLUG;

    response.appendResponse(await API.postEnsureSlug(options));
    if( response.error ) return response;

    let newPath = response.data;


    // create the collection acl root
    options = clone(orgOptions);
    options.path = newPath;
    options.label = 'Application Access Control'
    response.appendResponse(await API.acl.create(options));
    if( response.error ) return response;

    let aclPath = response.data.aclLocation.replace(API.getBaseUrl(options), '');
    response = await API.acl.add({
      path : '/'+this.ROOT_SLUG+'/' + options.id,
      agent : API.acl.PUBLIC_AGENT,
      modes : [API.acl.MODES.READ]
    });
    assert.equal(response.last.statusCode, 201);

    return response.setData({
      path : newPath,
      acl : aclPath
    });
  }


  /**
   * @method _ensureCollectionRoot
   * @description ensure the /application container has been created
   * 
   * @param {Object} options 
   */
  async _ensureApplicationRoot(options) {
    options = clone(options);
    if( options.content ) delete options.content;

    options.path = '/'+this.ROOT_SLUG;
    let response = await API.head(options);
    if( response.checkStatus(200) ) return response;

    if( !response.checkStatus(404) ) {
      return response.setError('You do not have write permissions to create a collection');
    }

    options.path = '/';
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.headers['Slug'] = this.ROOT_SLUG;
    options.content = loadTemplate('applicationRoot.ttl');
    
    response.appendResponse(await API.post(options));
    if( !response.checkStatus(201) ) {
      response.setError('You do not have write permissions to create a collection');
    }

    return response;
  }

}

module.exports = ApplicationsUtils;