const router = require('express').Router();
const model = require('../../models/services');
const path = require('path');
const requireAdmin = require('../middleware/admin');

router.post('/:name', requireAdmin, async (req, res) => {
  try {
    if( typeof req.body === 'string' ) {
      req.body = JSON.parse(req.body || '{}');
    } 

    model.sendWebhookNotification({
      type : req.params.name,
      payload : req.body
    });
    
    res.json({
      type : req.params.name,
      payload : req.body,
      message : 'message sent, see logs for success/failure'
    });
  } catch(e) {
    res.status(400)
      .json({
        error: true, 
        message: e.message,
        'Content-Type' : req.get('content-type'),
        body: req.body
      });
  }
});

module.exports = router;