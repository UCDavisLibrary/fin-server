const yargs = require('yargs');
const model = require('./model');

process.on('unhandledRejection', (e) => {
  console.error(e);
});

var argv = yargs
    .usage('usage: $0 <command> [options]')
    // create user
    .command(
      'create-user', 
      'Create a user', 
      yargs => createUserOpts(yargs),
      yargs => createUser(yargs)  
    )
    // remove user
    .command(
      'remove-user', 
      'Remove a user', 
      yargs => removeUserOpts(yargs),
      yargs => removeUser(yargs)  
    )
    // update user
    .command(
      'update-user', 
      'Update  user info', 
      yargs => updateUserOpts(yargs),
      yargs => updateUser(yargs)  
    )
    // get user
    .command(
      'get-user', 
      'Get user info', 
      yargs => getUserOpts(yargs),
      yargs => getUser(yargs)  
    )
    // get users
    .command(
      'get-users', 
      'Get users list', 
      yargs => yargs,
      yargs => getUsers()  
    )
    .strict()
    .help('help')
    .argv

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
    .option('email', {
      alias: 'e',
      required : true
    })
}

async function createUser(yargs) {
  try {
    await model.createUser(yargs.username, yargs.email, yargs.password);
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
    await model.updateUser(info);
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
    var info = await model.getUser(yargs.username);
    console.log(info);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}

async function getUsers(yargs) {
  try {
    var info = await model.getUsers();
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
    await model.removeUser(yargs.username);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}