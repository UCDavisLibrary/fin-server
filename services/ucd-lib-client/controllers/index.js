var router = require('express').Router();

router.use('/records', require('./records'));
router.use('/collections', require('./collections'));

module.exports = router;