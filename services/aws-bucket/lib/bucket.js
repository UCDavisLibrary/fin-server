const AWS = require('aws-sdk');
const config = require('./config');

class AwsBucketAccess {

  constructor() {
    AWS.config.update({
      region: config.aws.region,
      accessKeyId : config.aws.accessKeyId,
      secretAccessKey : config.aws.secretAccessKey
    });

    this.s3 = new AWS.S3();
  }

  getSignedUrl(bucket, filename) {
    var params = {Bucket: bucket, Key: filename, Expires: config.aws.urlExpires};
    return this.s3.getSignedUrl('getObject', params);
  }

}

module.exports = new AwsBucketAccess();