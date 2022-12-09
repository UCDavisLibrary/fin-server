const router = require('express').Router();
const {collections} = require('@ucd-lib/fin-service-utils');
const utils = require('./utils');
const cors = require('cors');

const model = collections;

router.use(cors());

// all record
router.get('/', async (req, res) => {
  try {
    res.json(await model.all());
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});


// dams search
router.post('/', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.search(req.body, {debug: req.query.debug}));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

// record by id
router.get('/*', async (req, res) => {
  try {
    let id = '/collection'+req.path;

    let opts = {
      seo : (req.query.seo || req.query.schema) ? true : false,
      admin : req.query.admin ? true : false
    }

    res.json(await model.get(id, opts));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});



module.exports = router;