const api = require('@ucd-lib/fin-node-api');
const {jwt} = require('@ucd-lib/fin-node-utils');

class BucketAcl {

  async hasAccess(collection, userToken) {  
    if( userToken ) {
      let user = jwt.validate(userToken);
    }
    
    // check /.aws-bucket-acl
    // optional check /collection/[collection name]/.aws-bucket-acl

    return true;
  }

}

module.exports = new BucketAcl(); 