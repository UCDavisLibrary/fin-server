const router = require('express').Router();
const {records} = require('@ucd-lib/fin-service-utils');
const utils = require('./utils');
const cors = require('cors');

const model = records;

let idRegExp = /(ark|doi):\/?[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/;
router.use(cors());

router.post('/', async (req, res) => {
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


router.get('/files/*', async (req, res) => {
  try {
    let id = req.path.replace(/^\/files/, '');
    res.json(await model.getFiles(id));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

router.get('/*', async (req, res) => {
  let id = '/item'+req.path;

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
      res.redirect('/api/'+result['@id']+info.suffix);
      return;
    }
    
    let opts = {
      seo : (req.query.seo || req.query.schema) ? true : false,
      admin : req.query.admin ? true : false
    }

    let result = await model.get(id, opts);
    res.json(result);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
});

module.exports = router;