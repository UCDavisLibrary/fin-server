const bodyParser = require('body-parser');
const serviceModel = require('../services');
const api = require('@ucd-lib/fin-api');

module.exports = (req, res) => {
  if (req.finServiceInfo.global) {
    bodyParser.json()(req, res, () => {
      let body = req.body || {};
      if ((Array.isArray(body) && body.length === 0) || Object.keys(body).length === 0) {
        return res.status(400).json({
          error: true,
          message: 'No data body found. You must POST content-type: application/json'
        });
      }
      parsed(req.body, req, res);
    });
  } else {
    parsed((req.finServiceInfo.fcPath || '').replace(api.getConfig().fcBasePath, ''), req, res);
  }
}

async function parsed(dataOrPath, req, res) {
  try {
    let transformed = await serviceModel.renderTransform(req.finService.id, dataOrPath);
    res.json(transformed);
  } catch (e) {
    res.status(500).json({
      error: true,
      message: 'Unable to render from transform service ' + req.finService.id,
      details: {
        message: e.message,
        stack: e.stack
      }
    });
  }
}