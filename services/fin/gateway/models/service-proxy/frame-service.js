const serviceModel = require('../services');
const api = require('@ucd-lib/fin-api');

module.exports = async (req, res) => {
  try {
    // if this is a binary resource w/ describedBy, make the call to described by
    let describedBy = req.finContainer.links.describedby || [];
    if( describedBy.length ) {
      req.finServiceInfo.fcPath = new URL(describedBy[0].url).pathname;
    }

    let fcPath = req.finServiceInfo.fcPath.replace(api.getConfig().fcBasePath, '');
    let framed = await serviceModel.renderFrame(req.finService.id, fcPath);
    res.json(framed);
  } catch(e) {
    res.status(500).send({
      error : true,
      message : 'Unable to render from frame service '+req.finService.id,
      details : {
        message : e.message,
        stack : e.stack
      },
      frame : req.finService.frame
    });
  }

}