var authUtils = require('../../models/auth');

module.exports = (yargs) => {
  return yargs
    .usage('usage: $0 admin <subcommand> [options]')
    // list admins
    .command(
      'list-admins', 
      'See list of admin users', 
      yargs => yargs,
      yargs => listAdmins(yargs)  
    )
    // add admin
    .command(
      'add-admin', 
      'Add user to admin list', 
      yargs => addAdminOpts(yargs),
      yargs => addAdmin(yargs)  
    )
    // remove admin
    .command(
      'remove-admin', 
      'Remove user from admin list', 
      yargs => removeAdminOpts(yargs),
      yargs => removeAdmin(yargs)  
    )
    .help('help')
}

/**
 * List admins
 */
async function listAdmins(yargs) {
  var admins = await authUtils.loadAdmins();
  process.exit();
}

/**
 * Add Admin User
 */
function addAdminOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    });
}

async function addAdmin(yargs) {
  await authUtils.loadAdmins();
  var added = await authUtils.addAdmin(yargs.username);
  if( added ) console.log(`User ${yargs.username} added`);
  else console.log(`User ${yargs.username} is already an admin`);
  process.exit();
}

/**
 * Add Admin User
 */
function removeAdminOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    });
}

async function removeAdmin(yargs) {
  await authUtils.loadAdmins();
  var removed = await authUtils.removeAdmin(yargs.username);
  if( removed ) console.log(`User ${yargs.username} removed from admin list`);
  else console.log(`User ${yargs.username} is not an admin`);
  process.exit();
}