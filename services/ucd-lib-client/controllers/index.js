var router = require('express').Router();

router.use('/records', require('./records'));
router.use('/collections', require('./collections'));
router.use('/tar', require('./tar'));
router.use('/zip', require('./zip'));

module.exports = router;