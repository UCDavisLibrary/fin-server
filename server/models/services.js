const api = require('@ucd-lib/fin-node-api');
const {logger, config} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const {URL} = require('url');
const activeMqProxy = require('../lib/activeMqProxy');
const jsonld = require('jsonld');
const util = require('util');
const Logger = logger();
const jwt = require('jsonwebtoken');

jsonld.frame = util.promisify(jsonld.frame);

const SERVICE_CHAR = '/svc:'
const AUTHENTICATION_SERVICE_CHAR = '^/auth'
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');
const IS_AUTHENTICATION_SERVICE_URL = new RegExp(AUTHENTICATION_SERVICE_CHAR, 'i');
const ACTIVE_MQ_HEADER_ID = 'org.fcrepo.jms.identifier';

class ServiceModel {

  constructor() {
    this.reloadTimer = -1;
    this.services = {};
    this.SERVICE_ROOT = api.getBaseUrl({path : api.service.ROOT});
    this.init();
  }

  /**
   * @method init
   * @description ensure the default services are added to server
   * 
   * @returns {Promise}
   */
  async init() {
    this.clientService = null;

    // make sure our root service container is in place
    await api.service.init();
    let list = await api.service.list();

    // ensure all default services
    for( var i = 0; i < config.defaultServices.length; i++ ) {
      let service = config.defaultServices[i];

      var {response} = await api.head({
        path : '/'+api.service.ROOT+'/'+service.id
      });

      if( response.statusCode === 200 ) {
        await api.delete({
          path: '/'+api.service.ROOT+'/'+service.id,
          permanent: true
        })
      }

      await api.service.create(service);
    }

    // reload all service definitions
    await this.reload();

    // listen for service definition updates
    activeMqProxy.on('fcrepo-event', e => this._onFcrepoEvent(e));
  }

  /**
   * @method reload
   * @description reload all services from root service container
   * 
   * @return {Promise}
   */
  async reload() {
    let list = await api.service.list();
    list.forEach(service => {
      this.services[service.id] = new ServiceDefinition(service)
      if( service.type === api.service.TYPES.CLIENT ) {
        this.clientService = this.services[service.id];
      }
    });
  }

  /**
   * @method bufferedReload
   * @description just like reload but buffers request for 1 sec
   */
  bufferedReload() {
    if( this.reloadTimer !== -1 ) clearTimeout(this.reloadTimer);
    this.reloadTimer = setTimeout(() => {
      this.reloadTimer = -1;
      this.reload();
    }, 1000);
  }

  /**
   * @method isServiceRequest
   * @description does the given request have a originalUrl that matches a service request url?
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  isServiceRequest(req) {
    return req.originalUrl.match(IS_SERVICE_URL);
  }

  /**
   * @method isAuthenticationServiceRequest
   * @description does the given request have a originalUrl that matches a authentication service request url?
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  isAuthenticationServiceRequest(req) {
    return req.originalUrl.match(IS_AUTHENTICATION_SERVICE_URL);
  }

  /**
   * @method setServiceLinkHeaders
   * @description given an array of links and the current fcPath, append on the link headers
   * 
   * @param {Array} links array of current links
   * @param {String} fcPath current fedora container path
   * @param {Array} types current links for path
   */
  setServiceLinkHeaders(links, fcPath, types) {
    fcPath = fcPath.replace(/\/^/, '');

    for( var id in this.services ) {
      let service = this.services[id];
      if( service.type === api.service.TYPES.WEBHOOK ) continue;
      if( service.type === api.service.TYPES.AUTHENTICATION ) continue;
      if( service.type === api.service.TYPES.CLIENT ) continue;
      if( service.type === api.service.TYPES.PROXY && !service.urlTemplate ) continue;
      if( service.type === api.service.TYPES.EXTERNAL && !service.urlTemplate ) continue;

      if( !this._supportedTypeInType(service.supportedTypes, types) ) {
        continue;
      }

      links.push(`<${config.server.url}${fcPath}/svc:${id}>; rel="service" type="${service.type}"`);
    }
  }

  /**
   * @method _supportedTypeInType
   * @description given a list of supported types of a serivce, is on of
   * the fcrepo container types in the list
   * 
   * @param {Array} supportedTypes types the service supports
   * @param {Array} types list of types for the container
   * 
   * @return {Boolean}
   */
  _supportedTypeInType(supportedTypes, types) {
    if( !supportedTypes.length ) return true;

    for( var i = 0; i < supportedTypes.length; i++ ) {
      if( types.indexOf(supportedTypes[i]) > -1 ) return true;
    }
    return false;
  }


  /**
   * @method parseServiceRequest
   * @description given a ExpressJS Request object, parse out the service parameters.  These are of 
   * the form: http://my-host.org/[fcPath]/svc:[name]/[svcPath]
   * 
   * @param {Object} req Express Request
   * 
   * @returns {Object} service request information object
   */
  parseServiceRequest(req) {
    let parts = req.originalUrl.split(SERVICE_CHAR);

    let serviceRequest = {
      fcUrl : config.server.url+req.originalUrl.replace(new RegExp(SERVICE_CHAR+'.*'), ''),
      fcPath : parts[0],
      name : '',
      svcPath : ''
    }

    parts = parts[1].split('/');
    serviceRequest.name = parts.shift();
    serviceRequest.svcPath = parts.length > 0 ? '/'+parts.join('/') : '';

    return serviceRequest
  }

  /**
   * @method renderFrame
   * @description render a json-ld frame service
   * 
   * @param {String} service service name
   * @param {String} path fcrepo path to render
   * 
   * @returns {Promise} resolves to framed json-ld
   */
  async renderFrame(service, path) {
    if( !this.services[service] ) throw new Error('Unknown service: '+service);
    if( !this.services[service].frame ) throw new Error(`Serivce ${service} has no registered frame`);
    let frame = this.services[service].frame;

    let options = {
      path : path,
      headers : {Accept : api.RDF_FORMATS.JSON_LD}
    }

    // if we are not in development and running on localhost
    if( !config.server.url.match(/(localhost|127.0.0.1)/) ) {
      // we want the id's to have to correct host representation
      options.host = config.server.url;
    }

    let {response} = await api.get(options);
    if( response.statusCode !== 200 ) throw new Error(response.statusCode+' '+response.body);

    let container = JSON.parse(response.body);
    return await jsonld.frame(container, frame);
  }
  
  /**
   * @method _onFcrepoEvent
   * @description called from event listener on activeMqProxy.  called whenever
   * a 'fcrepo-event' is emitted.  These come from ActiveMQ events.  Either reloads
   * service definitions if .service path, ignore is .[name] path or sends HTTP
   * webhook notification
   * 
   * @param {Object} event
   */
  _onFcrepoEvent(event) {
    let id = event.payload.headers[ACTIVE_MQ_HEADER_ID];

    // this is a service update, reload services
    if( id.indexOf('/'+api.service.ROOT) === 0 ) {
      this.bufferedReload();
      return;
    }

    // check for dot paths, we don't send those
    if( this._isDotPath(id) ) return;

    for( let key in this.services ) {
      let service = this.services[key];
      if( !service.webhook ) continue;

      this._sendHttpNotification(key, service.webhook, event);
    }
  }

  /**
   * @method _sendHttpNotification
   * @description send a HTTP webhook notification.  we don't really care about the response
   * unless there is an error, then log it.
   * 
   * @param {String} name service name
   * @param {String} url webhook url to post to
   * @param {Object} event event payload
   * @param {String} secret optional.  service secret to encrypt auth token with
   */
  _sendHttpNotification(name, url, event, secret) {
    Logger.debug(`Sending HTTP webhook notifiction to service ${name} ${url}`);

    let token = jwt.sign({issuer: config.jwt.issuer, type: 'proxy-service'}, secret || config.jwt.secret);

    request({
      type : 'POST',
      uri : url,
      headers : {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(event)
    },
    (error, response, body) => {
      if( error ) return Logger.error(`Failed to send HTTP notification to service ${name} ${url}`, error);
      if( !api.isSuccess(response) ) {
        Logger.error(`Failed to send HTTP notification to service ${name} ${url}`, response.statusCode, response.body);
      }
    });
  }

  /**
   * @method _isDotPath
   * @description check to see if there is a folder name that starts with a dot.
   * if so, it's a dot path
   * 
   * @param {String} path url path to check
   * 
   * @returns {Boolean} 
   */
  _isDotPath(path) {
    if( path.match(/^http/i) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    
    path = path.split('/');
    for( var i = 0; i < path.length; i++ ) {
      if( path[i].match(/^\./) ) {
        return true;
      }
    }
    
    return false;
  }

}

class ServiceDefinition {

  constructor(data = {}) {
    this.type = data.type || '';
    this.webhook = data.webhook || '';
    this.frame = data.frame || '';
    this.urlTemplate = data.urlTemplate || '';
    this.url = data.url || '';
    this.title = data.title || '';
    this.description = data.description || '';
    this.supportedTypes = data.supportedTypes || [];
    this.id = data.id || '';

    // let a authentication service know it's url
    if( this.type === api.service.TYPES.AUTHENTICATION ) {
      request(
        this.url+'/_init',
        {qs : {
          servicePath: '/auth/'+this.id
        }},
        (error, response, body) => {
          // noop
        }
      );
    }
  }

  set frame(val) {
    if( val && typeof val === 'string' ) {
      val = JSON.parse(val);
    }
    this._frame = val;
  }

  get frame() {
    return this._frame;
  }

  renderUrlTemplate(params) {
    let url = this.urlTemplate;
    for( var key in params ) {
      url = url.replace(new RegExp(`{{${key}}}`, 'g'), params[key]);
    }
    return url.replace(/{{.*}}/g, '');
  }

}

module.exports = new ServiceModel();