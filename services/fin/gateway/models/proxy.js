const {URL} = require('url');
const api = require('@ucd-lib/fin-api');
const {logger, config, jwt, keycloak, FinAC} = require('@ucd-lib/fin-service-utils');
const serviceModel = require('./services');
const proxy = require('../lib/http-proxy');
const serviceProxy = require('./service-proxy');
const forwardedHeader = require('../lib/forwarded-header');
const authenticationServiceProxy = require('./service-proxy/authentication-service');
const clientServiceProxy = require('./service-proxy/client-service');
const finac = new FinAC();

const FIN_URL = new URL(config.server.url);

// cors headers we attach to registered origins
const CORS_HEADERS = {
  ['Access-Control-Allow-Methods'] : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  ['Access-Control-Expose-Headers'] : 'content-type, link, content-disposition, content-length, pragma, expires, cache-control',
  ['Access-Control-Allow-Headers'] : 'authorization, range, cookie, content-type, prefer, slug, cache-control, accept',
  ['Access-Control-Allow-Credentials'] : 'true'
}
const UNKNOWN_ORIGIN_CORS_HEADERS = {
  ['Access-Control-Allow-Methods'] : 'GET, OPTIONS',
  ['Access-Control-Expose-Headers'] : 'content-type, link, content-disposition, content-length, pragma, expires, cache-control',
  ['Access-Control-Allow-Headers'] : 'range, cookie, content-type, prefer, slug, cache-control, accept'
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
    app.use(/^\/auth\/(?!token|user|logout|mint|service|login-shell).*/i, authenticationServiceProxy);

    app.use(/^\/label\/.*/, this._renderLabel);

    // handle global services
    app.use(/^\/.+/, serviceProxy.globalServiceMiddleware);

    // send all requests that are not /fcrepo, /auth or /fin to the ClientService
    // fcrepo is really handled above but reads a little better to add... :/
    app.use(/^\/(?!auth|fcrepo|fin).*/, clientServiceProxy);
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
      } else if( proxyRes.headers['x-fin-authorized-token'] ) {
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

    // this is a hack for browser caching, see method details
    this._setNoCacheHeaders(proxyRes);
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
    // if( !req.headers.referer ) return;
    let referer = req.headers.referer || '';
    let origin = '', rootDomain;


    if( referer ) {
      origin = new URL(req.headers.referer).origin;

      // first check if request is registered domain
      rootDomain = serviceModel.getRootDomain(referer);
    }

    // not fin server domain, external service domain or allowed origin domain
    let headers = CORS_HEADERS;
    if( ROOT_DOMAIN !== rootDomain && !serviceModel.authServiceDomains[rootDomain] && !this.allowOrigins[rootDomain] ) {
      headers = UNKNOWN_ORIGIN_CORS_HEADERS;
    }

    if( res.set ) {
      for( var key in headers ) {
        res.set(key, headers[key]);
      }
      res.set('Access-Control-Allow-Origin', origin);
    } else {
      for( var key in headers ) {
        res.headers[key] = headers[key];
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
      req.headers['forwarded'] = forwardedHeader();
    }

    // if this is not a service request, preform basic fcrepo proxy request
    if( !serviceModel.isServiceRequest(req) ) {
      return this._fcrepoProxyRequest(req, res);
    }

    // otherwise we have a service request
    // parse the incoming request path
    serviceProxy.middleware(req, res);
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

    let user;
    req.headers['x-fin-principal'] = 'fedoraUser';
    try {
      user = req.user;

      // TODO: handle admins
      // See fcrepo.properties for this value
      if( user ) {
        let roles = new Set();
        roles.add('fedoraUser');

        if( user.username ) roles.add(user.username);
        if( user.preferred_username ) roles.add(user.preferred_username);

        if( user.roles && Array.isArray(user.roles) ) {
          user.roles.forEach(role => roles.add(role));
        }

        // promote admins to fin-ac roles
        if( roles.has(config.finac.agents.admin) ) {
          roles.add(config.finac.agents.discovery);
          roles.add(config.finac.agents.protected);
        } else {
          // see if the user has a temp finac access
          let hasFinacGrant = await finac.hasAccess(path, Array.from(roles));
          if( hasFinacGrant ) {
            roles.add(config.finac.agents.discovery);
            roles.add(config.finac.agents.protected);
          }
        }

        req.headers['x-fin-principal'] = Array.from(roles).join(',');
      }
    } catch(e) {}

    // store for serivce headers
    req.fcPath = path;

    // set base user auth
    let fcrepoApiConfig = api.getConfig();
    req.headers['authorization'] = 'Basic '+Buffer.from(fcrepoApiConfig.username+':'+fcrepoApiConfig.password).toString('base64');

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
    let token = res.headers['x-fin-authorized-token'];
    if( !token ) {
      // mint token
      let username = res.headers['x-fin-authorized-agent'];

      // TODO
      let isAdmin = false;
      let acl = {};
      // let isAdmin = authModel.isAdmin(username);
      // let acl = authModel.getUserAcl(username);

      token = jwt.create(username, isAdmin, acl);
    }

    // set redirect url
    logger.info('redirect debug', req.query.cliRedirectUrl, req.query.redirectUrl, '/');
    let url = req.query.cliRedirectUrl || req.query.redirectUrl || '/';
    if( req.query.provideJwt === 'true') {
      url += '?jwt='+token+'&username='+username;
    }

    logger.info('redirect debug', url);
    
    // hijack response, setting redirect to desired location
    res.statusCode = 302;
    res.headers['location'] = url;
    res.headers['set-cookie'] = config.jwt.cookieName+'='+token+'; Path=/; HttpOnly';
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

  async _renderLabel(req, res) {
    try {
      let uri = decodeURIComponent(req.originalUrl.replace(/^\/label\//, ''));
      let labels = await serviceModel.renderLabel(uri);
      let graphs = labels.map(item => {
        return {
          '@id' : item.container,
          '@graph' : [{
            '@id' : item.subject,
            [item.predicate] : item.object
          }]
        }}
      );

      res.json({
        '@graph' : graphs
      });
    } catch(e) {
      res.status(500)
        .json({
          error : true,
          message : e.message,
          stack: e.stack
        })
    }
  }

}

module.exports = new ProxyModel();