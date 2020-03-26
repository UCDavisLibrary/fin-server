const router = require('express').Router();
const config = require('../config');
const HttpZipStream = require('../lib/http-zip-stream');
const cors = require('cors');

router.use(cors());

router.post('/bag-of-files/:filename', async (req, res) => {

  try {
    
  } catch(e) {}

  _createZip(body, req, res);
});

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

  _createZip(body, req, res);
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

  _createZip(body, req, res);
});

async function _createZip(body, req, res) {
  if( Object.keys(body).length === 0 ) {
    return res.json({error:true, message:'no urls provided'});
  }

  for( var key in body ) {
    body[key] = config.fin.host+body[key];
  }

  try {
    let stream = new HttpZipStream();
    await stream.zip(res, req.params.filename, body);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error creating zip stream'));
  }
}

module.exports = router;