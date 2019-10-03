const path = require('path');
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const {URL} = require('url');
const {config} = require('@ucd-lib/fin-node-utils');


const HOST_NAME = new URL(config.server.url).hostname.replace(/\./g, '');


class GCSStorage {

  constructor() {
    let opts = {};
    if( fs.existsSync('/etc/fin/service-account.json') ) {
      opts.projectId = require('/etc/fin/service-account.json').project_id,
      opts.keyFilename = '/etc/fin/service-account.json'
    }

    this.storage = new Storage(opts);
    this.initBucket();
  }

  getBucket() {
    return this.storage.bucket(HOST_NAME+'-service-workflows');
  }

  /**
   * @method initBucket
   * @description ensure gcs bucket exits
   */
  async initBucket() {
    let exists = (await this.getBucket().exists())[0];
    if( exists ) return;
    await this.storage.createBucket(HOST_NAME+'-service-workflows');
  }

  getBucketPath(pairTreeId, file) {
    return path.join(pairTreeId, file);
  }

  getFileObject(pairTreeId, filename) {
    return this.getBucket().file(this.getBucketPath(pairTreeId, filename));
  }

  uploadFile(opts={}) {
    let gcsFile = this.getFileObject(opts.pairTreeId, opts.filename);

    return new Promise((resolve, reject) => {
      opts.fileStream
        .pipe(gcsFile.createWriteStream())
        .on('error', (err) => reject(err))
        .on('finish', () => resolve(this.getBucketPath(opts.pairTreeId, opts.filename)));
    });
  }

}

module.exports = new GCSStorage();