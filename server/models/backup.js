const api = require('@ucd-lib/fin-node-api');
const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').exec;

const ROOT = '/fcrepo-backups';
const HOST = ''; // do we want to run backup container

class BackupModel {

  /**
   * @method create
   * @description create a backup using the fedora API
   * 
   * @param {String} name
   * 
   * @returns {Promise} 
   */
  async create(name) {
    let dir = this.getBackupDir(name)

    if( fs.existsSync(dir) ) {
      await fs.remove(dir);
    }
    if( fs.existsSync(dir+'.zip') ) {
      await fs.remove(dir+'.zip');
    } 

    await fs.mkdirs(dir);
    await fs.chmod(dir, 0o777);

    let response = await api.post({
      path : '/fcr:backup',
      headers : {
        'Content-Type' : 'text/plain'
      },
      content : path.join('/var/lib/jetty/fcrepo-backups', name) 
    });

    if( response.error ) {
      throw new Error(response.error.message);
    }
    if( !response.checkStatus(200) ) {
      throw new Error(response.last.body);
    }

    console.log(`zip -r ../${name}.zip ./*`);
    console.log(dir);
    let {stdout, stderr} = await this.exec(`zip -r ../${name}.zip ./*`, {cwd: dir});
    console.log(stdout);
    console.log(stderr);

    if( fs.existsSync(dir) ) {
      await fs.remove(dir);
    }

    // fs.move(response.last.body, dir);

    return dir;
  }

  /**
   * @method getBackupDir
   * @description get the full path to a backup directory
   * 
   * @param {String} name name of backup
   * 
   * @return {String} backup path
   */
  getBackupDir(name) {
    return path.join(ROOT, name);
  }

  /**
   * @method list
   * @description list of files in the root backups directory
   * 
   * @returns {Promise}
   */
  async list() {
    return (await fs.readdir(ROOT)).map(file => file.replace(/\.zip^/,''));
  }

  /**
   * @method get
   * @description get a backup
   * 
   * @param {String} name name of backup
   * 
   * @returns {Object} read stream
   */
  get(name) {
    return fs.createReadStream(this.getBackupDir(name)+'.zip')
  }

  /**
   * @method delete
   * @description delete a backup by name
   * 
   * @param {String} name
   * 
   * @return {Promise} 
   */
  delete(name) {
    return fs.remove(this.getBackupDir(name));
  }

  exec(cmd, options = {}) {
    options.shell = '/bin/bash';
    return new Promise((resolve, reject) => {
      exec(cmd, options, (error, stdout, stderr) => {
        if( error ) reject(error);
        else resolve({stdout, stderr});
      });
    });
  }

}

module.exports = new BackupModel();