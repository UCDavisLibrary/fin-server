const api = require('../../..');
const inquirer = require('inquirer');
const Logger = require('../lib/logger');
const fs = require('fs-extra');
const path = require('path');
// const acl = require('./AclCli');
const debug = require('../lib/debug');

class CollectionCli {

  init(vorpal) {
    debug.wrapOpts(vorpal
      .command('application create <name>')
      .description('Create a application.  Metadata should be a path to a file or '+
                  'string content, either way metadata should be in turtle format.')
      .action(args => this.create(args)));

    debug.wrapOpts(vorpal
      .command('application add-featured <name> <path>')
      .option('-t --type <type>', 'resource type (ex: image or collection)')
      .option('-i --image <path>', 'local filesystem path to image')
      .option('-s --slug-name <path>', 'container name in path, required if no image provided')
      .option('-l --label <name>', 'short label for featured resource')
      .option('-p --position <number>', 'position of featured resource if orded in UI')
      .option('-d --description <description>', 'description for featured resource')
      .description('Add a featured resource (ex: image) to the application')
      .action(args => this.addFeatured(args)));

    debug.wrapOpts(vorpal
      .command('application set-text <name> <text-id>')
      .option('-t --text <description>', 'actual text')
      .option('-l --label <label>', 'header label for text')
      .description('Add a text block to the application.  Provide text-id, actual text, optional label')
      .action(args => this.setText(args)));
  }

  async create(args) {
    let response = await api.application.create({id: args.name});

    if( response.error ) {
      return Logger.error(response.error.message);
    }

    Logger.log(`New collection created at: ${response.data.path}`);
    debug.handle('collection create', response, args);
  }

  async setText(args) {
    let slug = 'text-'+args['text-id'];
    let uri = api.getConfig().host+api.getConfig().fcBasePath+this._getApplicationPath(args.name)+'/'+slug;

    // attempt delete
    let response = await api.delete({
      path : this._getApplicationPath(args.name)+'/'+slug,
      permanent: true
    });

    let jsonld = {
      "@id" : "",
      '@type' : api.application.TYPES.APPLICATION_TEXT_CONTAINER,
    }
    if( args.options.label ) {
      jsonld['http://schema.org/label'] = args.options.label;
    };
    if( args.options.text ) {
      jsonld['http://schema.org/description'] = args.options.text;
    };

    let options = {
      path : this._getApplicationPath(args.name),
      slug,
      headers : {
        'Content-Type' : api.RDF_FORMATS.TURTLE,
      },
      content: await api.transform.jsonldToTurtle(jsonld)
    }
    response = await api.postEnsureSlug(options);

    if( response.error ) Logger.log('Create container', response.error.message);
    else Logger.log('Create container', response.last.statusCode, response.last.body);

    response = await api.jsonld.patch({
      path : this._getApplicationPath(args.name),
      insert : {
        [this.getTextType()] : [{
          '@id' : uri
        }]
      }
    });

    if( response.error ) Logger.log('POST file', response.error.message);
    else Logger.log('PATCH application metdata', response.last.statusCode, response.last.body);
  }

  async addFeatured(args) {
    if( !args.options.type ) {
      return Logger.error('A resource type is required (ex: image or collection)');
    }

    let response;
    let slug = args.options['slug-name'];
    if( !slug && args.options.image ) {
      let fileInfo = path.parse(args.options.image);
      slug = fileInfo.base.replace(/ /g, '-');
    } else if( !slug ) {
      return Logger.error('Either an --image path or a --slug-name is required');
    }

    let uri = api.getConfig().host+api.getConfig().fcBasePath+this._getApplicationPath(args.name)+'/'+slug;

    // attempt delete
    await api.delete({
      path : uri,
      permanent: true
    });

    // custom image provided
    if( args.options.image ) {
      let fileInfo = path.parse(args.options.image);
      
      response = await api.postEnsureSlug({
        path : this._getApplicationPath(args.name),
        slug,
        file : args.options.image
      });

    // no image provided
    } else {
      let jsonld = {
        "@id" : ""
      }
      let options = {
        path : this._getApplicationPath(args.name),
        slug,
        headers : {
          'Content-Type' : api.RDF_FORMATS.TURTLE,
        },
        content: await transform.jsonldToTurtle(jsonld)
      }
      response = await api.postEnsureSlug(options);
    }

    if( response.error ) Logger.log('POST file', response.error.message);
    else Logger.log('POST file', response.last.statusCode, response.last.body);

    let metadata = {
      '@type' : api.application.TYPES.FEATURED_CONTAINER,
      'http://schema.org/associatedMedia' : {'@id' : api.getConfig().host+api.getConfig().fcBasePath+args.path}
    }
    if( args.options.label ) {
      metadata['http://schema.org/label'] = args.options.label;
    };
    if( args.options.description ) {
      metadata['http://schema.org/description'] = args.options.description;
    };
    if( args.options.position ) {
      metadata['http://schema.org/position'] = args.options.position
    };

    response = await api.jsonld.patch({
      path : this._getApplicationPath(args.name)+'/'+slug+'/fcr:metadata',
      insert : metadata
    });

    if( response.error ) Logger.log('POST file', response.error.message);
    else Logger.log('PATCH file metdata', response.last.statusCode, response.last.body);

    response = await api.jsonld.patch({
      path : this._getApplicationPath(args.name),
      insert : {
        [this.getFeaturedType(args)] : [{
          '@id' : uri
        }]
      }
    });

    if( response.error ) Logger.log('POST file', response.error.message);
    else Logger.log('PATCH application metdata', response.last.statusCode, response.last.body);
  }

  getFeaturedType(args) {
    let type = args.options.type.toLowerCase().trim();
    return 'http://digital.ucdavis.edu/schema#featured'+capitalizeFirstLetter(type);
  }

  getTextType() {
    return api.application.TYPES.APPLICATION_TEXT;
  }

  _getApplicationPath(id) {
    return '/' + api.application.ROOT_SLUG + '/' + id;
  }
  
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = new CollectionCli();