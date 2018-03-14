const router = require('express').Router();

router.use('/backup', require('./backup'));
router.use('/broadcast', require('./broadcast'));

module.exports = router;