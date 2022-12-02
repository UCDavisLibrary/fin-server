const serviceModel = require('../services');
const proxy = require('../../lib/http-proxy');
const {logger} = require('@ucd-lib/fin-service-utils');

const AUTHENTICATION_SERVICE_CHAR = '/auth';

/**
 * @description handle a AuthenticationService request.  Find the service from the service
 * model, create the X-FIN-ORIGINAL-PATH and X-FIN-SERVICE-PATH headers, proxy request
 * with new headers
 * 
 * @param {Object} req Express request
 * @param {Object} res http-proxy response
 */
module.exports = (req, res) => {
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
    // path = path.replace(AUTHENTICATION_SERVICE_CHAR+'/'+service.id, '');

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