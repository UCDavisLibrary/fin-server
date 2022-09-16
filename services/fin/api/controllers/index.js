var router = require('express').Router();

router.use('/records', require('./records'));
router.use('/collections', require('./collections'));
router.use('/applications', require('./applications'));
router.use('/tar', require('./tar'));
router.use('/zip', require('./zip'));

module.exports = router;