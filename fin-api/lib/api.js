const request = require('./utils/request');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const clone = require('clone');
const URL = require('./utils/url');
const config = require('./config');
const pathutils = require('./utils/path');
const ACL = require('./acl');
const IO = require('./io');
const Service = require('./service');
const Collection = require('./collection');
const Application = require('./application');
const transformUtils = require('./utils/transform');
const ApiResponse = require('./utils/response');
const JsonldUtils = require('./utils/jsonld');

/**
 * @class FinApi
 * 
 * @description FIN API class
 * 
 * Many classes return a promise with a object that looks like {response, body, authenticated}
 * where
 *  - response: HTTP response object
 *  - body: HTTP body contents
 *  - authenticated: boolean flag if a JWT token was sent along with the request
 */
class FinApi {

  constructor() {
    /**
     * @name RDF_FORMATS
     * @type {Object}
     * @description 
     * JSON_LD: application/ld+json<br />
     * N_TRIPLES: application/n-triples<br />
     * RDF_XML: application/rdf+xml<br />
     * SPARQL_UPDATE: application/sparql-update<br />
     * N3: text/n3<br />
     * TURTLE: text/turtle
     */
    this.RDF_FORMATS = {
      JSON_LD : 'application/ld+json',
      N_TRIPLES : 'application/n-triples',
      RDF_XML : 'application/rdf+xml',
      SPARQL_UPDATE : 'application/sparql-update',
      N3 : 'text/n3',
      TURTLE : 'text/turtle'
    }

    /**
     * @name FILE_EXTENSIONS
     * @type {Object}
     * @description 
     * .jsonld: application/ld+json<br />
     * .nt: application/n-triples<br />
     * .xml: application/rdf+xml<br />
     * .n3: text/n3<br />
     * .txt: text/plain<br />
     * .ttl: text/turtle
     */
    this.FILE_EXTENSIONS = {
      '.jsonld' : this.RDF_FORMATS.JSON_LD,
      '.nt' : this.RDF_FORMATS.N_TRIPLES,
      '.xmlrdf' : this.RDF_FORMATS.RDF_XML,
      '.n3' : this.RDF_FORMATS.N3,
      '.ttl' : this.RDF_FORMATS.TURTLE
    }

    /**
     * @name GET_JSON_ACCEPT
     * @type {Object}
     * 
     * @description Optional Accept HTTP header values for GET request of Content-Type=application/ld+json
     */
    this.GET_JSON_ACCEPT = {
      EXPANDED : 'application/ld+json; profile="http://www.w3.org/ns/json-ld#expanded"',
      COMPACTED : 'application/ld+json; profile="http://www.w3.org/ns/json-ld#compacted"',
      FLATTENED : 'application/ld+json; profile="http://www.w3.org/ns/json-ld#flattened"'
    }

    /**
     * @name GET_PREFER
     * @type {Object}
     * 
     * @description Optional Prefer HTTP header values for GET request
     */
    this.GET_PREFER = {
      MINIMAL : 'return=minimal',
      REPRESENTATION : 'return=representation',
      REPRESENTATION_INCLUDE_EMBED_RESOURCE : 'return=representation; include="http://fedora.info/definitions/v4/repository#EmbedResources"',
      REPRESENTATION_INCLUDE_INBOUND_REFERENCES : 'return=representation; include="http://fedora.info/definitions/v4/repository#InboundReferences"',
      REPRESENTATION_INCLUDE_SERVER_MANAGED : 'return=representation; include="http://fedora.info/definitions/v4/repository#ServerManaged"',
      REPRESENTATION_OMIT_EMBED_RESOURCE : 'return=representation; omit="http://fedora.info/definitions/v4/repository#EmbedResources"',
      REPRESENTATION_OMIT_INBOUND_REFERENCES : 'return=representation; omit="http://fedora.info/definitions/v4/repository#InboundReferences"',
      REPRESENTATION_OMIT_SERVER_MANAGED : 'return=representation; omit="http://fedora.info/definitions/v4/repository#ServerManaged"',
    }

    this.LDP_TYPES = {
      RESOURCE : 'http://www.w3.org/ns/ldp#Resource',
      RDF_SOURCE : 'http://www.w3.org/ns/ldp#RDFSource',
      NON_RDF_SOURCE : 'http://www.w3.org/ns/ldp#NonRDFSource'
    }

    this.FEDORA_TYPES = {
      RESOURCE : 'http://fedora.info/definitions/v4/repository#Resource',
      CONTAINER : 'http://fedora.info/definitions/v4/repository#Container',
      REPOSITORY_ROOT : 'http://fedora.info/definitions/v4/repository#RepositoryRoot',
      SKOLEM : 'http://fedora.info/definitions/v4/repository#Skolem'
    }

    /**
     * @name PUT_PEFER
     * @type {Object}
     * 
     * @description Optional Prefer HTTP header values for PUT request.
     * Allows replacing the properties of a container without having to provide all of the server-managed triples.
     */
    this.PUT_PEFER = {
      MINIMAL : 'handling=lenient; received="minimal"'
    }

    /**
     * @name acl
     * @type {class}
     * 
     * @description set of functions for interacting with fin webac.
     */
    this.acl = new ACL(this);

    /**
     * @name service
     * @type {class}
     * 
     * @description set of functions for interacting with fin services.
     */
    this.service = new Service(this);

    /**
     * @name collection
     * @type {Object}
     * 
     * @description set of functions for interacting with fin collections
     */
    this.collection = new Collection(this);

    /**
     * @name application
     * @type {Object}
     * 
     * @description set of functions for interacting with fin applications
     */
    this.application = new Application(this);

    /**
     * @name transform
     * @type {Object}
     * 
     * @description util functions for turtle, json-ld and sparql transforms
     */
    this.transform = transformUtils;

    /**
     * @name io
     * @type {Object}
     * 
     * @description import/export collections from fin filesystem format 
     */
    this.io = {
      import : new IO.import(this),
      export : new IO.export(this)
    }

    /**
     * @name jsonld
     * @type {Object}
     * 
     * @description util functions json-ld including patching and getByType
     */
    this.jsonld = new JsonldUtils(this);
  }

  /**
   * @method setConfig
   * @description Set the API config
   * 
   * To make authenticated requests you should supply either a username/refreshToken or
   * username/password combo.  Then if a JWT doesn't exist or is expired, the request 
   * function will fetch a new JWT before the request is made.
   * 
   * @param params key/value pairs to set
   * @param params.host FIN host ex. http://mydams.org
   * @param params.fcBasePath Fedora base path (default: /fcrepo/rest)
   * @param params.jwt JWT Token
   * @param params.refreshToken refresh token to use if JWT expires
   * @param params.username username to use with refreshToken or password if JWT expires
   * @param params.password password to use if JWT expires
   * @param params.transactionToken custom transaction token
   */
  setConfig(params) {
    for( var key in params ) {
      config[key] = params[key];
    }
  }

  /**
   * @method getConfig
   * @description return config object
   * @returns {Object}
   */
  getConfig() {
    return config;
  }

  /**
   * @method createFcBasePath
   * @private
   * @description Create the url base for fedora request. ex: /fcrepo/rest/[transactionid]
   * @param options Optional arguments
   * @param options.finRequest ignore the fcBasePath and use the path as is
   * @param options.fcBasePath override config.fcBasePath
   * @param options.transactionToken override config.transactionToken
   * @returns {String}
   */
  createFcBasePath(options = {}) {
    if( options.finRequest === true ) return '';

    let transactionToken = options.transactionToken || config.transactionToken || '';

    return pathutils.joinUrlPath(
      (options.fcBasePath ? options.fcBasePath : config.fcBasePath),
      transactionToken
    );
  }

  /**
   * @method createUrl
   * @private
   * @description Create the url for fedora request.
   * @param {Object} options arguments
   * @param {String} options.path url path
   * @param {String} options.host override config.host
   * @param {String} options.fcBasePath override config.fcBasePath
   * @param {String} options.transactionToken override config.transactionToken
   * @returns {String} url
   */
  createUrl(options={}) {
    return this.getHost(options) +
           pathutils.joinUrlPath(
            this.createFcBasePath(options),
            options.path || ''
           );
  }

  getBaseUrl(options={}) {
    return this.getHost(options) + this.createFcBasePath(options);
  }

  getHost(options={}) {
    return options.host ? options.host : config.host;
  }

  /**
   * @method baseRequest
   * @private 
   * @description Create a base request object
   * 
   * @param {String} method HTTP method ex. GET, POST, etc
   * @param {Object} options arguments
   * @param {String} options.path url path
   * @param {Object} options.headers url headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} {response, body, authenticated}
   */
  baseRequest(method, options) {
    return {
      method : method,
      headers : options.headers || {},
      encoding : options.encoding,
      timeout : options.timeout,
      jwt : options.jwt,
      writeStream : options.writeStream,
      uri : this.createUrl(options)
    }
  }

  /**
   * @method extensionHelper
   * @private
   * @description If a file is provided on the request, look at the extension,
   * if it is of a known rdf type, set the content type for the request.
   * 
   * If the content-type header is already set, no operation is performed.
   * 
   * @param {Object} options 
   */
  extensionHelper(options) {
    options.isRdfType = false;
    
    let contentTypeKey = ((Object.keys(options.headers)
      .map(key => ({key, clean: key.toLowerCase().trim()}))
      .find(item => item.clean === 'content-type')) || {}).key;
    
    if( options.headers[contentTypeKey] ) {
      for( var key in this.FILE_EXTENSIONS ) {
        if( this.FILE_EXTENSIONS[key] === options.headers[contentTypeKey] ) {
          options.isRdfType = true;
          break;
        }
      }
      return;
    }

    // ignore if file argument is the file contents and not the path
    if( options.content ) return;

    var info = path.parse(options.file);
    var knownContentType = this.FILE_EXTENSIONS[info.ext.toLowerCase()];
    
    if( knownContentType ) {
      options.isRdfType = true;
      options.headers['Content-Type'] = knownContentType;
    } 
  }

  /**
   * @method destinationHelper
   * @private
   * @description Set the Destination HTTP header.
   */
  destinationHelper(options) {
    if( !options.headers ) options.headers = {};
    if( !options.headers.Destination && options.destination ) {
      options.headers.Destination = (options.host ? options.host : config.host) + 
        pathutils.joinUrlPath(
          (options.fcBasePath ? options.fcBasePath : config.fcBasePath),
          options.destination
        );
    }
  }

  /**
   * @method fileHelper
   * @private
   * @description Set the sha256 hash for a file upload request
   */
  async fileHelper(options) {
    // ignore if file argument is the file contents and not the path
    if( options.content ) return;

    // if no file path is provided quit
    if( !options.file ) return;
    
    if( !options.headers ) options.headers = {};
    
    // create absolute file path
    if( !path.isAbsolute(options.file) ) {
      options.file = path.resolve(process.cwd(), options.file);
    }

    // set content type if known and not already set
    this.extensionHelper(options);

    // set the checksum if not an rdf file
    if( !options.isRdfType ) {
      // let shaNum = 256; // this is causing issues, fcrepo doesn't seem to calculate it correctly
      let shaNum = 1;

      var sha = await this.sha(options.file, shaNum );
      options.headers.digest = `sha${shaNum}=${sha}`;
    }

    // set the content disposition from file name or provided filename option
    if( !options.headers['Content-Disposition'] && !options.isRdfType ) {
      // if filename is provided, set the filename
      if( options.filename ) {
        options.headers['Content-Disposition'] = `attachment; filename="${options.filename}"`;

      // otherwise use the actual filename
      } else {
        var info = path.parse(options.file);
        options.headers['Content-Disposition'] = `attachment; filename="${info.base}"`;
      }
    }
  }

  /**
   * @method sha
   * @private 
   * @description Calculate sha for given file
   * 
   * @param {String} file absolute path to file
   * @param {String} shaNum defaults to 256
   * 
   * @return {Promise} String
   */
  sha(file, shaNum=256) {
    return new Promise((resolve, reject) => {
      var hash = crypto.createHash('sha'+shaNum);
      fs.createReadStream(file)
        .on('data', data => hash.update(data))
        .on('close', () => resolve(hash.digest('hex')));
    });
  }

  /**
   * @method isSuccess
   * @description Given a HTTP response see if response is in 200 range
   * 
   * @param {Object} response HTTP response object
   * @return {Boolean}
   */
  isSuccess(response) {
    if( response.statusCode >= 200 && response.statusCode < 300 ) {
      return true;
    }
    return false;
  }

  /**
   * @method get
   * @description Retrieve the content of the resource
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  get(options) {
    let req = this.baseRequest('GET', options);
    return _simpleRequest(req);
  }

  /**
   * @method metadata
   * @description Retrieve the metadata of the container.  Checks container type
   * with head request, appends /fcr:metadata for binary containers.  Default response
   * type is JSONLD.  Set Accept header to override.
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  async metadata(options) {
    let req = await this.head(options);
    if( req.error || req.last.statusCode !== 200 ) return req;
    
    if( !this.isRdfContainer(req.last) ) {
      options.path += '/fcr:metadata';
    }

    if( !options.headers ) options.headers = {};
    let hasAccept = false;
    for( let key in options.headers ) {
      if( key.toLowerCase().trim() === 'accept' ) {
        hasAccept = true;
        break;
      }
    }
    if( !hasAccept ) options.headers['Accept'] = this.RDF_FORMATS.JSON_LD;

    return this.get(options);
  }

  /**
   * @method head
   * @description Retrieve HTTP headers of the resource
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  head(options) {
    let req = this.baseRequest('HEAD', options);
    return _simpleRequest(req);
  }

  /**
   * @method post
   * @description Create new resources within a LDP container
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {Object} options.file (optional) path to file to upload
   * @param {Object} options.content (optional) content to upload
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async post(options) {
    await this.fileHelper(options);

    if( !options.finRequest && !options.path.match(/\/$/) ) {
      options.path = options.path + '/';
    }
    var req = this.baseRequest('POST', options);

    if( options.content ) req.body = options.content;
    else if( options.file ) req.body = fs.createReadStream(options.file);

    return _simpleRequest(req);
  }

  /**
   * @method postEnsureSlug
   * @description Works just like post but a slug is required.  Will check that new path
   * doesn't already exist and will delete container and fail if Fedora doesn't create
   * container at expect path.
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {String} options.slug (optional) new container path
   * @param {Object} options.headers (optional) resource headers, key/value pairs
   * @param {Object} options.file (optional) path to file to upload
   * @param {Object} options.content (optional) content to upload
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async postEnsureSlug(options) {
    if( !options.headers ) options.headers = {};
    let slug = options.slug || options.headers.Slug || options.headers.slug;

    if( !slug ) {
      let response = new ApiResponse();
      return response.setError(new Error('No slug provided'));
    }

    let headOpts = clone(options);
    headOpts.path = pathutils.joinUrlPath(options.path, slug);
    
    let response = await this.head(headOpts);

    // general error
    if( response.error ) return response;
    
    // container already exists
    if( response.last.statusCode === 200 ) {
      response.error = new Error('Path already exists: '+headOpts.path);
    }

    if( response.error ) return response;
    
    // error code other than the 404 we are hoping for
    if( response.last.statusCode !== 404 ) {
      response.error = new Error('Non 404 status code response on path check: '+response.last.statusCode);
    }

    if( response.error ) return response;

    // start a transation in case we don't get the slug we want
    response.appendResponse(await this.startTransaction());

    if( options.headers.slug ) delete options.headers.slug;
    options.headers.Slug = slug.replace(/^\//, '');
    response.appendResponse(await this.post(options));

    // check general error
    if( !response.checkStatus(201) ) {
      response.setError('Failed to create container: '+response.last.statusCode+', '+response.last.body);
      response.appendResponse(await this.rollbackTransaction());
      return response;
    }

    // check location is as we expect
    let location = response.last.headers.location || '';
    let createdSlug = location.replace(new RegExp(this.getBaseUrl(options)+options.path), '');
    if( createdSlug !== options.headers.Slug ) {
      response.appendResponse(await this.rollbackTransaction());
      response.setError('Failed to create container at location: '+options.headers.Slug);
      return response;
    }
    location = location.replace(this.getBaseUrl(options), '');

    // finish transtation
    response.appendResponse(await this.commitTransaction());
    response.data = location;

    return response;
  }

  /**
   * @method put
   * @description Create a resource with a specified path, or replace the triples associated 
   * with a resource with the triples provided in the request body.
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {Object} options.file (optional) path to file to upload
   * @param {Object} options.content (optional) content to upload
   * @param {Object} options.partial (optional) only partial update happening, sets Prefer header to handling=lenient; received="minimal" 
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async put(options) {
    await this.fileHelper(options);

    var req = this.baseRequest('PUT', options);

    if( options.content !== undefined ) req.body = options.content;
    else req.body = fs.createReadStream(options.file);

    if( options.partial ) {
      // This is what is should be... but there is a bug in fedora
      // this does not let you update http://fedora.info/definitions/v4/repository#Skolem
      // stored in /fcrepo/rest/.well-known/genid
      // req.headers.Prefer = 'handling=lenient; received="minimal"';
      
      // This is a work around for above, at least as of 4.7.5
      req.headers.Prefer = 'return="minimal"';
    }

    return _simpleRequest(req);
  }

  /**
   * @method patch
   * @description Sparql base update
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {Object} options.file (optional) path to file to upload
   * @param {Object} options.content (optional) content to upload
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async patch(options) {
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = 'application/sparql-update';

    var req = this.baseRequest('PATCH', options);
    
    if( options.content ) req.body = options.content;
    else req.body = fs.createReadStream(options.file);

    return _simpleRequest(req);
  }



  /**
   * @method delete
   * @description Delete a resource
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Boolean} options.permanent remove /fcr:tombstone as well
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async delete(options) {
    var req = this.baseRequest('DELETE', options);

    if( !options.permanent ) {
      return _simpleRequest(req);
    }


    let response = await _simpleRequest(req);

    // if the initial delete fails, do not attempt to delete tombstone
    // 410 status code is 'gone'
    if( response.error || (!this.isSuccess(response.last) && response.last.statusCode !== 410) ) {
      return response;
    }

    req.uri = req.uri + '/fcr:tombstone';
    response.push(await request(req), true);

    return response;
  }

  /**
   * @method copy
   * @description Copy a resource (and its subtree) to a new location
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Boolean} options.destination path to copy resource to
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async copy(options) {
    this.destinationHelper(options);
    var req = this.baseRequest('COPY', options);
    return _simpleRequest(req);
  }

  /**
   * @method move
   * @description Move a resource (and its subtree) to a new location
   * 
   * @param {Object} options arguments
   * @param {String} options.path resource path
   * @param {Boolean} options.destination path to move resource to
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async move(options) {
    this.destinationHelper(options);
    var req = this.baseRequest('MOVE', options);
    return _simpleRequest(req);
  }

  /**
   * @method startTransaction
   * @description Start a new transaction, returns transation token.
   * 
   * @param {Object} options arguments
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse: transactionToken
   */
  async startTransaction(options = {}) {
    options.path = '/fcr:tx';
    let req = this.baseRequest('POST', options);

    let response = await _simpleRequest(req);
    if( response.error || !response.last.headers.location ) return response;

    config.transactionToken = new URL(response.last.headers.location).pathname.split('/').pop();

    response.setData(config.transactionToken);
    return response;
  }

  /**
   * @method commitTransaction
   * @description Commit transation
   * 
   * @param {Object} options arguments
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async commitTransaction(options = {}) {
    options.path = '/fcr:tx/fcr:commit';
    let req = this.baseRequest('POST', options);

    let response = await _simpleRequest(req);

    // if( response.last === 204 ) {
      config.transactionToken = '';
    // }
    return response;
  }

  /**
   * @method rollbackTransaction
   * @description Rollback transation
   * 
   * @param {Object} options arguments
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async rollbackTransaction(options = {}) {
    options.path = '/fcr:tx/fcr:rollback';
    let req = this.baseRequest('POST', options);
    let response = await _simpleRequest(req);

    // if( response.last === 204 ) {
      config.transactionToken = '';
    // }
    return response;
  }

  /**
   * @method getVersions
   * @description Get a current version
   * 
   * @param {Object} options 
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  getVersions(options) {
    options.path = pathutils.joinUrlPath(options.path, '/fcr:versions');
    if( !options.headers ) options.headers = {};
    if( !options.headers.Accept ) {
      options.headers.Accept = this.RDF_FORMATS.TURTLE;
    }

    let req = this.baseRequest('GET', options);
    return _simpleRequest(req);
  }

  /**
   * @method getVersion
   * 
   * @param {Object} options 
   * @param {String} options.versionName version to get
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  getVersion(options) {
    options.path = pathutils.joinUrlPath(options.path, '/fcr:versions', options.versionName);
    var req = this.baseRequest('GET', options);
    return _simpleRequest(req);
  }

  /**
   * @method createVersion
   * 
   * @param {Object} options 
   * @param {String} options.versionName version to create
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  async createVersion(options) {
    options.path = pathutils.joinUrlPath(options.path, '/fcr:versions');

    if( !options.headers ) options.headers = {};
    options.headers['Slug'] = options.versionName;

    var req = this.baseRequest('POST', options);
    return _simpleRequest(req);
  }

  /**
   * @method revertToVersion
   * 
   * @param {Object} options 
   * @param {String} options.versionName version name to revert to
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} {response, body, authenticated}
   */
  async revertToVersion(options) {
    options.path = pathutils.joinUrlPath(options.path, '/fcr:versions', options.versionName);
    var req = this.baseRequest('PATCH', options);
    return _simpleRequest(req);
  }

  /**
   * @method deleteVersion
   * 
   * @param {Object} options 
   * @param {String} options.versionName version to delete
   * @param {Object} options.headers resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * 
   * @returns {Promise} ApiResponse
   */
  async deleteVersion(options) {
    options.path = pathutils.joinUrlPath(options.path, '/fcr:versions', options.versionName);
    var req = this.baseRequest('DELETE', options);
    return _simpleRequest(req);
  }


  /**
   * @method parseLinkHeader
   * @description helper for parsing HTTP link header.  many utils for this
   * do not assume multiple rel's of the same value which fedora returns.
   * 
   * @param {String} link HTTP link header
   * 
   * @returns {Object}
   */
  parseLinkHeader(link = '') {
    let results = {};
    let links = link.split(',').map(item => item.trim());
  
    links.forEach(link => {
      let parts = link.split(';').map(item => item.trim());
  
      let info = {
        url : parts[0].replace(/(^<|>$)/g, '')
      };
      for( let i = 1; i < parts.length; i++ ) {
        let tmp = parts[i].split('=').map(item => item.trim());
        info[tmp[0]] = tmp[1].replace(/(^"|"$)/g, '');
      }
  
      if( !info.rel ) return;
  
      if( !results[info.rel] ) results[info.rel] = [];
      results[info.rel].push(info);
    });
  
    return results;
  }

  /**
   * @method isRdfContainer
   * @description given a http response object, check the link header to see if
   * this is a rdf container or a binary (nonRdf) container.  Note, this will
   * work with a HEAD fcrepo response
   * 
   * @param {Object} response http response object
   * 
   * @returns {Boolean}
   */
  isRdfContainer(response) {
    if( !response.headers ) return false;
    if( !response.headers.link ) return false;

    let link = this.parseLinkHeader(response.headers.link);
    if( !link.type ) return false;

    return (link.type.findIndex(i => i.url === this.LDP_TYPES.NON_RDF_SOURCE) === -1);
  }

}

async function _simpleRequest(req) {
  let response = new ApiResponse();

  try {
    response.push(await request(req), true);
  } catch(e) {
    if( e.response ) {
      response.push(e.response);
      response.setError(e.error);
    } else {
      response.setError(e);
    }
  }

  return response;
}

module.exports = new FinApi();