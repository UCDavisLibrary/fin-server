const api = require('@ucd-lib/fin-node-api');
const Logger = require('../lib/logger');
const location = require('../lib/location');

class AclCli {

  init(vorpal) {
    vorpal
      .command('acl add-admin <username>')
      .description('Add site level admin')
      .action(args => this.addAdmin(args));

    vorpal
      .command('acl remove-admin <username>')
      .description('Remove site level admin')
      .action(args => this.removeAdmin(args));

    vorpal
      .command('acl add <agent> <mode> [path]')
      .option('-g --group', 'Agent is a group (AgentClass)')
      .option('-a --acl-path', 'Path to acl (if multiple)')
      .description('Add authorization to provided path. mode can be any combo of r, w, or rw')
      .action(args => this.add(args));
  }

  addAdmin(args) {
    return api.acl.addAdmin({username: args.username});
  }

  removeAdmin(args) {
    return api.acl.removeAdmin({username: args.username});
  }

  async add(args) {
    let dir = location.makeAbsoluteFcPath(args.path || '.');
    
    let modes = [];
    args.mode = args.mode.trim().toLowerCase();
    if( args.mode.indexOf('r') > -1 ) modes.push(api.acl.MODES.READ);
    if( args.mode.indexOf('w') > -1 ) modes.push(api.acl.MODES.WRITE);

    let options = {
      path : dir,
      agent : args.agent,
      modes : modes
    }
    
    if( args.options.group ) {
      options.type = 'group';
    }

    let response = await api.acl.add(options);
    Logger.log(response.last.statusCode, response.last.body);
  }
}


module.exports = new AclCli();