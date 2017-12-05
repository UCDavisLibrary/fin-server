const express = require('express');
const httpProxy = require('http-proxy');
const {URL} = require('url');
const request = require('request');

const {logger} = require('@ucd-lib/fin-node-utils');
const Logger = logger();
const config = require('../config');

var proxy = httpProxy.createProxyServer({
    ignorePath : true
});


const SERVICE_CHAR = '/svc:'
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');


// Link: <http://archive.example.org/services/foo/svc:list>; rel=”service”
class FcrepoProxy {

  constructor(app) {
    this.extensions = config.services.extensions;
    app.use('/fcrepo', this.proxyPathResolver.bind(this));

    // listen for proxy responses, if the request is not a /fcrepo request
    // and not a service request, append the service link headers.
    proxy.on('proxyRes', (proxyRes, req, res) => {
      Logger.info(`Proxy Request time: ${Date.now() - req.timer.time}ms ${req.timer.label}`);

      if( !this.isApiRequest(req) ) return;
      if( this.isServiceRequest(req) ) return;
      this.appendServiceLinkHeaders(req, proxyRes);
    });

    Logger.debug('Initializing proxy');
  }

  /**
   * @method proxyPathResolver
   * @description start method for handling proxy requests
   * 
   * @param {Object} req http request object 
   * @param {Object} res http response object
   */
  async proxyPathResolver(req, res) {
    req.timer = {
      time : Date.now(),
      label : `${req.method} ${req.originalUrl}`
    }

    // if this is not a service request, preform basic fcrepo proxy request
    if( !this.isServiceRequest(req) ) {
      return this.fcrepoProxyRequest(req, res);
    }

    // otherwise we have a service request
    // parse the incoming request path
    let parts = req.originalUrl.split(SERVICE_CHAR);

    let extensionRequest = {
      path : parts[0],
      extension : {
        name : '',
        path : ''
      }
    }

    parts = parts[1].split('/');
    extensionRequest.extension.name = parts.shift();
    extensionRequest.extension.path = parts.length > 0 ? '/'+parts.join('/') : '';

    this.extensionProxyRequest(extensionRequest, req, res);
  }

  /**
   * @method fcrepoProxyRequest
   * @description main method for handling /fcrepo proxy requests
   */
  async fcrepoProxyRequest(req, res) {
    let url = `http://${config.fcrepo.hostname}:8080${req.originalUrl}`;
    Logger.debug(`Fcrepo proxy request: ${url}`);


    // lookup and store service link headers
    req.fcrepoInfo = {links: []};

    let path = req.originalUrl;
    if( this.isMetadataRequest(req) ) {
      path = path.replace(/fcr:metadata.*/, '');
    }

    // var info = await this.containerInfo(path, req);
    // if( info.access ) {
    //   let ext;
    //   for( var name in this.extensions ) {
    //     ext = this.extensions[name];
    //     if( info.binary && ext.onlyContainer ) continue;
    //     if( !info.binary && ext.onlyBinary ) continue;
    //     req.fcrepoInfo.links.push(`<${config.server.url}${path}svc:${name}>; rel="service"`);
    //   }
    // }

    for( var name in this.extensions ) {
      let ext = this.extensions[name];
      // TODO: implement me
      // if( info.binary && ext.onlyContainer ) continue;
      // if( !info.binary && ext.onlyBinary ) continue;
      req.fcrepoInfo.links.push(`<${config.server.url}${path}svc:${name}>; rel="service"`);
    }

    proxy.web(req, res, {
      target : url
    });
  }

  appendServiceLinkHeaders(req, res) {
    if( res.statusCode < 200 || res.statusCode >= 300 ) return;

    let links = res.headers.link ? res.headers.link.split(',') : [];
    req.fcrepoInfo.links.forEach(link => links.push(link));
    res.headers.link = links.join(',');
  }

  /**
   * 
   * @param {*} extReq - Extension request object, parsed above
   * @param {*} expReq - Express request object
   */
  async extensionProxyRequest(extReq, expReq, res) {
    if( !this.extensions[extReq.extension.name] ) {
      return res.status(400).send(`Unknown Extension: `+extReq.extension.name);
    }

    let info = await this.containerInfo(extReq.path, expReq);
    if( !info.access ) {
      return res.status(403).send('Unauthorized');
    }

    let ext = this.extensions[extReq.extension.name];
    if( ext.onlyBinary && !info.binary ) {
      return res.status(400).send('Invalid container type');
    } else if( ext.onlyContainer && info.binary ) {
      return res.status(400).send('Invalid container type');
    }

    let url = ext.proxy(ext.url, extReq.path, extReq.extension.path);
    proxy.web(expReq, res, {target : url});
  }

  /**
   * @method containerInfo
   * @description Get container info including; access information, container type
   */
  async containerInfo(path, req) {
    var token = req.cookies[config.jwt.cookieName] || '';
    
    if( !token ) {
      token = req.get('Authorization');
      if( token ) token = token.replace(/^Bearer /, '');
    }

    var {response, body} = await this._request({
      type : 'HEAD',
      uri : path
    }, token);

    if( response.statusCode >= 300 ) {
      return {
        access : false
      }
    }

    if( response.headers['content-disposition'] ) {
      return {access: true, binary: true};
    }
    return {access: true, binary: false};
  }

  /**
   * @method _request
   * @private
   * @description Request promise wrapper and authorization wrapper
   */
  _request(options, token) {
    if( token ) {
      if( !options.headers ) options.headers = {};
      options.headers.Authorization = `Bearer ${token}`;
    }
    options.uri = `${config.fcrepo.host}${options.uri}`;

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve({response, body});
      });
    });
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
   * @method isApiRequest
   * @description is this request a /fcrepo request?
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  isApiRequest(req) {
    return (req.originalUrl.indexOf(config.fcrepo.root) === 0)
  }

  /**
   * @method isMetadataRequest
   * @description is this request a metadata /fcr:metadata request
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  isMetadataRequest(req) {
    let last = req.originalUrl.replace(/\/$/,'').split('/').pop();
    return (last === 'fcr:metadata');
  }

}

module.exports = FcrepoProxy;