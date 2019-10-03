const proxy = require('../../lib/http-proxy');
const serviceModel = require('../services');
const forwardedHeader = require('../../lib/forwarded-header');
const workflow = require('./workflow');

module.exports = async (req, res) => {
  let params = {
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

  // will return null if conditions are not met
  args.workflowId = await workflow.runTasks(req);
  if( args.workflowId ) {
    args.workflowId = encodeURIComponent(args.workflowId);
  }
  
  let url = req.finService.renderUrlTemplate(params);
  proxy.web(req, res, {
    target : url,
    headers : {
      [serviceModel.SIGNATURE_HEADER] : serviceModel.createServiceSignature(service.id),
      'Forwarded' : forwardedHeader()
    }
  });
}