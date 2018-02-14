var cache = require('../../models/cache');

module.exports = (yargs) => {
  return yargs
    .usage('usage: $0 cache <subcommand> [options]')
    .command(
      'destroy', 
      'wipe redis cache', 
      yargs => yargs,
      yargs => clear(yargs)  
    )
    .help('help')
}

/**
 * List admins
 */
async function clear() {
  await cache.destroy();
  process.exit();
}