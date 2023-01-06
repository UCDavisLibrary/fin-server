const router = require('express').Router();
const {logger, models} = require('@ucd-lib/fin-service-utils');

(async function() {
  let names = await models.names();
  for( let name of names ) {
    let {api} = await models.get(name);
    if( !api ) continue;
  
    logger.info(`Registering api routes for ${name} at /api/${name}`);
    router.use('/'+name, api);
  }
})();


// TODO: move to their own service, similar to essync reindex
// router.use('/tar', require('./tar'));
// router.use('/zip', require('./zip'));

module.exports = router;