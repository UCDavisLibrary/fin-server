const api = require('@ucd-lib/fin-node-api');
const path = require('path');
const fs = require('fs-extra');

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
    let dir = this.getBackupDir(name);
    let statusFile = dir+'.status';

    await this.delete(name);

    await fs.mkdirs(dir);
    await fs.chmod(dir, 0o777);

    await fs.writeFile(statusFile, 'creating');

    let response = await api.post({
      path : '/fcr:backup',
      headers : {
        'Content-Type' : 'text/plain'
      },
      content : path.join('/var/lib/jetty/fcrepo-backups', name) 
    });

    if( response.error ) {
      await this.delete(name);
      throw new Error(response.error.message);
    }
    if( !response.checkStatus(200) ) {
      await this.delete(name);
      throw new Error(response.last.body);
    }
    
    await fs.remove(statusFile);

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
  list() {
    return fs.readdir(ROOT);
  }

  /**
   * @method
   * @description helper for checking status of backup creation
   * 
   * @param {String} name name of backup
   * 
   * @returns {String}
   */
  getStatus(name) {
    let zip = this.getBackupDir(name);
    if( fs.existsSync(zip) ) return 'created';

    let status = this.getBackupDir(name)+'.status';
    if( fs.existsSync(status) ) return fs.readFileSync(status, 'utf-8');

    return 'does not exist';
  }

  /**
   * @method delete
   * @description delete a backup by name
   * 
   * @param {String} name
   * 
   * @return {Promise} 
   */
  async delete(name) {
    let dir = this.getBackupDir(name);

    if( fs.existsSync(dir) ) {
      await fs.remove(dir);
    }
    if( fs.existsSync(dir+'.status') ) {
      await fs.remove(dir+'.status');
    } 
  }
}

module.exports = new BackupModel();