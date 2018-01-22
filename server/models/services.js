const api = require('@ucd-lib/fin-node-api');
const {logger} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const config = require('../config');
const activeMqProxy = require('../lib/activeMqProxy');

const SERVICE_CHAR = '/svc:'
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');

class ServiceModel {

  constructor() {
    this.services = {};
    activeMqProxy.on('fcrepo-event', e => this._onFcrepoEvent(e));
    this.reload();
  }

  async reload() {
    await api.service.init();
    this.SERVICE_ROOT = api.getBaseUrl({path : api.service.ROOT});

    let list = await api.service.list();
    list.forEach(service => this.services[name] = new ServiceDefinition(service));
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
    // TODO: if update to a service, reload services
    console.log(event);

    for( let key in this.services ) {
      let service = this.services[key];
      if( !service.webhook ) continue;

      this._sendHttpNotification(key, service.webhook, event);
    }
  }

  _sendHttpNotification(name, url, event) {
    logger.debug(`Sending HTTP webhook notifiction to service ${name} ${url}`);
    request({
      type : 'POST',
      uri : url,
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(event)
    },
    (error, response, body) => {
      if( error ) logger.error(`Failed to send HTTP notification to service ${name} ${url}`, error);
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
    if( typeof val === 'string' ) {
      val = JSON.parse(val);
    }
    this._frame = value;
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