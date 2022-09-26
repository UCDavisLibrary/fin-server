
class IoUtils {

  /**
   * @method ignoreSubPath
   * @description should a path be ignored. The path must start with provided subpaths or match
   * provided includeFilter regex.
   * 
   * @param {Object} options 
   * @param {String} options.currentPath
   * @param {RegExp} options.includeFilter Optional.
   * @param {Arary} options.subPaths Optional.
   * 
   * @returns {Boolean}
   */
  ignoreSubPath(options) {
    if( !options.includeFilter && !this._hasSubPaths(options) ) return false;

    let subPath = options.currentPath.replace(options.collectionPath, '');
    let regexMatch = false;
    let pathMatch = false;
    let tryIncludeFilter = options.includeFilter;
    if( !subPath.match(/^\//) ) subPath = '/'+subPath;

    if( tryIncludeFilter ) {
      regexMatch = subPath.match(options.includeFilter) ? true : false;
    }
    if( options.subPaths ) {
      pathMatch = options.subPaths.findIndex(p => subPath.startsWith(p.join('/'))) > -1;
    }

    if( options.subPaths && tryIncludeFilter ) {
      return !(regexMatch || pathMatch);
    } if( tryIncludeFilter ) {
      return !regexMatch;
    }
    return !pathMatch;
  }

  /**
   * @method crawlSubPath
   * @description should a path be crawled.  Either the provided includeFilter must match or
   * part of the provided subPaths.  ex: currentPath /foo/bar will return true for subPath /foo/bar/baz
   * 
   * @param {Object} options 
   * @param {String} options.currentPath
   * @param {RegExp} options.includeFilter Optional.
   * @param {Arary} options.subPaths Optional.
   * 
   * @returns {Boolean}
   */
  crawlSubPath(options) {
    if( !options.includeFilter && !this._hasSubPaths(options) ) return true;

    let subPath = options.currentPath.replace(options.collectionPath, '');
    let regexMatch = false;
    let pathMatch = false;
    let tryIncludeFilter = options.includeFilter;
    if( !subPath.match(/^\//) ) subPath = '/'+subPath;

    if( tryIncludeFilter ) {
      regexMatch = subPath.match(options.includeFilter) ? true : false;
    }
    if( options.subPaths ) {
      pathMatch = options.subPaths.findIndex(p => this._containsPath(subPath, p)) > -1;
    }

    if( options.subPaths && tryIncludeFilter) {
      return (regexMatch || pathMatch);
    } if( tryIncludeFilter ) {
      return regexMatch;
    }
    return pathMatch;
  }

  _hasSubPaths(options) {
    if( !options.subPaths ) return false;
    return (options.subPaths.length > 0);
  }

  _containsPath(path, subPath=[]) {
    if( path.trim() === '/' ) path = '';
    path = path.trim().split('/');
    for( let i = 0; i < subPath.length; i++ ) {
      if( path.length === i ) return true;
      if( path[i] !== subPath[i] ) return false;
    }
    return true;
  }
}

module.exports = new IoUtils();