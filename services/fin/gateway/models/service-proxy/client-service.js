const serviceModel = require('../services');
const proxy = require('../../lib/http-proxy');
const {logger} = require('@ucd-lib/fin-service-utils');

/**
 * @description Handle request to the client service.  this is basically any request
 * that is not to /auth/* or /fcrepo/*.  This is a strait forward passthrough proxy.
 * 
 * @param {Object} req Express request
 * @param {Object} res http-proxy response
 */
module.exports = (req, res) => {
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