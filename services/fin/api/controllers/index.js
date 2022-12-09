var router = require('express').Router();

router.use('/item', require('./item'));
router.use('/collection', require('./collection'));
router.use('/applications', require('./applications'));
router.use('/tar', require('./tar'));
router.use('/zip', require('./zip'));

module.exports = router;