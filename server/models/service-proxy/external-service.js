const querystring = require('querystring');
const serviceModel = require('../services');
const workflow = require('./workflow');

module.exports = async (req, res) => {
  if( !req.user ) req.user = {};

  let args = {
    fcUrl: querystring.escape(svcReq.fcUrl),
    svcPath: req.finServiceInfo.svcPath,
    svcId: req.finService.id,
    token: req.token
  };

  // will return null if conditions are not met
  args.workflowId = await workflow.runTasks(req);
  if( args.workflowId ) {
    args.workflowId = encodeURIComponent(args.workflowId);
  }

  let url = req.finService.renderUrlTemplate(args);
  let serviceToken = serviceModel.createServiceSignature(service.id);
  res.set(serviceModel.SIGNATURE_HEADER, serviceToken);
  res.cookie('service-jwt', serviceToken);
  res.redirect(307, url);
}