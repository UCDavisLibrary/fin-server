var router = require('express').Router();

router.use('/search', require('./search'));

module.exports = router;