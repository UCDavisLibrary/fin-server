const router = require('express').Router();
const {config} = require('@ucd-lib/fin-service-utils');
const HttpTarStream = require('../lib/http-tar-stream');
const cors = require('cors');

router.use(cors());

router.get('/:filename', async (req, res) => {
  let body = req.query.paths || '{}';
  try {
    body = JSON.parse(body);
    if( typeof body !== 'object' ) {
      return res.json({error:true, message:'paths not a JSON object'});
    }
  } catch(e) {
    res.json(utils.errorResponse(e, 'Invalid path object'));
  }

  _createTar(body, req, res);
});

router.post('/:filename', async (req, res) => {
  let body = req.body.paths || '{}';
  try {
    body = JSON.parse(body);
    if( typeof body !== 'object' ) {
      return res.json({error:true, message:'paths not a JSON object'});
    }
  } catch(e) {
    res.json(utils.errorResponse(e, 'Invalid path object'));
  }

  _createTar(body, req, res);
});

async function _createTar(body, req, res) {
  if( Object.keys(body).length === 0 ) {
    return res.json({error:true, message:'no urls provided'});
  }

  for( var key in body ) {
    body[key] = config.fin.host+body[key];
  }

  try {
    let stream = new HttpTarStream();
    await stream.tar(res, req.params.filename, body);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error creating tar stream'));
  }
}

module.exports = router;