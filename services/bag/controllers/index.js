const router = require('express').Router()

router.get('extract', require('./extract'));

module.exports = router;