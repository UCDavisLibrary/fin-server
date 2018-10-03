const router = require('express').Router()

router.get('extract', require('./extract'));
router.get('list', require('./list'));

module.exports = router;