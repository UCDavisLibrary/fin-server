var router = require('express').Router();

router.use('/search', require('./search'));
router.use('/record', require('./record'));
router.use('/collections', require('./collections'));

module.exports = router;