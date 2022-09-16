const api = require('@ucd-lib/fin-node-api');
const serviceModel = require('../services');

module.exports = async (req, res) => {
  try {
    let fcPath = req.finServiceInfo.fcPath.replace(api.getConfig().basePath, '');
    let resp = await serviceModel.renderLabel(fcPath, req.finServiceInfo.svcPath);
    res.json(resp);
  } catch(e) {
    res.status(500).send({
      error : true,
      message : 'Unable to render from label service',
      details : {
        message : e.message,
        stack : e.stack
      }
    });
  }
  
}