const httpProxy = require('http-proxy');
const {URL} = require('url');
const request = require('request');
const querystring = require('querystring');
const api = require('@ucd-lib/fin-node-api');
const {logger, config, jwt} = require('@ucd-lib/fin-node-utils');

const authModel = require('./auth');
const serviceModel = require('./services');
const cache = require('./cache');

var proxy = httpProxy.createProxyServer({
    ignorePath : true
});

const FIN_URL = new URL(config.server.url);

// Proxy|Frame|External service delimiter
const SERVICE_CHAR = '/svc:'
// AuthenticationService path
const AUTHENTICATION_SERVICE_CHAR = '/auth'
// regex for above
const IS_SERVICE_URL = new RegExp(SERVICE_CHAR, 'i');
const IS_AUTHENTICATION_SERVICE_URL = new RegExp('^'+AUTHENTICATION_SERVICE_CHAR, 'i');

// cors headers we attach to registered origins
const CORS_HEADERS = {
  ['Access-Control-Allow-Methods'] : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  ['Access-Control-Expose-Headers'] : 'content-type, link, content-disposition, content-length, pragma, expires, cache-control',
  ['Access-Control-Allow-Headers'] : 'authorization, cookie, content-type, prefer, slug, cache-control',
  ['Access-Control-Allow-Credentials'] : 'true'
}

const ROOT_DOMAIN = serviceModel.getRootDomain(config.server.url);

/**
 * @class ProxyModel
 * @description main class the interacts with outside world and handles service requests
 */
class ProxyModel {

  constructor() {
    logger.debug('Initializing proxy');

    // listen for proxy responses, if the request is not a /fcrepo request
    // and not a service request, append the service link headers.
    proxy.on('proxyRes', this._onProxyResponse.bind(this));

    // set the allowed origins for CORS requests provided by env variable
    this.allowOrigins = {};
    config.server.allowOrigins.forEach(origin => {
      try {
        this.allowOrigins[serviceModel.getRootDomain(origin)] = true;
      } catch(e) {}
    });
  }

  /**
   * @method bind
   * @description bind proxy to express endpoints
   * 
   * @param {Object} app express instance
   */
  bind(app) {
    // handle ALL /fcrepo requests
    app.use('/fcrepo', this._fcRepoPathResolver.bind(this));
    
    // handle AuthenticationService requests. Do not handle Fin auth endpoints
    // of /auth/token /auth/user /auth/logout /auth/mint /auth/service, these are reserved
    app.use(/^\/auth\/(?!token|user|logout|mint|service).*/i, this._proxyAuthenticationService.bind(this));
    
    // send all requests that are not /fcrepo, /auth or /fin to the ClientService
    // fcrepo is really handled above but reads a little better to add... :/
    app.use(/^\/(?!auth|fcrepo|fin).*/, this._proxyClientService.bind(this));
  }

  /**
   * @method _onProxyResponse
   * @description called whenever a proxy request is completed
   * 
   * @param {Object} proxyRes response from proxy request
   * @param {Object} req express request
   * @param {Object} res express response
   */
  async _onProxyResponse(proxyRes, req, res) {
    this._setReqTime(req);

    // set cors headers if in FIN_ALLOW_ORIGINS env variable or is a registered ExternalService domain
    // this._setCors(req, proxyRes);

    // if this is a AuthenticationService request AND the proxy response has 
    // x-fin-authorized-agent header, hijack response and finish Fin auth flow
    if( serviceModel.isAuthenticationServiceRequest(req) ) {
      if( proxyRes.headers['x-fin-authorized-agent'] ) {
        this._handleAuthenticationSuccess(req, proxyRes);
      }
      return;
    }

    // this is not fcrepo request, there is nothing left for us to do
    if( !this._isFcrepoRequest(req) ) return;

    // if this was a fin fcrepo /svc: request, we are done
    if( serviceModel.isServiceRequest(req) ) return;
    
    // we had a true fcrepo request, append appropriate fin service link headers
    this._appendServiceLinkHeaders(req, proxyRes);

    this._setNoCacheHeaders(proxyRes);

    // set the cache
    if( cache.isCacheableRequest(req) ) {
      cache.set(req.originalUrl, proxyRes, req);
    }

    // finally set the cache header (either miss or ignored)
    proxyRes.headers[cache.HEADER] = req.cacheStatus;
  }

  /**
   * @method _setNoCache
   * @description turn off cache for browser support. this fixes bug when 
   * browser changes Accept: [format] headers.  The header does not invalidate 
   * browser cache and cause bad response
   * 
   * @param {Object} proxyRes http-proxy response
   */
  _setNoCacheHeaders(proxyRes) {
    proxyRes.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    proxyRes.headers['Expires'] = '0';
    proxyRes.headers['Pragma'] = 'no-cache';
  }

  /**
   * @method _setCors
   * @description set cors headers for response
   * 
   * @param {Object} req express request
   * @param {Object} res express response
   */
  _setCors(req, res) {
    if( !req.headers.referer ) return;

    // first check if request is registered domain
    let rootDomain = serviceModel.getRootDomain(req.headers.referer);

    // not fin server domain, external service domain or allowed origin domain
    if( ROOT_DOMAIN !== rootDomain && !serviceModel.authServiceDomains[rootDomain] && !this.allowOrigins[rootDomain] ) {
      logger.warn('Request with referer set to unknown domain: '+rootDomain+' / '+req.headers.referer);
      return;
    }

    let origin = new URL(req.headers.referer).origin;
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
   * @method _fcRepoPathResolver
   * @description start method for handling fcrepo proxy requests
   * 
   * @param {Object} req express request object 
   * @param {Object} res express response object
   */
  async _fcRepoPathResolver(req, res) {
    req.fcrepoProxyTime = Date.now();

    this._setCors(req, res);

    // trying to sniff out browser preflight options request for cors
    // fcrepo sees this as a normal options request and doesn't handle correctly
    if( req.method === 'OPTIONS' && req.headers['access-control-request-headers'] ) {
      this._setReqTime(req);
      return res.status(200).send();
    }

    // set forwarded header to our base server url
    if( config.server.url ) {
      req.headers['Forwarded'] = this._getForwardedHeader();
    }

    // if this is not a service request, preform basic fcrepo proxy request
    if( !serviceModel.isServiceRequest(req) ) {
      return this._fcrepoProxyRequest(req, res);
    }

    // otherwise we have a service request
    // parse the incoming request path
    this._serviceProxyRequest(serviceModel.parseServiceRequest(req), req, res);
  }

  _getForwardedHeader() {
    return `host=${FIN_URL.host}; proto=${FIN_URL.protocol.replace(/:$/,'')}`
  }

  /**
   * @method fcrepoProxyRequest
   * @description main method for handling /fcrepo proxy requests
   * 
   * @param {Object} req express request object 
   * @param {Object} res express response object
   */
  async _fcrepoProxyRequest(req, res) {
    let path = req.originalUrl;
    if( this._isMetadataRequest(req) ) {
      path = path.replace(/fcr:metadata.*/, '');
    }

    // store for serivce headers
    req.fcPath = path;

    // see if a cache hit
    if( cache.isCacheableRequest(req) ) {
    
      // first preflight a head request for headers so we can check out and cache
      let info = await this._getContainerAccessAndInfo(req.originalUrl, req);
      if( !info.access ) {
        return res.status(info.response.statusCode).send(info.response.body || '');
      }
      
      // we don't cache binary resources
      if( info.binary ) {
        req.cacheStatus = 'ignored';
      } else {
        // see if there is something in the cache
        
        // we had a true fcrepo request, append appropriate fin service link headers
        this._appendServiceLinkHeaders(req, info.response);
        let cachedRes = await cache.get(req.originalUrl, info.response.headers, req);
       
        // cache hit, set headers, body, return.  we are done.
        if( cachedRes ) {
          this._setReqTime(req);
          for( var key in cachedRes.headers ) {
            res.set(key, cachedRes.headers[key]);
          }
          res.set(cache.HEADER, 'hit');
          return res.send(cachedRes.body);

        // cache miss, store status so we can set header
        } else {
          req.cacheStatus = 'miss';
        }
      }
    }

    let url = `http://${config.fcrepo.hostname}:8080${req.originalUrl}`;
    logger.debug(`Fcrepo proxy request: ${url}`);

    proxy.web(req, res, {
      target : url
    });
  }

  /**
   * @method _appendServiceLinkHeaders
   * @description append service link headers to a fcrepo proxy response
   * 
   * @param {Object} req express request object 
   * @param {Object} res http-proxy response object
   */
  _appendServiceLinkHeaders(req, res) {
    if( !api.isSuccess(res) ) return;

    // parse out current link headers
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

  /**
   * @method _handleAuthenticationSuccess
   * @description handle a AuthenticationService response that has the x-fin-authorized-agent
   * header.  Extract the agent (username) and mint a new token.  Finally, redirect user to
   * root or provided redirect path.  Optionally, provide jwt token in query param if requested.
   * 
   * @param {Object} req Express request
   * @param {Object} res http-proxy response
   */
  async _handleAuthenticationSuccess(req, res) {
    // mint token
    let username = res.headers['x-fin-authorized-agent'];
    let isAdmin = authModel.isAdmin(username);
    let token = jwt.create(username, isAdmin);

    // set redirect url
    let url = req.query.cliRedirectUrl || req.query.redirectUrl || '/';
    if( req.query.provideJwt === 'true') {
      url += '?jwt='+token+'&username='+username;
    }
    
    // hijack response, setting redirect to desired location
    res.statusCode = 302;
    res.headers['location'] = url;
    res.headers['set-cookie'] = config.jwt.cookieName+'='+token+'; Path=/; HttpOnly';
  }

  /**
   * @method _serviceProxyRequest
   * @description handles proxy requests for FrameService, ProxyService and ExternalSerivce
   * requests. First checks requesting agent has access via a head request.
   * 
   * @param {Object} svcReq - Service request object, parsed above
   * @param {Object} expReq - Express request object
   * @param {Object} res - Express response object
   */
  async _serviceProxyRequest(svcReq, expReq, res) {
    // check this is even a valid service name
    if( !serviceModel.services[svcReq.name] ) {
      this._setReqTime(expReq);
      return res.status(400).send(`Unknown Service: `+svcReq.name);
    }

    // check the requesting agent has access, if so, get information about
    // this container from the fcrepo link headers
    let info = await this._getContainerAccessAndInfo(svcReq.fcPath, expReq);
    if( !info.access ) {
      this._setReqTime(expReq);
      return res.status(403).send('Unauthorized');
    }

    // grab the service definition
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
        this._setReqTime(expReq);
        res.json(framed);
      } catch(e) {
        this._setReqTime(expReq);
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

    } else if( service.type === api.service.TYPES.TRANSFORM ) {
      try {
        let fcPath = svcReq.fcPath.replace(api.getConfig().basePath, '');
        let transformed = await serviceModel.renderTransform(service.id, fcPath);
        res.json(transformed);
      } catch(e) {
        res.status(500).send({
          error : true,
          message : 'Unable to render from transform service '+service.id,
          details : {
            message : e.message,
            stack : e.stack
          }
        });
      }
      
    // run the proxy service
    } else if( service.type === api.service.TYPES.PROXY ) {
      
      let url = service.renderUrlTemplate({fcPath : svcReq.fcPath, svcPath: svcReq.svcPath});
      proxy.web(expReq, res, {
        target : url,
        headers : {
          [serviceModel.SIGNATURE_HEADER] : serviceModel.createServiceSignature(service.id),
          'Forwarded' : this._getForwardedHeader()
        }
      });

    // run the external service
    } else if( service.type === api.service.TYPES.EXTERNAL ) {
      this._setReqTime(expReq);

      let token = jwt.getJwtFromRequest(expReq);
      let url = service.renderUrlTemplate({fcUrl: querystring.escape(svcReq.fcUrl), token});
      res.set(serviceModel.SIGNATURE_HEADER, serviceModel.createServiceSignature(service.id));
      res.redirect(url);

    // unknown service type
    } else {
      this._setReqTime(expReq);
      res.status(500).json({
        error : true,
        message : 'Unsupported service type for request: '+service.type
      })
    }
  }

  /**
   * @method _proxyAuthenticationService
   * @description handle a AuthenticationService request.  Find the service from the service
   * model, create the X-FIN-ORIGINAL-PATH and X-FIN-SERVICE-PATH headers, proxy request
   * with new headers
   * 
   * @param {Object} req Express request
   * @param {Object} res http-proxy response
   */
  _proxyAuthenticationService(req, res) {
    // find the service name and lookup service in service model
    let parts = req.originalUrl.replace(AUTHENTICATION_SERVICE_CHAR+'/', '').split('/');
    let serviceName = parts.shift();
    let service = serviceModel.services[serviceName];

    // no service found
    if( !service ) {
      return res.status(404).send();
    }

    // strip /auth/[service-name] from request path.  This new path is where we will
    // send proxy request
    let path = req.originalUrl;
    if( path.match(/^http/i) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    path = path.replace(AUTHENTICATION_SERVICE_CHAR+'/'+service.id, '');

    logger.info(`AuthenticationService proxy request: ${req.originalUrl} -> ${service.url+path}`);

    // send proxy request to new path, including reference headers to original request path
    proxy.web(req, res, {
      target : service.url+path,
      headers : {
        'X-FIN-ORIGINAL-PATH' : req.originalUrl,
        'X-FIN-SERVICE-PATH' : AUTHENTICATION_SERVICE_CHAR+'/'+service.id,
        [serviceModel.SIGNATURE_HEADER] : serviceModel.createServiceSignature(service.id)
      },
      ignorePath : true
    });
  }

  /**
   * @method _proxyClientService
   * @description Handle request to the client service.  this is basically any request
   * that is not to /auth/* or /fcrepo/*.  This is a strait forward passthrough proxy.
   * 
   * @param {Object} req Express request
   * @param {Object} res http-proxy response
   */
  _proxyClientService(req, res) {
    if( !serviceModel.clientService ) {
      return res.status(400).send('No ClientService registered');
    }

    try {
      proxy.web(
        req, res, 
        {
          target : serviceModel.clientService.url+req.originalUrl,
          headers : {
            [serviceModel.SIGNATURE_HEADER] : serviceModel.createServiceSignature(serviceModel.clientService.id)
          }
        }
      );
    } catch(e) {
      logger.error('Failed to proxy to ClientService: '+serviceModel.clientService.id, e);
      res.status(400);
    }
  }

  /**
   * @method _getContainerAccessAndInfo
   * @description Get container info including; agent access information, container type
   * 
   * @param {String} path path to container
   * @param {Object} req express request
   * 
   * @returns {Object}
   */
  async _getContainerAccessAndInfo(path, req) {
    var token = jwt.getJwtFromRequest(req);

    // make a head request to get fcrepo statusCode and link headers
    var {response, body} = await this._request({
      method : 'HEAD',
      uri : path
    }, token);

    // if we don't get a 200 range status code from fcrepo, 
    // requesting agent does not have access to this container
    if( !api.isSuccess(response) ) {
      return {access : false, response}
    }

    // parse the link headers, used by following operations
    let links = {};
    if( response.headers.link ) {
      links = api.parseLinkHeader(response.headers.link);
    }

    // if we have a content-disposition header, we are a binary
    // TODO: should we check the couple standard type headers fcrepo includes in the links?
    if( response.headers['content-disposition'] ) {
      return {
        access: true, 
        binary: true,
        links, 
        response
      };
    }

    // we are not a binary container
    return {access: true, binary: false, links, response};
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

  /**
   * @method _isFcrepoRequest
   * @description is this request a /fcrepo request?
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  _isFcrepoRequest(req) {
    return (req.originalUrl.indexOf(config.fcrepo.root) === 0)
  }

  /**
   * @method isMetadataRequest
   * @description is this request a metadata /fcr:metadata request
   * 
   * @param {Object} req http request object
   * @returns {Boolean} 
   */
  _isMetadataRequest(req) {
    let last = req.originalUrl.replace(/\/$/,'').split('/').pop();
    return (last === 'fcr:metadata');
  }

  _setReqTime(req) {
    if( !req.fcrepoProxyTime ) return;
    req.fcrepoProxyTime = Date.now() - req.fcrepoProxyTime;
  }

}

module.exports = new ProxyModel();