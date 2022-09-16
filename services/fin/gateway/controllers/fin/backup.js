const router = require('express').Router();
const model = require('../../models/backup');
const path = require('path');
const requireAdmin = require('../middleware/admin');

router.get('/', requireAdmin, async (req, res) => {
  try {
    let backups = await model.list();
    res.json(backups);
  } catch(e) {
    res.status(500)
      .json({error: true, message: e.message});
  }
});

router.get('/:name/create', requireAdmin, async (req, res) => {
  try {
    let response = await model.create(cleanName(req.params.name));
    res.send({
      name : req.param.name,
      response
    });
  } catch(e) {
    res.status(500)
      .json({error: true, message: e.message});
  }  
});


router.get('/:name/status', requireAdmin, async (req, res) => {
  try {
    let status = model.getStatus(cleanName(req.params.name));
    res.json({name: cleanName(req.params.name), status});
  } catch(e) {
    res.status(500)
        .json({error: true, message: e.message});
  }
});

router.get('/:name/delete', requireAdmin, async (req, res) => {
  try {
    await model.delete(cleanName(req.params.name));
    res.json({success: true});
  } catch(e) {
    res.status(500)
        .json({error: true, message: e.message});
  }
});

router.get('/:name/restore', requireAdmin, async (req, res) => {
  try {
    await model.restore(cleanName(req.params.name));
    res.json({success: true});
  } catch(e) {
    res.status(500)
        .json({error: true, message: e.message});
  }
});

function cleanName(oldName) {
  return path.parse(oldName).name;
}

module.exports = router;