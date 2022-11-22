const proxy = require('../../lib/http-proxy');
const serviceModel = require('../services');
const {config} = require('@ucd-lib/fin-service-utils');
const {URL} = require('url');
const forwardedHeader = require('../../lib/forwarded-header');
const workflow = require('./workflows');
// const streamify = require('stream-array');
// const stream = require('stream');

let HOST = new URL(config.server.url);
HOST = HOST.protocol+'//'+HOST.host;

module.exports = async (req, res) => {


  let params = {
    host: encodeURIComponent(HOST),
    fcPath : req.finServiceInfo.fcPath, 
    svcPath: req.finServiceInfo.svcPath,
    svcId: req.finService.id
  };

  // if the service has multiple endpoints, the first part of the 
  // service is the route
  if( req.finService.multiRouteTemplate ) {
    let parts = (req.finServiceInfo.svcPath || '').replace(/^\//, '').split('/');
    if( parts.length > 0 ) {
      params.route = parts.splice(0, 1)[0];
      params.svcPath = parts.join('/');
    }
  }

  
  let proxyOpts = {
    headers : {
      [serviceModel.SIGNATURE_HEADER] : serviceModel.createServiceSignature(req.finService.id, req.user),
      'Forwarded' : forwardedHeader(),
      'x-fin-original-url' : req.originalUrl
    }
  }

  // will return null if conditions are not met
  let workflowData = await workflow.runTasks(req);
  if( workflowData ) {
    params.workflowId = encodeURIComponent(workflowData.workflowId);
  }
  
  let url = req.finService.renderUrlTemplate(params);
  proxyOpts.target = url;
  proxyOpts.headers.host = new URL(url).hostname;
  
  proxy.web(req, res, proxyOpts);
}