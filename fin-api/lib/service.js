/**
 * Extended functionality to working with FIN services at a low level
 */
const config = require('./config');
const fs = require('fs');
const path = require('path');
const URL = require('./utils/url');
const loadTemplate = require('./templates/load');
const ApiResponse = require('./utils/response');
const transform = require('./utils/transform');

let API;
const PROXY = 'ProxyService';
const FRAME = 'FrameService';
const TRANSFORM = 'TransformService';
const WEBHOOK = 'WebhookService';
const EXTERNAL = 'ExternalService';
const AUTHENTICATION = 'AuthenticationService';
const CLIENT = 'ClientService';
const GLOBAL = 'GlobalService';

let DEFAULT_ROOT = '.services';
let ROOT = DEFAULT_ROOT;

const CONTAINS = 'http://www.w3.org/ns/ldp#contains';
const CONTAINER_TYPE = 'http://www.w3.org/ns/ldp#Container';
const TITLE = 'http://purl.org/dc/elements/1.1/title';
const DESCRIPTION = 'http://purl.org/dc/elements/1.1/description';
const IDENTIFIER = 'http://purl.org/dc/elements/1.1/identifier';

class Service {

  constructor(api) {
    API = api;

    this.TYPES = {PROXY, FRAME, WEBHOOK, EXTERNAL, AUTHENTICATION, CLIENT, TRANSFORM, GLOBAL}
    this.ROOT = ROOT;
    this.DEFAULT_ROOT = DEFAULT_ROOT;

    this.FIN_SERVER_TYPES = {
      SERVICE_ROOT : 'http://digital.ucdavis.edu/schema#ServiceRoot',
      SERVICE : 'http://digital.ucdavis.edu/schema#Service',
      FRAME_SERVICE : 'http://digital.ucdavis.edu/schema#FrameService',
      TRANSFORM_SERVICE : 'http://digital.ucdavis.edu/schema#TransformService',
      PROXY_SERVICE : 'http://digital.ucdavis.edu/schema#ProxyService',
      GLOBAL_SERVICE : 'http://digital.ucdavis.edu/schema#GlobalService',
      EXTERNAL_SERVICE : 'http://digital.ucdavis.edu/schema#ExternalService',
      WEBHOOK_SERVICE : 'http://digital.ucdavis.edu/schema#WebhookService',
      AUTHENTICATION_SERVICE : 'http://digital.ucdavis.edu/schema#AuthenticationService',
      CLIENT_SERVICE : 'http://digital.ucdavis.edu/schema#ClientService',
      URL_TEMPLATE : 'http://digital.ucdavis.edu/schema#urlTemplate',
      WORKFLOW : 'http://digital.ucdavis.edu/schema#Workflow',
      WORKFLOW_OPTIONS : 'http://digital.ucdavis.edu/schema#workflowOptions',
      MULTI_ROUTE_TEMPLATE : 'http://digital.ucdavis.edu/schema#multiRouteTemplate',
      URL : 'http://digital.ucdavis.edu/schema#url',
      PROTECTED : 'http://digital.ucdavis.edu/schema#protected',
      JSON_LD_FRAME : 'http://digital.ucdavis.edu/schema#jsonldFrame',
      SUPPORTED_TYPE : 'http://digital.ucdavis.edu/schema#supportedType'
    }
  }


  /**
   * @method testing
   * @description If we are in a test env, change the root URL;
   */
  testing(testing=true) {
    if( testing ) ROOT = 'integration-test/'+DEFAULT_ROOT;
    else ROOT = DEFAULT_ROOT;
    
    this.ROOT = ROOT;
  }

  /**
   * @method init
   * @description create the root .service container
   */
  async init() {
    let response = await API.head({path: '/'+ROOT});
    if( response.checkStatus(200) ) return response; 

    return response.appendResponse(await API.postEnsureSlug({
      path : '/',
      headers : {
        Slug : ROOT,
        'Content-Type' : API.RDF_FORMATS.TURTLE
      },
      content : loadTemplate('serviceContainer.ttl')
    }));
  }

  /**
   * @method create
   * @description create a new service
   * 
   * @param {Object} options arguments
   * @param {String} options.id service id
   * @param {String} options.title (optional) service title
   * @param {String} options.description (optional) service description
   * @param {String} options.type either [ProxyService|GlobalService|FrameService|TransformService|ExternalService|WebhookService|AuthenticationService]
   * @param {String} options.urlTemplate url template (ProxyService or ExternalService Only).  ex: http://my-service.com{{fcPath}}?extPath={{svcPath}} 
   * @param {Boolean} options.multiRouteTemplate First part of svcPath will become route.  ex: http://my-service.com/{{route}}/?fcrepo={{fcPath}}&extPath={{svcPath}} 
   * @param {Boolean} options.workflow This service is a workflow type
   * @param {String} options.url url template (AuthenticationService, WebhookService or  ClientService).  ex: http://cas:8000
   * @param {Object} options.frame frame definition (FrameService Only)
   * @param {Object} options.transform transform js code (TransformService Only) 
   * @param {String} options.supportedType (optional) uri of container rdf:type that is supported by this service
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   */
  async create(options) {
    if( !this._validType(options.type) ) new ApiResponse().setError('Invalid Type: '+options.type);
    if( !options.id ) new ApiResponse().setError('Service id Required');

    let id = options.id.replace(/[^a-zA-Z- ]/g, '').trim().replace(/ /g, '-').toLowerCase();
    let templateOptions = {
      id : id,
      title : options.title || id,
      description : options.description || '',
      type : options.type,
      payload : ''
    }
      
    if( options.type === this.TYPES.FRAME && options.frame ) {
      let frame = JSON.stringify(options.frame || {}).replace(/"/g,'\\"')
      templateOptions.payload += `;  ucdlib:jsonldFrame "${frame}"`
    }
    if( options.workflow ) {
      templateOptions.payload += `;  rdf:type ucdlib:Workflow`;
      templateOptions.payload += `; ucdlib:workflowOptions "${JSON.stringify(options.workflow).replace(/"/g,'\\"')}"`
    }
    if( options.urlTemplate ) {
      templateOptions.payload += `;  ucdlib:urlTemplate "${options.urlTemplate}"`
      if( options.multiRouteTemplate ) {
        templateOptions.payload += `\n;  ucdlib:multiRouteTemplate "true"^^<http://www.w3.org/2001/XMLSchema#boolean>`;
      }
    }
    if( options.url ) {
      templateOptions.payload += `;\n  ucdlib:url "${options.url}"`
    }
    if( options.supportedType ) {
      templateOptions.payload += `;\n  ucdlib:supportedType <${options.supportedType}>`
    }
    if( options.protected === true ) {
      templateOptions.payload += `;\n  ucdlib:protected "true"^^<http://www.w3.org/2001/XMLSchema#boolean>`
    }

    let ttl = loadTemplate('service.ttl', templateOptions);

    if( !options.headers) options.headers = {}

    // make sure a service with this name doesn't already exist
    // options.path = '/'+ROOT+'/'+templateOptions.id;
    // var {response} = await API.head(options);
    // if( response.statusCode !== 404 ) throw new Error('Service already exists: '+templateOptions.id);
    
    options.path = '/'+ROOT;
    options.headers.Slug = templateOptions.id;
    
    if( options.type !== this.TYPES.TRANSFORM ) {
      options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
      options.content = ttl;
      return API.postEnsureSlug(options);
    }

    options.headers['Content-Type'] = 'application/javascript';
    options.content = options.transform;

    let response = await API.postEnsureSlug(options);
    if( !response.checkStatus(204) ) {
      return response.setError('Unable to create service container: '+response.last.body);
    }

    let path = options.path+'/'+options.id+'/fcr:metadata';

    // get current metadata
    response.appendResponse(await API.get({path}));
    if( !response.checkStatus(200) ) {
      return response.setError('Unable to get /fcr:metadata for new container');
    }
 
    let orgttl = response.last.body;
    let sparql = (await transform.diffToSparql(orgttl, ttl)).split('\n');
    
    let i;
    for( i = sparql.length-1; i > 0; i--) {
      if( sparql[i].indexOf('INSERT {') === 0 ) break;
    }
    sparql.splice(1, i-1);
    sparql[0] += '}'
    sparql = sparql.join('\n');

    response.appendResponse(await API.patch({
      path : path,
      content: sparql
    }));

    return response;
  }

  /**
   * @method list
   * @description get a list of all services and service information
   * 
   * @param {Object} options arguments
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   */
  async list(options = {}) {
    if( !options.header ) options.headers = {};
    options.path = '/'+ROOT;
    options.headers.Accept = API.RDF_FORMATS.JSON_LD;

    let response = await API.get(options);
    if( !response.checkStatus(200) ) {
      return response.setError('Unabled to access: /'+ROOT);
    }

    let container = this._getContainer(response.last.body);
    let children = container[CONTAINS] || [];
    let list = [];

    let baseUrl = API.getBaseUrl(options);
    for( let i = 0; i < children.length; i++ ) {
      options.path = children[i]['@id'].replace(baseUrl, '');

      if( !API.isRdfContainer((await API.head(options)).last) ) {
        options.path += '/fcr:metadata';
      }

      response.appendResponse(await API.get(options));
      if( response.error ) return response;

      let child = this._getContainer(response.last.body);
      let info = this._getServiceInfo(child);
      info.path = children[i]['@id'].replace(baseUrl, '');
      list.push(info);
    }

    return response.setData(list);
  }

  /**
   * @method get
   * @description get service info object by service id
   * 
   * @param {Object} options arguments
   * @param {String} options.id service id
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} resolves to service info object
   */
  async get(options) {
    if( !options.headers ) options.headers = {};
    options.headers.Accept = API.RDF_FORMATS.JSON_LD;
    options.path = this.ROOT + '/' + options.id;
    
    let response = await API.get(options);
    if( !response.checkStatus(200) ) {
      return response.setError(`Unabled to get service at ${options.path}`);
    }

    let container = this._getContainer(response.last.body);
    let info = this._getServiceInfo(container);
    info.path = options.path;
    
    return response.setData(info);
  }

  /**
   * @method setSecret
   * @description set a service secret.  This will be used to sign the
   * X-FIN-SERVICE-SIGNATURE header.
   * 
   * @param {Object} options
   * @param {Object} options.id service id
   * @param {Object} options.secret service secret
   * 
   * @returns {Promise}
   */
  setSecret(options) {
    return API.post({
      finRequest : true,
      path : `/auth/service/${options.id}`,
      content : options.secret
    });
  }

  /**
   * @method deleteSecret
   * @description remove a service secret.  
   * 
   * @param {Object} options
   * @param {Object} options.id service id
   * 
   * @returns {Promise}
   */
  deleteSecret(options) {
    return API.delete({
      finRequest : true,
      path : `/auth/service/${options.id}`
    });
  }

  /**
   * @method verifySecret
   * @description a GET request to the /auth/service/:id which
   * returns a simple payload with the current X-FIN-SERVICE-SIGNATURE 
   * header set
   * 
   * @param {Object} options 
   * @param {Object} options.id service id 
   */
  verifySecret(options) {
    return API.get({
      finRequest : true,
      path : `/auth/service/${options.id}`
    });
  }

  _getServiceInfo(container) {
    let type = null;
    if( container['@type'].indexOf(this.FIN_SERVER_TYPES.FRAME_SERVICE) > -1 ) {
      type = FRAME;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.PROXY_SERVICE) > -1 ) {
      type = PROXY;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.WEBHOOK_SERVICE) > -1 ) {
      type = WEBHOOK;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.EXTERNAL_SERVICE) > -1 ) {
      type = EXTERNAL;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.AUTHENTICATION_SERVICE) > -1 ) {
      type = AUTHENTICATION;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.CLIENT_SERVICE) > -1 ) {
      type = CLIENT;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.TRANSFORM_SERVICE) > -1 ) {
      type = TRANSFORM;
    } else if( container['@type'].indexOf(this.FIN_SERVER_TYPES.GLOBAL_SERVICE) > -1 ) {
      type = GLOBAL;
    }

    let supportedTypes = [];
    if( container[this.FIN_SERVER_TYPES.SUPPORTED_TYPE] ) {
      supportedTypes = container[this.FIN_SERVER_TYPES.SUPPORTED_TYPE].map(value => value['@id']);
    }

    return {
      type : type,
      supportedTypes : supportedTypes,
      workflow : this._getValue(container, this.FIN_SERVER_TYPES.WORKFLOW_OPTIONS), 
      urlTemplate : this._getValue(container, this.FIN_SERVER_TYPES.URL_TEMPLATE),
      multiRouteTemplate : this._getValue(container, this.FIN_SERVER_TYPES.MULTI_ROUTE_TEMPLATE),
      protected : this._getValue(container, this.FIN_SERVER_TYPES.PROTECTED),
      url : this._getValue(container, this.FIN_SERVER_TYPES.URL),
      frame : this._getValue(container, this.FIN_SERVER_TYPES.JSON_LD_FRAME),
      title : this._getValue(container, TITLE),
      description : this._getValue(container, DESCRIPTION),
      id : this._getValue(container, IDENTIFIER)
    }
  }

  /**
   * @method _getValue
   * @description given and container and property, return 
   * first value for that property found
   * 
   * @param {Object} container
   * @param {String} property
   * 
   * @return {String}
   */
  _getValue(container, property) {
    if( !container[property] ) return '';
    if( !container[property].length ) return '';
    return container[property][0]['@value'] || '';
  }

  /**
   * @method _getContainer
   * @description get container
   */
  _getContainer(results) {
    if( typeof results === 'string' ) {
      results = JSON.parse(results);
    }
    return results.find((result) => (result['@type'].indexOf(API.FEDORA_TYPES.RESOURCE) > -1));
  }

  _validType(type) {
    for(let key in this.TYPES) {
      if( this.TYPES[key] === type ) return true;
    } 
    return false;
  }

}

module.exports = Service;