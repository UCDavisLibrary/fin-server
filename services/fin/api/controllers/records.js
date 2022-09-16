const router = require('express').Router();
const {records} = require('@ucd-lib/fin-ucd-lib-node-utils');
const utils = require('./utils');
const cors = require('cors');

const model = records;

let idRegExp = /(ark|doi):\/?[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/;
router.use(cors());

router.post('/search', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.search(req.body, {
      allRecords: req.query.all, 
      debug: req.query.debug
    }));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});
router.get('/search', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.search(q, {
      allRecords: req.query.all, 
      debug: req.query.debug
    }));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

router.get('/files/*', async (req, res) => {
  try {
    let id = req.path.replace(/^\/files/, '');
    res.json(await model.getFiles(id));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

router.post('/es-search', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.esSearch(req.body));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});
router.get('/es-search', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.esSearch(q));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});


router.get('/es-get/*', async (req, res) => {
  let id = req.query.id;
  if( !id ) {
    id = req.path.replace(/\/es-get/, '');
  }

  if( !id ) {
    return res.json({error: true, message: 'no id sent'});
  }

  try {
    let result = await model.esGet(id, req.query.debug);
    res.json(result);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
});

router.get('/*', async (req, res) => {
  let id = req.query.id;
  if( !id ) id = req.path;

  if( !id ) {
    return res.json({error: true, message: 'no id sent'});
  }

  try {
    if( id.match(/^\/(ark|doi):*/) ) {
      let info = id.split(idRegExp);
      info = {
        id : req.url.match(idRegExp)[0],
        type : info[1],
        suffix : info[2]
      }

      let result = await model.getByArk(info.id);
      if( !result ) {
        return res.status(404).json({error: true, message: 'unknown ark/doi: '+id})
      }
      res.redirect('/api/records'+result['@id']+info.suffix);
      return;
    }

    // find the root record for this id
    if( req.query.root ) {
      let parts = id.split('/').filter(p => p !== '');
      for( let i = parts.length-1; i >= 0; i-- ) {
        try {
          let result = await model.esGet('/'+parts.join('/'));
          if( result && result.found ) result = result._source;
          if( result.isRootRecord ) {
            id = '/'+parts.join('/');
            break;
          }
        } catch(e) {}
        
        parts.splice(i, 1);
      }
    }

    let result = await model.get(id, (req.query.seo || req.query.schema));
    res.json(result);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
});

module.exports = router;