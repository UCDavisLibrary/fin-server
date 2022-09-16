const serviceModel = require('../services');
const api = require('@ucd-lib/fin-node-api');
const request = require('request');
const path = require('path');
const {config, jwt} = require('@ucd-lib/fin-node-utils');
const {URL} = require('url');

const frameService = require('./frame-service');
const transformService = require('./transform-service');
const proxyService = require('./proxy-service');
const labelService = require('./label-service');
const externalService = require('./external-service');
const {logger} = require('@ucd-lib/fin-node-utils');

const LABEL_SERVICE = 'label';
const SERVICE_CHAR = '/svc:';

class ServiceProxy {

  async middleware(req, res) {
    // user does not have access (container or service), service does not exist or
    // container service is working on does exist
    try {
      if( !(await this.validateRequest(req, res)) ) return;
    } catch(e) {
      logger.error('error validating proxy request', e);
      res.status(400).send('Service Error');
      return;
    }

    switch(req.finService.type) {

      case api.service.TYPES.FRAME:
        frameService(req, res);
        break;
      
      case api.service.TYPES.TRANSFORM:
        transformService(req, res);
        break;

      case api.service.TYPES.PROXY:
        proxyService(req, res);
        break;

      case api.service.TYPES.GLOBAL:
        proxyService(req, res);
        break;

      case api.service.TYPES.EXTERNAL:
        externalService(req, res);
        break;

      case LABEL_SERVICE:
        labelService(req, res);
        break;

      default:
        res.status(500).json({
          error : true,
          message : 'Unsupported service type for request: '+service.type
        });
    }

  }

  /**
   * @method globalServiceMiddleware
   * @description handle global fin service requests
   * 
   * @param {Object} req express request
   * @param {Object} res express response
   * @param {Function} next express middleware next function 
   */
  async globalServiceMiddleware(req, res, next) {
    let name = req.originalUrl.replace(/^\//, '').split('/')[0];
    let service = serviceModel.services[name];
    
    if( !service ) return next();
    if( service.type !== api.service.TYPES.GLOBAL ) {
      return next();
    }

    req.finServiceInfo = {
      fcUrl : config.server.url+req.originalUrl,
      fcPath : req.originalUrl,
      name : name,
      svcPath : req.originalUrl,
      global : true
    }
    req.finService = service;

    proxyService(req, res);
  }


  /**
   * @method validateRequest
   * @description does this service exist and does the user have access to it?
   * When finished req will have:
   * 
   * req.token - requesting jwt token
   * req.user - jwt token payload
   * req.finService - fin service object
   * req.finServiceInfo - fin service info parsed from url
   * req.finContainer - container information for requesting container (if applicable)
   * 
   * @return {Boolean}
   */
  async validateRequest(req, res) {
    
    // parse the url path
    this.parseServiceRequestUrl(req);

    // grab the service definition
    let service = serviceModel.services[req.finServiceInfo.name];
    req.finService = service;

    // check this is even a valid service name
    if( !service ) {
      res.status(404).send(`Unknown Service: `+req.finServiceInfo.name);
      return false;
    }

    // check for a global service name that matched the proxy service path
    if( service.type === api.service.TYPES.GLOBAL && !req.finServiceInfo.global ) {
      res.status(404).send(`Unknown Service: `+req.finServiceInfo.name);
      return false;
    }

    // check the requesting agent has access, if so, get information about
    // this container from the fcrepo link headers
    await this.setContainerInfo(req);
    if( !req.finContainer.access ) {
      res.status(info.response.statusCode).send(info.response.body);
      return false;
    }

    // if this is a protected service, only allow admins or people with webac read access
    // to service definition
    if( service.protected ) {
      let token = req.token;
      if( !token ) {
        res.status(401).send('Protected Service');
        return false;
      }

      let user = jwt.validate(token);
      if( !user ) {
        res.status(403).send('Protected Service');
        return false;
      }
      req.user = user;

      let acl = (user.acl || {}).acl || {};
      let access = acl['/.services/'+service.id] || '';

      if( !user.admin && !access.indexOf('r') > 0 ) {
        res.status(403).send('Protected Service');
        return false;
      }
    }

    return true;
  }

  /**
   * @method setContainerInfo
   * @description Get container info including; agent access information, container type
   * 
   * @param {String} path path to container
   * @param {Object} req express request
   * 
   * @returns {Object}
   */
  async setContainerInfo(req) {
    req.token = jwt.getJwtFromRequest(req);

    // if( req.finServiceInfo.global ) {
    //   req.finContainer = {access: true};
    //   return;
    // }

    // make a head request to get fcrepo statusCode and link headers
    var {response} = await _request({
      method : 'HEAD',
      uri : req.finServiceInfo.fcPath
    }, req.token);

    // if we don't get a 200 range status code from fcrepo, 
    // requesting agent does not have access to this container
    if( !api.isSuccess(response) ) {
      req.finContainer = {access : false, response};
      return;
    }

    // parse the link headers, used by following operations
    let links = {};
    if( response.headers.link ) {
      links = api.parseLinkHeader(response.headers.link);
    }

    // if we have a content-disposition header, we are a binary
    // TODO: should we check the couple standard type headers fcrepo includes in the links?
    if( response.headers['content-disposition'] ) {
      req.finContainer =  {
        access: true, 
        binary: true,
        links, 
        token: req.token,
        response
      };
      return;
    }

    // we are not a binary container
    req.finContainer = {access: true, binary: false, links, response, token: req.token};
  }

  /**
   * @method parseServiceRequestUrl
   * @description given a ExpressJS Request object, parse out the service parameters.  These are of 
   * the form: http://my-host.org/[fcPath]/svc:[name]/[svcPath]
   * 
   * @param {Object} req Express Request
   * 
   * @returns {Object} service request information object
   */
  parseServiceRequestUrl(req) {
    let parts = req.originalUrl.split(SERVICE_CHAR);

    let serviceRequest = {
      fcUrl : config.server.url+req.originalUrl.replace(new RegExp(SERVICE_CHAR+'.*'), ''),
      fcPath : parts[0],
      name : '',
      svcPath : '',
      // global : req.originalUrl.match(/^\/svc:.*/) ? true : false
    }

    parts = parts[1].split('/');
    serviceRequest.name = parts.shift();
    serviceRequest.svcPath = parts.length > 0 ? '/'+parts.join('/') : '';

    req.finServiceInfo = serviceRequest;
  }

}

/**
 * @method _request
 * @private
 * @description Request promise wrapper and authorization wrapper
 */
function _request(options, token) {
  if( token ) {
    if( !options.headers ) options.headers = {};
    options.headers.Authorization = `Bearer ${token}`;
    options.headers.host = new URL(config.server.url).host;
  }

  options.uri = `http://${config.fcrepo.hostname}:8080${options.uri}`;

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if( error ) reject(error);
      else resolve({response, body});
    });
  });
}

module.exports = new ServiceProxy();