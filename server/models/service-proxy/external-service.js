const querystring = require('querystring');
const serviceModel = require('../services');
const workflow = require('./workflows');

module.exports = async (req, res) => {
  if( !req.user ) req.user = {};

  let args = {
    fcUrl: querystring.escape(svcReq.fcUrl),
    svcPath: req.finServiceInfo.svcPath,
    svcId: req.finService.id,
    token: req.token
  };

  // will return null if conditions are not met
  let workflowData = await workflow.runTasks(req);
  if( workflowData ) {
    args.workflowId = encodeURIComponent(workflowData.workflowId);
  }

  let url = req.finService.renderUrlTemplate(args);
  let serviceToken = serviceModel.createServiceSignature(req.finService.id, req.user);
  res.set(serviceModel.SIGNATURE_HEADER, serviceToken);
  res.cookie('service-jwt', serviceToken);
  res.redirect(307, url);
}