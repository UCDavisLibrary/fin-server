var authUtils = require('../../lib/auth');

module.exports = (yargs) => {
  return yargs
    .usage('usage: $0 admin <subcommand> [options]')
    // create local user
    .command(
      'create-local-user', 
      'Create a local user', 
      yargs => createUserOpts(yargs),
      yargs => createUser(yargs)  
    )
    // remove local user
    .command(
      'remove-local-user', 
      'Remove a local user', 
      yargs => removeUserOpts(yargs),
      yargs => removeUser(yargs)  
    )
    // update local user
    .command(
      'update-local-user', 
      'Update a local user info', 
      yargs => updateUserOpts(yargs),
      yargs => updateUser(yargs)  
    )
    // get local user
    .command(
      'get-local-user', 
      'Get local user info', 
      yargs => getUserOpts(yargs),
      yargs => getUser(yargs)  
    )
    // get local user
    .command(
      'get-local-users', 
      'Get local users list', 
      yargs => yargs,
      yargs => getUsers()  
    )
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
 * Create User
 */
function createUserOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    })
    .option('password', {
      alias: 'p',
      required : true
    })
}

async function createUser(yargs) {
  try {
    await authUtils.createLocalUser(yargs.username, yargs.password);
    console.log('Local user created: ', yargs.username);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

/**
 * Update User
 */
function updateUserOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    })
    .option('info', {
      alias: 'i',
      description : 'JSON Object of user info',
      required : true
    })
}

async function updateUser(yargs) {
  var info = eval('('+yargs.info+')');

  info.username = yargs.username;

  try {
    await authUtils.updateLocalUser(info);
    console.log('Local user updated');
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

/**
 * Get User
 */
function getUserOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    });
}

async function getUser(yargs) {
  try {
    var info = await authUtils.getLocalUser(yargs.username);
    console.log(info);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

async function getUsers(yargs) {
  try {
    var info = await authUtils.getLocalUsers();
    console.log(info);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

/**
 * Remove User
 */
function removeUserOpts(yargs) {
  return yargs
    .option('username', {
      alias: 'u',
      required : true
    });
}

async function removeUser(yargs) {
  try {
    await authUtils.removeLocalUser(yargs.username);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

/**
 * List admins
 */
async function listAdmins(yargs) {
  await authUtils.loadAdmins();
  console.log(authUtils.admins);
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