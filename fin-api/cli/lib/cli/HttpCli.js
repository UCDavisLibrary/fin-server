const api = require('../../..');
const fs = require('fs');
const inquirer = require('inquirer');

const Logger = require('../lib/logger');
const prefixutils = require('../lib/prefixutils');
const location = require('../lib/location');
const config = require('../lib/config');

/**
 * @class HttpCli
 * @description Handle http commands
 */
class HttpCli {

  async init(vorpal, argv) {

    this._stdOptionWrapper(
      vorpal.command('http version list [path]')
            .action(this.getVersions.bind(this))
    );

    this._stdOptionWrapper(
      vorpal.command('http version get <version-name> [path]')
            .action(this.getVersion.bind(this))
    );

    this._stdOptionWrapper(
      vorpal.command('http version create <version-name> [path]')
            .action(this.createVersion.bind(this))
    );

    this._stdOptionWrapper(
      vorpal.command('http version revert <version-name> [path]')
            .action(this.revertToVersion.bind(this))
    );

    this._stdOptionWrapper(
      vorpal.command('http version delete <version-name> [path]')
            .action(this.deleteVersion.bind(this))
    );
  }

  stdOptionWrapper(command) {
    command
      .option('-H, --header <header>', 'Add additional Headers to the request')
      .option('--check-status','Return exit code for unsucessful calls')
      .option('--pretty', 'Pretty response body print if application/json or application/ld+json')
      .option('-P, --print <print>', '[hbsHB] Specify what components to print to user. Value should '+
              'be any combination of hbsHB where: H=request headers, B=request body,'+
              'h=response headers, b=response body and s=response HTTP status code')
      .option('-d, --debug', 'Debug all http requests')
  }

  /**
   * @method
   * @private
   * @description parse given HTTP headers from command line and set to HTTP options
   *
   * @param {Object} options HTTP request options
   * @param {Object} args command line options
   */
  _appendHeaders(options, args) {
    if( !args.header ) return;
    if( Array.isArray(args.header) ) {
      args.header.forEach(header => this._appendHeader(options, header));
    } else {
      this._appendHeader(options, args.header);
    }
  }

  /**
   * @method
   * @private
   * @description parse given HTTP header from command line and set to HTTP options
   *
   * @param {Object} options HTTP request options
   * @param {String} header HTTP header
   */
  _appendHeader(options, header) {
    try {
      let parts = header.split(':').map(part => part.trim());
      options.headers[parts.shift()] = parts.join(':');
    } catch(e) {
      throw new Error(`Invalid HTTP header: ${header}`);
    }
  }

  /**
   * @method
   * @private
   *
   * @description parse the print arguments
   * @param {Object} args command line options
   */
  _parseDisplayOptions(args) {
    let printOptions = {
      H : false,
      B : false,
      h : false,
      b : false,
      s : false
    }

    if( args.options.print ) {
      for( var key in printOptions ) {
        if( args.options.print.indexOf(key) > -1 ) {
          printOptions[key] = true;
        }
      }
    }

    return printOptions;
  }

  /**
   * @method
   * @private
   *
   * @description print results of HTTP method. Sets the exitCode of the call
   *
   * @param {Object} args command args
   * @param {Object} response ApiResponse object
   */
  _display_and_exitcode(args, response) {
    if( response.error ) {
      Logger.log(response.error.message);
      if (args.options.checkStatus) {
        process.exitCode = 111;
      }
      return;
    }

    let print = this._parseDisplayOptions(args);
    
    let request = response.last.request;
    response = response.last;

    if( print.H ) {
      Logger.log(`${request.method} ${request.url}`);
      this._displayHeaders(request.headers);
      Logger.log('');
    }

    if( print.B && request.body ) {
      if( typeof request.body === 'object' && request.body.path ) {
        Logger.log(fs.readFileSync(request.body.path, 'utf-8'));
      } else {
        Logger.log(request.body);
      }
      
      Logger.log();
    }

    if( print.s ) {
      Logger.log(response.statusCode);
    }

    if( print.h ) {
      Logger.log(`HTTP/${response.httpVersion} ${response.statusCode} ${response.statusMessage}`);
      this._displayHeaders(response.headers);
      Logger.log('');
    }

    if( print.b && response.body ) {
      // try to pretty print JSON?
      if( args.options.pretty && 
          response.headers['content-type'] &&
          response.headers['content-type'].match(/application\/json/) || 
          response.headers['content-type'].match(/application\/ld\+json/) ) {

        try {
          Logger.log(JSON.stringify(JSON.parse(response.body), '  ', '  '));
        } catch(e) {
          Logger.log(response.body);
        }

      } else {
        Logger.log(response.body);
      }

      Logger.log();
    }

    if (args.options.checkStatus) {
      if (!api.isSuccess(response)) {
        process.exitCode = Math.floor(response.statusCode/100);
      }
    }
  }

  /**
   * @method
   * @private
   *
   * @description print HTTP headers to stdout
   * @param {Object} headers key/value pair hash
   */
  _displayHeaders(headers) {
    if( !headers ) return;
    for( var key in headers ) {
      Logger.log(`${key}: ${headers[key]}`);
    }
  }

  /**
   * @method
   * @private
   *
   * @description parse/handle the data-binary and data-string options for post/put cmds
   *
   * @param {Object} args command args
   * @param {Object} options HTTP request options
   * @returns {Boolean} was valid file or contents passed
   */
  _parseDataOptions(args, options, sparql = false) {
    if( args.options.dataBinary ) {
      // prompt user for input
      if( args.options.dataBinary.toLowerCase() === 'stdin' ) {
        var input = inquirer.prompt([{
          type: 'text',
          name: 'postdata'
        }]);
        options.content = input.postdata;

      } else if( args.options.dataBinary.toLowerCase() === '/dev/stdin' ) {
        options.content = fs.readFileSync('/dev/stdin', 'utf-8');

      // set file from file system
      } else {
        options.file = location.makeAbsolutePath(args.options.dataBinary);
        if( !fs.existsSync(options.file) ) {
          Logger.error(`Invalid file: ${options.file}`);
          return false;
        }
      }

    } else if( args.options.dataString ) {
      let prefixes = prefixutils(args, sparql);
      options.content = prefixes+'\n'+args.options.dataString;
      options.headers['Content-Type'] = api.RDF_FORMATS.TURTLE;
    }

    return true;
  }

  /**
   * @method
   * @private
   *
   * @description initialize the HTTP request options object for given path and headers
   *
   * @param {Object} args Command line arguments
   * @returns {Object} HTTP request options
   */
  _initOptions(args) {
    let options = {
      path : location.makeAbsoluteFcPath(args.path || '.'),
      headers : {}
    }

    // parse headers
    if( args.options.header ) {
      this._appendHeaders(options, args.options);
    }

    return options;
  }

  /**
   * @method get
   * @description Handle 'http get' command
   *
   * @param {Object} args Command line arguments
   */
  async get(args) {
    let options = this._initOptions(args);
    let response = await api.get(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method post
   * @description Handle 'http post' command
   *
   * @param {Object} args Command line arguments
   */
  async post(args) {
    let options = this._initOptions(args);

    let success = this._parseDataOptions(args, options);
    if( !success ) return;

    let response = await api.post(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method put
   * @description Handle 'http put' command
   *
   * @param {Object} args Command line arguments
   */
  async put(args) {
    let options = this._initOptions(args);

    let success = this._parseDataOptions(args, options);
    if( !success ) return;

    if( args.options.partial ) {
      options.partial = true;
    }

    let response = await api.put(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method patch
   * @description Handle 'http patch' command
   *
   * @param {Object} args Command line arguments
   */
  async patch(args) {
    let options = this._initOptions(args);
    options.headers['Content-Type'] = 'application/sparql-update';

    let success = this._parseDataOptions(args, options, true);
    if( !success ) return;

    let response = await api.patch(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method delete
   * @description Handle 'http delete' command
   *
   * @param {Object} args Command line arguments
   */
  async delete(args) {
    let options = this._initOptions(args);
    if( args.options.permanent ) {
      options.permanent = true;
    }

    let response = await api.delete(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method findDelete
   * @description Searches each sub path for references of fiven path and deletes
   * if matches.  Good for finding all nested parts of object
   *
   * @param {Object} args Command line arguments
   */
  async findDelete(args) {
    let options = this._initOptions(args);
    if( args.options.permanent ) {
      options.permanent = true;
    }

    let parts = ['', ...args.path.split('/').filter(item => item)];
    let currentPath = [];

    for( let i = 0; i < parts.length; i++ ) {
      currentPath.push(parts[i]);
      let p = currentPath.join('/');
      if( !p.match(/^\//) ) p = '/'+p;

      let response = await api.get({
        path: p,
        headers : {
          Accept : api.RDF_FORMATS.JSON_LD
        }
      });

      if( response.data.statusCode !== 200 ) {
        console.log(p+': able to access ('+response.data.statusCode+')');
        continue;
      }

      let jsonld = JSON.parse(response.data.body)[0];
      let contains = jsonld['http://www.w3.org/ns/ldp#contains'] || [];
      let re = new RegExp(api.getConfig().fcBasePath+args.path);

      console.log(p+': checking for matches');
      for( let child of contains ) {
        if( child['@id'].match(re) ) {

          let delRep = await api.delete({
            path : child['@id'].split(api.getConfig().fcBasePath)[1],
            permanent : options.permanent
          });

          delRep.httpStack.forEach(r => {
            console.log(r.request.method+' '+r.request.url+' '+r.statusCode);
          });
        }
      }
    }

    return {options};
  }

  /**
   * @method head
   * @description Handle 'http head' command
   *
   * @param {Object} args Command line arguments
   */
  async head(args) {
    let options = this._initOptions(args);

    let response = await api.head(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method move
   * @description Handle 'http move' command
   *
   * @param {Object} args Command line arguments
   */
  async move(args) {
    let options = this._initOptions(args);

    if( args.destination ) {
      options.destination = location.makeAbsoluteFcPath(args.destination);
    }

    let response = await api.move(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  /**
   * @method copy
   * @description Handle 'http copy' command
   *
   * @param {Object} args Command line arguments
   */
  async copy(args) {
    let options = this._initOptions(args);

    if( args.destination ) {
      options.destination = location.makeAbsoluteFcPath(args.destination);
    }

    let response = await api.copy(options);
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async startTransaction(arg) {
    let options = this._initOptions(args);

    let response = await api.startTransaction(options);

    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async commitTransaction(arg) {
    let options = this._initOptions(args);

    let response = await api.commitTransaction(options);

    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async rollbackTransaction(arg) {
    let options = this._initOptions(args);

    let response = await api.rollbackTransaction(options);

    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async getVersions(args) {
    let options = this._initOptions(args);

    let response = await api.getVersions(options);
    
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async getVersion(args) {
    if( !args['version-name'] ) return Logger.error('Version name required');
    
    let options = this._initOptions(args);
    options.versionName = args['version-name'];

    let response = await api.getVersion(options);
    
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async createVersion(args) {
    if( !args['version-name'] ) return Logger.error('Version name required');

    let options = this._initOptions(args);
    options.versionName = args['version-name'];

    let response = await api.createVersion(options);
    
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async revertToVersion(args) {
    if( !args['version-name'] ) return Logger.error('Version name required');

    let options = this._initOptions(args);
    options.versionName = args['version-name'];

    let response = await api.revertToVersion(options);
    
    this._display_and_exitcode(args, response);
    return {response, options};
  }

  async deleteVersion(args) {
    if( !args['version-name'] ) return Logger.error('Version name required');

    let options = this._initOptions(args);
    options.versionName = args['version-name'];

    let response = await api.deleteVersion(options);
    
    this._display_and_exitcode(args, response);
    return {response, options};
  }

}

module.exports = new HttpCli();
