var router = require('express').Router();

router.use('/search', require('./search'));
router.use('/collections', require('./collections'));

module.exports = router;