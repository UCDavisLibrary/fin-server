const api = require('../../..');
const inquirer = require('inquirer');
const Logger = require('../lib/logger');
const fs = require('fs-extra');
const path = require('path');
const acl = require('./AclCli');
const debug = require('../lib/debug');

class CollectionCli {

  init(vorpal) {
    debug.wrapOpts(vorpal
      .command('collection create <id> [metadata]')
      .option('-p --private', 'This collection should be private, ie not publicly readable')
      .description('Create a collection.  Metadata should be a path to a file or '+
                  'string content, either way metadata should be in turtle format.')
      .action(args => this.create(args)));

    debug.wrapOpts(vorpal
      .command('collection delete <id>')
      .option('-f --force', 'no confirm delete prompt')
      .description('Delete a collection.')
      .action(args => this.delete(args)));

    debug.wrapOpts(vorpal
      .command('collection relation add-properties <collection-id> <src-property> <dst-path> <dst-property> [src-path]')
      .description('Add a relation (via two properties) between two containers.  Both src and dst properties should be full uri\'s.')
      .action(args => this.createRelationProperties(args)));

    debug.wrapOpts(vorpal
      .command('collection relation add-container <collection-id> <id>')
      .option('-m --membership-resource <membership-resource>', 'Path to container relative to collection root.  Only required '+
              'if membershipResource is not parent container.')
      .option('-T --type <type>', 'shortcut relation type, either [part|media]')
      .option('-h --has-member-relation <has-member-relation>', 'property id for hasMemberRelation. Use if --type not provided')
      .option('-i --is-member-of-relation <is-member-of-relation>', 'property id for isMemberOfRelation. Use if --type not provided')
      .option('-M --metadata <metadata>', 'Local filesystem path to .ttl file to add as metadata for container')
      .description('Add a relation (direct container) to collection.')
      .action(args => this.createRelationContainer(args)));

    debug.wrapOpts(vorpal
      .command('collection resource add <collection-id> <file> [id]')
      .description('Add a resource to a collection.  File should be a file path.')
      .option('-m --metadata <path>', 'Path to metadata file.  If not given <file>.ttl will be checked and used if it exists')
      .option('-t --type <type>', 'schema.org types to resource.  No prefix needed, ie value should be like MediaObject')
      .option('-H, --header <header>', 'Add additional Headers to the request')
      .action(args => this.addResource(args)));

    debug.wrapOpts(vorpal
      .command('collection resource delete <collection-id> <id>')
      .description('Delete a collection container')
      .action(args => this.deleteResource(args)));

    debug.wrapOpts(vorpal
      .command('collection acl user add <collection-id> <agent> <mode>')
      .description('Give user access to collection. Modes can be: r, w or rw.  For public access use \'PUBLIC\'.')
      .action(args => this.addUserAccess(args)));

    debug.wrapOpts(vorpal
      .command('collection acl user remove <collection-id> <agent>')
      .description('Remove all user access to collection.')
      .action(args => this.removeAgentAccess(args)));

    debug.wrapOpts(vorpal
      .command('collection acl group add <collection-id> <name> <mode>')
      .option('-a --agent <agent>', 'Agents to add to group')
      .description('Add a group to a collection and give group access.  '+
                  'Optionally add agents to group. Modes can be: r, w or rw')
      .action(args => this.addGroup(args)));
    
    debug.wrapOpts(vorpal
      .command('collection acl group modify <collection-id> <name>')
      .option('-a --add-agent <agent>', 'Agent to add to group')
      .option('-r --remove-agent <agent>', 'Agent to remove from group')
      .description('Modify a groups agents.')
      .action(args => this.modifyGroup(args)));

    debug.wrapOpts(vorpal
      .command('collection acl group remove <collection-id> <name>')
      .description('Remove group and all group access to collection.')
      .action(args => this.removeGroup(args)));
    
    debug.wrapOpts(vorpal
      .command('collection acl show <collection-id>')
      .description('Show all agent access to collection.')
      .action(args => this.showAccess(args)));
  }

  async create(args) {
    let options = {
      id : args.id
    }
    
    let content = '';
    if( args.metadata ) {
      if( fs.existsSync(args.metadata) ) {
        options.file = args.metadata;
      } else {
        options.content = args.metadata;
      }
    }

    let response = await api.collection.create(options);
    if( response.error ) {
      debug.handle('collection create', response, args);
      return Logger.log(response.error.message);
    }

    if( args.options.private !== true ) {
      await acl.add({
        path: this._getCollectionPath(args.id),
        agent : 'PUBLIC',
        mode : 'r',
        options : {},
        debug : args.debug
      });
    }

    Logger.log(`New collection created at: ${response.data.path}`);
    debug.handle('collection create', response, args);
  }

  async delete(args) {
    let id = args.id;

    if( !args.options.force ) {
      let resp = await inquirer.prompt([{
          type: 'test',
          name: 'answer',
          message: `Are you sure you want to permanently delete collection ${args.id} [Y/n]:`
      }]);

      if( resp.answer !== 'Y' ) return;
    }

    let response = await api.collection.delete({
      id : args.id
    });

    debug.handle('collection delete', response, args);

    if( response.error ) {
      return Logger.log(response.error.message);
    }

    Logger.log(`Collection ${args.id} deleted`);
  }

  async createRelationContainer(args) {
    let response = await api.collection.createRelationContainer({
      id: args.id,
      collectionId : args['collection-id'],
      membershipResource : args.options['membership-resource'],
      fsPath : args.options.metadata,
      type : args.options.type,
      hasMemberRelations : args.options['has-member-relation'],
      isMemberOfRelation : args.options['is-member-of-relation']
    });

    debug.handle('collection relation add-container', response, args);

    if( response.error ) {
      
      return Logger.log(response.error.message);
    }
    Logger.log(`Direct container ${args.id} added to collection ${args['collection-id']}`);
  }

  async createRelationProperties(args) {
    let response = await api.collection.createRelationProperties({
      collectionId : args['collection-id'],
      dstPath : args['dst-path'],
      srcPath : args['src-path'],
      dstProperty : args['dst-property'],
      srcProperty : args['src-property']
    });

    debug.handle('collection relation add-container', response, args);

    if( response.error ) {
      return Logger.log(response.error.message);
    }
    Logger.log(`Properties relation created for collection ${args['collection-id']}`);
  }
 
  /**
   * @method
   * @private
   * @description parse given HTTP header from command line and set to HTTP options
   *
   * @param {Object} options HTTP request options
   * @param {String} header HTTP header
   */
  _appendHeader(headers, header) {
    try {
      let parts = header.split(':').map(part => part.trim());
      headers[parts.shift()] = parts.join(':');
    } catch(e) {
      throw new Error(`Invalid HTTP header: ${header}`);
    }
  }

  async addResource(args) {
    let idParts = (args.id || 'binary').split('/');
    let id = idParts.pop();
    let parentPath = idParts.join('/');

    let fileInfo = path.parse(args.file);

    let customHeaders = {};
    if( args.options.header ) {
      if( Array.isArray(args.options.header) ) {
        args.options.header.forEach(header => this._appendHeader(customHeaders, header));
      } else {
        this._appendHeader(customHeaders, args.options.header);
      }
    }

    let response = await api.collection.addResource({
      id, parentPath, customHeaders,
      collectionId : args['collection-id'],
      fsPath : fileInfo.dir || '.',
      data : fileInfo.base,
      metadata : args.options.metadata
    });

    if( response.error ) {
      debug.handle('collection resource add', response, args);
      return Logger.log(response.error.message);
    }

    if( args.options.type ) {
      if( !Array.isArray(args.options.type) ) {
        args.options.type = [args.options.type];
      }

      let insert = {
        '@type' : args.options.type.map(type => {
          return type.match(/^http:/) ? type : 'http://schema.org/'+type
        })
      }

      let newPath = response.data;
      response.appendResponse(await api.head({
        path : response.data
      }));
      if( !api.isRdfContainer(response.last) ) {
        newPath = newPath + '/fcr:metadata'
      }

      response.appendResponse(await api.jsonld.patch({
        path : newPath,
        insert
      }));
    }

    debug.handle('collection resource add', response, args);
    Logger.log(`Item ${args.id} added to collection ${args['collection-id']}`);
  }

  async deleteResource(args) {
    let response = await api.collection.deleteResource({
      id : args.id,
      collectionId : args['collection-id']
    });

    debug.handle('collection resource delete', response, args);

    if( response.error ) {
      return Logger.log(response.error.message);
    }
  }

  async addUserAccess(args) {
    args.path = this._getCollectionPath(args['collection-id']);
    await acl.add(args);
  }

  async addGroup(args) {
    // first create group
    args.path = this._getCollectionPath(args['collection-id'])+'/groups';

    // check if path exists
    var response = await api.head({path: args.path+'/'+args.name});
    if( response.checkStatus(200) ) {
      debug.handle('collection acl group add ', response, args);
      return Logger.log(`Group '${args.name}' already exists`);
    }

    if( !response.checkStatus(404) ) {
      debug.handle('collection acl group add ', response, args);
      return Logger.logHttpStack(response);
    } 

    await acl.addGroup(args);

    // now add group to acl
    args.agent = args.path+'/'+args.name;
    args.options.group = true;
    args.path = this._getCollectionPath(args['collection-id']);
    await acl.add(args)
  }

  async removeGroup(args) {
    let groupPath = this._getCollectionPath(args['collection-id'])+'/groups/'+args.name;
    let response = await api.delete({
      path : groupPath,
      permanent : true
    });
    
    debug.handle('collection acl group remove', response, args);

    args.agent = groupPath;
    response.appendResponse(await this.removeAgentAccess(args));

    if( response.error ) {
      return Logger.log(response.error.message);
    }
  }

  async removeAgentAccess(args) {
    let response = await api.acl.get({path: this._getCollectionPath(args['collection-id'])});
    if( response.error ) {
      debug.handle('collection acl user remove', response, args);
      return Logger.log(response.error.message);
    }

    let aclPaths = response.data;
    let removePaths = [];

    if( args.agent === 'PUBLIC' || args.agent === 'PUBLIC_AGENT' ) {
      args.agent = api.acl.PUBLIC_AGENT;
    } else if( args.agent.match(/^\//) ) {
      args.agent = api.getBaseUrl({}) + args.agent;
    }

    for( var i = 0; i < aclPaths.length; i++ ) {
      let aclPath = aclPaths[i];
      response.appendResponse(await api.acl.allACLAuthorizations({path: aclPath}));

      for( var path in response.data ) {
        for( var authPath in response.data[path].authorizations ) {
          if( response.data[path].authorizations[authPath][args.agent] ) {
            removePaths.push(authPath);
          }
        }
      }
    }

    for( var i = 0; i < removePaths.length; i++ ) {
      response.appendResponse(await api.delete({
        path : removePaths[i],
        permanent : true
      }));

      if( response.checkStatus(204) ) {
        Logger.log('Removed: '+removePaths[i]);
      } else {
        Logger.log('Failed to Remove: '+removePaths[i], response.last.statusCode, response.last.body);
      }
    }

    debug.handle('collection acl user remove', response, args);
  }

  async modifyGroup(args) {
    args.path = this._getCollectionPath(args['collection-id']) + '/groups/' + args.name;
    await acl.modifyGroup(args);
  }

  async showAccess(args) {
    args.path = this._getCollectionPath(args['collection-id']);
    args.options.verbose = true;
    await acl.show(args);
  }

  _getCollectionPath(id) {
    return '/' + api.collection.COLLECTION_ROOT_PATH + '/' + id;
  }

}

module.exports = new CollectionCli();