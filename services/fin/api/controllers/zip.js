const router = require('express').Router();
const {config} = require('@ucd-lib/fin-service-utils');
const HttpZipStream = require('../lib/http-zip-stream');
const cors = require('cors');
const {records} = require('@ucd-lib/fin-service-utils');
const path = require('path');

const model = records;

router.use(cors());

router.get(/^\/bag-of-files\/.*/, async (req, res) => {
  let id = req.originalUrl.replace(/\/api\/zip\/bag-of-files/, '');

  try {
    let record = await model.get(id);
    
    let name = record.name || id.split('/').pop();
    name = name.replace(/ /g, '-').toLowerCase()+'.zip';

    let files = {};
    (await model.getFiles(id)).forEach(file => {
      files[file.filename] = {
        url : config.fin.host+'/fcrepo/rest'+file.path,
        dir : path.parse(file.path.replace(id, '')).dir
      }
    });
    
    let stream = new HttpZipStream();
    await stream.zip(res, name, files);
  } catch(e) {
    res.status(500).json({
      error: true,
      message : 'Failed to generate archive for container',
      details : e.message,
      stack : e.stack
    });
  }
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