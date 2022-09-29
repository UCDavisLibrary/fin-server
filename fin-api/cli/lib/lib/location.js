const path = require('path');
const config = require('../lib/config');
const contentDisposition = require('content-disposition');
const api = require('../../..');

const CONTAINS = 'http://www.w3.org/ns/ldp#contains';

class Location {

  constructor() {
  
    this.TYPES = {
      DATA_FILE : 'DATA_FILE',
      CONTAINER : 'CONTAINER'
    }
  }

  async ls(args = {}) {
    var lspath = this.makeAbsoluteFcPath(args.fedora_path || '.');
    var fileinfo = await this.info(lspath);
    
    // if this is a file, quit out
    if( fileinfo.type === this.TYPES.DATA_FILE ) {
      return {
        error : true,
        message : `location ${lspath} is a binary file`
      };
    }

    var response = await api.get({
      path : lspath,
      headers : {
        Accept : api.RDF_FORMATS.JSON_LD
      }
    });

    if( response.checkStatus(403) ) {
      return response.setError('You are not authorized to access this container: '+lspath);
    }
    
    if( !api.isSuccess(response.last) ) {
      return response.setError('Invalid directory: '+lspath);
    }

    let body;
    try {
      body = JSON.parse(response.last.body)[0];
    } catch(e) {
      return response.setError('Invalid body response from server');
    }

    if( body[CONTAINS] ) {
      var re = new RegExp(config.host+config.basePath+lspath+'/?');
      var contains = body[CONTAINS]
                          .map(item => {
                            return item['@id'].replace(re, '');
                          })
      
      response.setData(contains);
    } else {
      response.setData([]);
    }

    return response;
  }

  /**
   * @method cd
   * @description change directory
   */
  async cd(args) {
    var original = this.getCwd();
    var newdir = this.makeAbsoluteFcPath(args.fedora_path+'');

    var response = await api.head({path : newdir});

    if( response.checkStatus(403) ) {
      return response.setError('You are not authorized to access this container: '+newdir);
    }
    if( !api.isSuccess(response.last) ) {
      return response.setError('Invalid directory: '+newdir+` (${response.last.statusCode})`);
    }

    this.setCwd(newdir);
    
    return response;
  }

  /**
   * @method setCwd
   * @description wrapper around config.cwd = path;
   * 
   * @param {String} path
   */
  setCwd(path) {
    config.cwd = path;
  }

  /**
   * @method getCwd
   * @description wrapper around config.cwd
   * 
   * @returns {String}
   */
  getCwd() {
    return config.cwd;
  }

  /**
   * @method info
   * @description return information about a path.
   * {
   *   status : [container response status code],
   *   type : [DATA_FILE|CONTAINER],
   *   file : [if file, content-disposition value],
   *   link : [parsed HTTP link header]
   * }
   * 
   * 
   * @param {String} path path to location, can be relative
   * 
   * @returns {Promise} resolves to Object
   */
  async info(path) {
    path = this.makeAbsoluteFcPath(path);
    var response = await api.head({path});

    var link = response.last.headers['link'];
    if( link ) link = api.parseLinkHeader(link);
    else link = {};

    if( response.last.headers['content-disposition'] ) {
      return response.setData({
        status : response.statusCode,
        type : this.TYPES.DATA_FILE,
        file : contentDisposition.parse(response.headers['content-disposition']),
        link : link
      })
    }

    return response.setData({
      status : response.statusCode,
      type : this.TYPES.CONTAINER,
      link : link
    });
  }


  /**
   * @method makeAbsolutePath
   * @description this is a filesystem helper, for the shell, fills in
   * bashes ~/ functionality.
   * 
   * @param {String} file path the file
   * 
   * @return {String} 
   */
  makeAbsolutePath(file) {
    file = file.trim();

    if( file.match(/^~/) ) {
      return path.join(this.getUserHome(), file.replace(/^~/, ''));
    } else if( !path.isAbsolute(file) ) {
      return path.join(process.cwd(), file);
    }
    return file;
  }

  /**
   * @method makeAbsoluteFcPath
   * @description make an fcrepo path absolute, this is based on cwd
   * 
   * @param {String} fcpath path the make absolute
   * 
   * @returns {String} 
   */
  makeAbsoluteFcPath(fcpath = '.') {
    if( !fcpath.match(/^\//) ) {
      return this.joinUrlPath(this.getCwd(), fcpath);
    }
    return fcpath;
  }

  /**
   * @method joinUrlPath
   * @description join a url paths, this needs to be tested on windows
   * 
   * @returns {String}
   */
  joinUrlPath() {
    var newpath = path.join.apply(path, arguments);
    if( path.sep !== '/' ) newpath = newpath.replace(path.sep, '/');
    return newpath;
  }

  /**
   * @method getUserHome
   * @description return the home dir for a user
   * 
   * @returns {String}
   */
  getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  }

}

module.exports = new Location();