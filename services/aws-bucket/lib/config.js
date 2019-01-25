const {config} = require('@ucd-lib/fin-node-utils');

config.aws = {
  region : process.env.AWS_BUCKET_REGION || 'us-west-2',
  accessKeyId : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
  urlExpires : process.env.AWS_URL_EXPIRES || (60*15) // default to 15min
}

module.exports = config;