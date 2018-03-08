const router = require('express').Router();

router.use('/backup', require('./backup'));

module.exports = router;