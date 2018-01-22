const api = require('@ucd-lib/fin-node-api');
const {logger} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const config = require('../config');
const activeMqProxy = require('../lib/activeMqProxy');
const Logger = logger();

const SERVICE_CHAR = '/svc:'
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');

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
   */
  async init() {
    // make sure our root service container is in place
    await api.service.init();

    // ensure all default services
    for( var i = 0; i < config.defaultServices.length; i++ ) {
      let service = config.defaultServices[i];

      var {response} = await api.head({
        path : '/'+api.service.ROOT+'/'+service.name
      });
      if( response.statusCode !== 404 ) continue;

      await api.service.create(service);
    }

    // reload all service definitions
    await this.reload();

    // list for service definition updates
    activeMqProxy.on('fcrepo-event', e => this._onFcrepoEvent(e));
  }

  /**
   * @method reload
   * @description reload all services from root service container
   */
  async reload() {
    let list = await api.service.list();
    list.forEach(service => this.services[service.name] = new ServiceDefinition(service));
  }

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

  setServiceLinkHeaders(links, path) {
    for( var name in this.services ) {
      let service = this.services[name];
      if( service.type !== 'ProxyService' ) continue;
      if( !service.urlTemplate ) continue;
      links.push(`<${config.server.url}${path}svc:${name}>; rel="service"`);
    }
  }

  parseServiceRequest(req) {
    let parts = req.originalUrl.split(SERVICE_CHAR);

    let serviceRequest = {
      fcPath : parts[0],
      name : '',
      svcPath : ''
    }

    parts = parts[1].split('/');
    serviceRequest.name = parts.shift();
    serviceRequest.svcPath = parts.length > 0 ? '/'+parts.join('/') : '';
  
    return serviceRequest
  }
  

  _onFcrepoEvent(event) {
    let id = event.payload.headers['org.fcrepo.jms.identifier'];

    // this is a service update, reload services
    if( id.indexOf('/'+api.service.ROOT) === 0 ) {
      this.bufferedReload();
      return;
    }

    for( let key in this.services ) {
      let service = this.services[key];
      if( !service.webhook ) continue;

      this._sendHttpNotification(key, service.webhook, event);
    }
  }

  _sendHttpNotification(name, url, event) {
    Logger.info(`Sending HTTP webhook notifiction to service ${name} ${url}`);
    request({
      type : 'POST',
      uri : url,
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(event)
    },
    (error, response, body) => {
      if( error ) Logger.error(`Failed to send HTTP notification to service ${name} ${url}`, error);
    });
  }

}

class ServiceDefinition {

  constructor(data = {}) {
    this.type = data.type || '';
    this.webhook = data.webhook || '';
    this.frame = data.frame || '';
    this.urlTemplate = data.urlTemplate || '';
    this.title = data.title || '';
    this.description = data.description || '';
    this.name = data.name || '';
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

  renderUrlTemplate(fcPath = '', svcPath = '') {
    return this.urlTemplate
               .replace(/{{fcPath}}/g, fcPath)
               .replace(/{{svcPath}}/g, svcPath)
  }

}

module.exports = new ServiceModel();