var path = require('path');
var fs = require('fs');

class PathUtils {

  makeAbsolutePath(file) {
    file = file.trim();

    if( file.match(/^~/) ) {
      return path.join(this.getUserHome(), file.replace(/^~/, ''));
    } else if( !path.isAbsolute(file) ) {
      return path.join(process.cwd(), file);
    }
    return file;
  }

  makeAbsoluteFcPath(fcpath = '.', basepath = '/') {
    if( !fcpath.match(/^\//) ) {
      return this.joinUrlPath(basepath, fcpath);
    }
    return fcpath;
  }

  joinUrlPath() {
    var newpath = path.join.apply(path, arguments);
    // console.log(arguments, newpath);
    let sep = path.sep;
    if( sep === '\\\\' ) sep = '\\';
    if( sep !== '/' ) newpath = newpath.replace(new RegExp('\\\\', 'g'), '/');
    return newpath;
  }

  fileExists(filepath) {
    if( !fs.existsSync ) return false;
    return fs.existsSync(filepath);
  }
}

module.exports = new PathUtils();