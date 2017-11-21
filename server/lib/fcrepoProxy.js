const express = require('express');
const httpProxy = require('http-proxy');
const {URL} = require('url');
const request = require('request');

const Logger = require('ucdlib-dams-utils').logger();
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

    proxy.on('proxyRes', (proxyRes, req, res) => {
      if( !this.isApiRequest(req) ) return;
      if( this.isServiceRequest(req) ) return;
      this.appendServiceLinkHeaders(req, proxyRes);
    });

    Logger.debug('Initializing proxy');
  }

  async proxyPathResolver(req, res) {
    if( !this.isServiceRequest(req) ) {
      return this.fcrepoProxyRequest(req, res);
    }

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

  async fcrepoProxyRequest(req, res) {
    Logger.debug(`Fcrepo proxy request: http://${config.fcrepo.hostname}:8080${req.originalUrl}`);

    // lookup and store service link headers
    req.fcrepoInfo = {links: []};

    let path = req.originalUrl;
    if( this.isMetadataRequest(req) ) {
      path = path.replace(/fcr:metadata.*/, '');
    }

    var info = await this.containerInfo(path, req);
    if( info.access ) {
      let ext;
      for( var name in this.extensions ) {
        ext = this.extensions[name];
        if( info.binary && ext.onlyContainer ) continue;
        if( !info.binary && ext.onlyBinary ) continue;
        req.fcrepoInfo.links.push(`<${config.server.url}${path}svc:${name}>; rel="service"`);
      }
    }

    proxy.web(req, res, {
      target : `http://${config.fcrepo.hostname}:8080${req.originalUrl}`
    });
  }

  appendServiceLinkHeaders(req, res) {
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
   * Get container info including; access information, container type
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
   * Request promise wrapper and authorization wrapper
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

  isServiceRequest(req) {
    return req.originalUrl.match(IS_SERVICE_URL);
  }

  isApiRequest(req) {
    return (req.originalUrl.indexOf(config.fcrepo.root) === 0)
  }

  isMetadataRequest(req) {
    let last = req.originalUrl.replace(/\/$/,'').split('/').pop();
    return (last === 'fcr:metadata');
  }

}

module.exports = FcrepoProxy;