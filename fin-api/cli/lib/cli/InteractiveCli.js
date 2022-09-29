const path = require('path');
const api = require('../../..');
const contentDisposition = require('content-disposition');
const inquirer = require('inquirer');
const fs = require('fs');

const config = require('../lib/config');
const Logger = require('../lib/logger');
const editor = require('../lib/editor');
const location = require('../lib/location');

class ContainerCli {

  init(vorpal) {
    this.vorpal = vorpal;
    var self = this;

    // just a placeholder for help
    vorpal.command('shell')
      .description('Start interactive shell')
      .action((args, callback) => {
        // if this is called in shell mode, just echo no op
        this.log('no op');
        callback();
      });

    vorpal.command('interactive update [fedora_path]')
          .description('Update container at location in your text editor')
          .option('-e --editor <editor>', 'Editor command to use, default to \'vscode\'')
          .action(this.update.bind(this));
    
    vorpal.command('interactive create <fedora_path>]')
          .description('Create container at location in your text editor')
          .option('-e --editor <editor>', 'Editor command to use, default to \'vscode\'')
          .action(this.create.bind(this));
  }

  async update(args) {
    args.fedora_path = location.makeAbsoluteFcPath(args.fedora_path ? args.fedora_path+'' : '.');
    
    if( args.file ) {
      return console.log('Updating with provided file');
    }

    var response = await location.info(args.fedora_path);
    if( response.data.type === location.TYPES.DATA_FILE ) {
      args.fedora_path = path.join(args.fedora_path, '/fcr:metadata');
    }

    // grab the current ns
    response = await api.get({
      path: args.fedora_path,
      headers : {
        Prefer : 'return=representation; omit=\"http://fedora.info/definitions/v4/repository#ServerManaged\"'
      }
    });
    if( response.error ) {
      return Logger.log(response.error.message);
    }

    let options = {}
    if( args.options.editor ) {
      options.editor = args.options.editor;
    }

    var result = await editor(response.last.body, options);

    if( body === result.body ) {
      return Logger.log('Cancelled, no edits made');
    } else {
      Logger.log(`${result.body}\n`);
    }

    var accept = await inquirer.prompt([{
      type: 'text',
      name: 'approve',
      message: 'Save (Y/n): '
    }]);

    if( accept.approve != 'Y' ) {
      return Logger.log('Cancelled, no edits made');
    }

    let sparql = await api.transform.diffToSparql(body, result.body)
    response = await api.patch({
      path : args.fedora_path,
      content : sparql
    });
    
    if( api.isSuccess(response.last) ) Logger.log('Updated: '+args.fedora_path);
    else Logger.logHttpStack(response);
  }

  async create(args) {
    args.fedora_path = location.makeAbsoluteFcPath(args.fedora_path || '.');

    var body = [];
    var prefixes = config.globalPrefix;
    for( var key in prefixes ) {
      body.push(`@prefix ${key}: <${prefixes[key]}> .`);
    }
    body.push('');
    body.push(`<> dc:title "A new container" ;`)
    body.push('  dc:description "No description provided" .');

    Logger.log(`\nCreating at path: ${args.fedora_path}\n`);

    let options = {}
    if( args.options.editor ) {
      options.editor = args.options.editor;
    }
    var result = await editor(body.join('\n'), options);

    var accept = await inquirer.prompt([{
      type: 'text',
      name: 'approve',
      message: 'Save (Y/n): '
    }]);

    if( accept.approve != 'Y' ) {
      return Logger.log('Cancelled, no edits made');
    }

    let response = await api.put({
      headers : {
        'Content-Type' : api.RDF_FORMATS.TURTLE
      },
      path : args.fedora_path,
      content : rdf
    });

    if( api.isSuccess(response.last) ) Logger.log('Updated: '+args.fedora_path);
    else Logger.log(body);
  }
}



module.exports = new ContainerCli();