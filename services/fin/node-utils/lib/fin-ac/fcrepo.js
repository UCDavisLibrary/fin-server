const api = require('@ucd-lib/fin-api');
const config = require('../../config.js');

class FinAcFcrepo {

  async setProtectedPath(path) {
    let body = {
      '@context' : {
        acl : 'http://www.w3.org/ns/auth/acl#'
      },
      '@id' : '#finac',
      '@type' : ['acl:Authorization'],
      'acl:agent' : [{'@value': config.finac.agent}],
      'acl:mode' : [{'@id': 'acl:Read'}],
      'acl:accessTo' : [{'@id': '.'}],
      'acl:default' : [{'@id': '.'}]
    };

    let response = await api.put({
      path: path+'/fcr:acl',
      headers : {'content-type': api.RDF_FORMATS.JSON_LD},
      content : JSON.stringify(body)
    });

    return response.last;
  }

  async removeProtectedPath(path) {
    let response = await api.delete({
      path: path+'/fcr:acl',
      permanent: true
    });
    return response.last;
  }

}

module.exports = new FinAcFcrepo();