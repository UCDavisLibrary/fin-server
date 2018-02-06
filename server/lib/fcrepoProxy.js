const express = require('express');
const httpProxy = require('http-proxy');
const {URL} = require('url');
const request = require('request');
const api = require('@ucd-lib/fin-node-api');
const {logger} = require('@ucd-lib/fin-node-utils');
const Logger = logger();
const config = require('../config');
const auth = require('../lib/auth');
const querystring = require('querystring');
const jwt = require('jsonwebtoken');
const serviceModel = require('../models/services');

var proxy = httpProxy.createProxyServer({
    ignorePath : true
});


const SERVICE_CHAR = '/svc:'
const AUTHENTICATION_SERVICE_CHAR = '/auth'
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');
const IS_AUTHENTICATION_SERVICE_URL = new RegExp('^'+AUTHENTICATION_SERVICE_CHAR, 'i');

const CORS_HEADERS = {
  ['Access-Control-Allow-Methods'] : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  ['Access-Control-Expose-Headers'] : 'content-type, link, content-disposition, content-length, pragma, expires, cache-control',
  ['Access-Control-Allow-Headers'] : 'authorization, cookie, content-type, prefer, slug, cache-control',
  ['Access-Control-Allow-Credentials'] : 'true'
}

/**
 * @class FcrepoProxy
 * @description main class the interacts with fcrepo and handles service requests
 */
class FcrepoProxy {

  constructor(app) {
    app.use('/fcrepo', this.proxyPathResolver.bind(this));
    app.use(/\/auth.*/i, this.proxyAuthenticationService.bind(this));

    // listen for proxy responses, if the request is not a /fcrepo request
    // and not a service request, append the service link headers.
    proxy.on('proxyRes', (proxyRes, req, res) => {
      if( req.timer ) {
        Logger.info(`Proxy Request time: ${Date.now() - req.timer.time}ms ${req.timer.label}`);
      }

      // for now, open everything
      this.setCors(req, proxyRes);

      // turn off cache for browser support
      proxyRes.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      proxyRes.headers['Expires'] = '0';
      proxyRes.headers['Pragma'] = 'no-cache';

      if( serviceModel.isAuthenticationServiceRequest(req) ) {
        if( proxyRes.headers['x-fin-authorized-agent'] ) {
          this.handleAuthenticationSuccess(req, proxyRes);
        }
        return;
      }

      if( !this.isApiRequest(req) ) return;
      if( serviceModel.isServiceRequest(req) ) return;
      
      this.appendServiceLinkHeaders(req, proxyRes);
    });

    Logger.debug('Initializing proxy');
  }

  setCors(req, res) {
    let origin = '*';
    if( req.headers.referer ) {
      origin = new URL(req.headers.referer).origin;
    }

    if( res.set ) {
      for( var key in CORS_HEADERS ) {
        res.set(key, CORS_HEADERS[key]);
      }
      res.set('Access-Control-Allow-Origin', origin);
    } else {
      for( var key in CORS_HEADERS ) {
        res.headers[key] = CORS_HEADERS[key];
      }
      res.headers['Access-Control-Allow-Origin'] = origin;
    }
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

    // trying to sniff out browser preflight options request for cors
    if( req.method === 'OPTIONS' && req.headers['access-control-request-headers'] ) {
      this.setCors(req, res);
      return res.status(200).send();
    }

    // if this is not a service request, preform basic fcrepo proxy request
    if( !serviceModel.isServiceRequest(req) ) {
      return this.fcrepoProxyRequest(req, res);
    }

    // otherwise we have a service request
    // parse the incoming request path
    this.serviceProxyRequest(serviceModel.parseServiceRequest(req), req, res);
  }

  /**
   * @method fcrepoProxyRequest
   * @description main method for handling /fcrepo proxy requests
   */
  async fcrepoProxyRequest(req, res) {
    let url = `http://${config.fcrepo.hostname}:8080${req.originalUrl}`;
    Logger.debug(`Fcrepo proxy request: ${url}`);

    let path = req.originalUrl;
    if( this.isMetadataRequest(req) ) {
      path = path.replace(/fcr:metadata.*/, '');
    }

    // store for serivce headers
    req.fcPath = path;

    proxy.web(req, res, {
      target : url
    });
  }

  appendServiceLinkHeaders(req, res) {
    if( res.statusCode < 200 || res.statusCode >= 300 ) return;

    let types = [];
    let clinks = [];
    if( res.headers && res.headers.link ) {
      let links = api.parseLinkHeader(res.headers.link);
      if( links.type ) types = links.type.map(link => link.url);
      clinks = res.headers.link.split(',')
    }
  
    serviceModel.setServiceLinkHeaders(clinks, req.fcPath, types);
    res.headers.link = clinks.join(',');
  }

  handleAuthenticationSuccess(req, res) {
    let payload = {username: res.headers['x-fin-authorized-agent']};
    if( auth.isAdmin(payload.username) ) payload.admin = true;

    let token = jwt.sign(
      payload, 
      config.jwt.secret, 
      {
        issuer: config.jwt.issuer,
        expiresIn: config.jwt.ttl
      }
    );

    let url = req.query.cliRedirectUrl || '/';
    if( req.query.provideJwt === 'true') {
      url += '?jwt='+token+'&username='+payload.username;
    }

    res.statusCode = 302;
    res.headers['location'] = url;
    res.headers['set-cookie'] = config.jwt.cookieName+'='+token+'; Path=/; HttpOnly';
  }

  /**
   * @method serviceProxyRequest
   * @description handle a service request
   * 
   * @param {*} svcReq - Service request object, parsed above
   * @param {*} expReq - Express request object
   * @param {*} res - Express response object
   */
  async serviceProxyRequest(svcReq, expReq, res) {
    if( !serviceModel.services[svcReq.name] ) {
      return res.status(400).send(`Unknown Service: `+svcReq.name);
    }

    let info = await this.containerInfo(svcReq.fcPath, expReq);
    if( !info.access ) {
      return res.status(403).send('Unauthorized');
    }

    let service = serviceModel.services[svcReq.name];

    // run the frame service
    if( service.type === api.service.TYPES.FRAME ) {
      try {
        // if this is a binary resource w/ describedBy, make the call to described by
        let describedBy = info.links.describedby || [];
        if( describedBy.length ) {
          svcReq.fcPath = new URL(describedBy[0].url).pathname;
        }

        let fcPath = svcReq.fcPath.replace(api.getConfig().basePath, '');
        let framed = await serviceModel.renderFrame(service.id, fcPath);
        res.json(framed);
      } catch(e) {
        res.status(500).send({
          error : true,
          message : 'Unable to render from frame service '+service.id,
          details : {
            message : e.message,
            stack : e.stack
          },
          frame : service.frame
        });
      }
    
    // run the proxy service
    } else if( service.type === api.service.TYPES.PROXY ) {
      let url = service.renderUrlTemplate({fcPath : svcReq.fcPath, svcPath: svcReq.svcPath});
      proxy.web(expReq, res, {target : url});

    // run the external service
    } else if( service.type === api.service.TYPES.EXTERNAL ) {
      let token = auth.getJwtFromRequest(expReq);
      let url = service.renderUrlTemplate({fcUrl: querystring.escape(svcReq.fcUrl), token});
      res.redirect(url);

    } else {
      res.status(500).json({
        error : true,
        message : 'Unsupported service type for request: '+service.type
      })
    }
  }

  // run the authentication service
  proxyAuthenticationService(req, res) {
    let parts = req.originalUrl.replace(AUTHENTICATION_SERVICE_CHAR+'/', '').split('/');
    let serviceName = parts.shift();
    let service = serviceModel.services[serviceName];

    if( !service ) {
      return res.status(404).send();
    }

    let path = req.originalUrl;
    if( path.match(/^http/i) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    path = path.replace(AUTHENTICATION_SERVICE_CHAR+'/'+service.id, '');

    Logger.info(`AuthenticationService proxy request: ${req.originalUrl} -> ${service.url+path}`);

    proxy.web(req, res, {
      target : service.url+path,
      headers : {
        'X-FIN-ORIGINAL-PATH' : req.originalUrl,
        'X-FIN-SERVICE-PATH' : AUTHENTICATION_SERVICE_CHAR+'/'+service.id
      },
      ignorePath : true
    });
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

    let links = {};
    if( response.headers.link ) {
      links = api.parseLinkHeader(response.headers.link);
    }

    if( response.statusCode >= 300 ) {
      return {access : false}
    }

    if( response.headers['content-disposition'] ) {
      return {
        access: true, 
        binary: true,
        links 
      };
    }
    return {access: true, binary: false, links};
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