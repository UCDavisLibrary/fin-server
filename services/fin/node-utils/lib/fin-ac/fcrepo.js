const api = require('@ucd-lib/fin-api');
const config = require('../../config.js');

const AGENT = 'http://www.w3.org/ns/auth/acl#agent';
const ACL_TYPE = 'http://fedora.info/definitions/v4/webac#Acl';
const AUTHORIZATION_TYPE = 'http://www.w3.org/ns/auth/acl#Authorization';
const ACCESS_TO = 'http://www.w3.org/ns/auth/acl#accessTo';
const MODE = 'http://www.w3.org/ns/auth/acl#mode';

class FinAcFcrepo {

  async getProtected(path, finAcOnly=true) {
    let webac = await this._getAcl(path);
    return this.getReadAuthorizations(webac, path, finAcOnly);
  }

  async setProtectedPath(path, agent) {
    let webac = await this._getAcl(path);
    
    webac = this._stripFinacAgents(webac);
    
    webac.push({
      '@context' : {
        acl : 'http://www.w3.org/ns/auth/acl#'
      },
      '@id' : '#finac',
      '@type' : ['acl:Authorization'],
      'acl:agent' : [{'@value': agent}],
      'acl:mode' : [{'@id': 'acl:Read'}],
      'acl:accessTo' : [{'@id': '.'}],
      'acl:default' : [{'@id': '.'}]
    });

    let response = await api.put({
      path: path+'/fcr:acl',
      headers : {'content-type': api.RDF_FORMATS.JSON_LD},
      content : JSON.stringify(webac)
    });

    return response.last;
  }

  async removeProtectedPath(path) {
    let webac = await this._getAcl(path);
    
    webac = this._stripFinacAgents(webac);
    
    if( webac.length ) {
      await api.put({
        path: path+'/fcr:acl',
        headers : {'content-type': api.RDF_FORMATS.JSON_LD},
        content : JSON.stringify(webac)
      });
    } else {
      await api.delete({
        path: path+'/fcr:acl'
      });
    }
  }

  _stripFinacAgents(webac) {
    return webac.filter(node => {
      // remove root acl for posting back
      if( node['@type'] && node['@type'].includes(ACL_TYPE) ) {
        return false;
      }

      if( !node[AGENT] ) return true;
      let finacAgent = node[AGENT].find(agent => config.finac.agents[agent['@value']]);
      if( finacAgent ) return false;
      return true;
    });
  }

  /**
   * @method getFinAcPath
   * @description Only want to set and control finac from ArchivalGroup level.  Fin
   * 
   * @param {String} path 
   */
  async getFinAcPath(path) {
    let response = await api.head({
      path: path,
      headers : {accept: api.RDF_FORMATS.JSON_LD},
      directAccess : true,
      superuser : true,
      host : config.fcrepo.host
    });

    if( response.error || response.last.statusCode !== 200 ) {
      return path;
    }

    let links = api.parseLinkHeader(response.last.headers.link);
    if( links['archival-group'] && links['archival-group'].length ) {
      return links['archival-group'][0].url.split(api.getConfig().fcBasePath)[1];
    }

    return path;
  }

  async _getAcl(path) {
    let response = await api.get({
      path: path+'/fcr:acl',
      headers : {accept: api.RDF_FORMATS.JSON_LD},
      directAccess : true,
      superuser : true,
      host : config.fcrepo.host
    });

    let webac = [];
    if( response.last &&  response.last.statusCode === 200 && response.last.body ) {
      webac = JSON.parse(response.last.body);
      console.log(path, webac);
      if( webac['@graph'] ) webac = webac['@graph'];
      if( !Array.isArray(webac) ) webac = [webac]
    }
    return webac;
  }

  // should this limit to finac agents?
  getReadAuthorizations(webac, path, finAcOnly=true) {
    if( typeof webac === 'string' ) {
      webac = JSON.parse(webac);
    }
    if( webac['@graph'] ) webac = webac['@graph'];

    let authorizations = [];
    for( let node of webac ) {
      if( !node['@type'] ) continue;
      if( !node['@type'].includes(AUTHORIZATION_TYPE) ) continue;

      authorizations.push({
        accessTo : (node[ACCESS_TO] || [])
          .map(item => item['@id'] || item['@value'])
          .map(item => item.split(api.getConfig().fcBasePath)[1]),
        agent : (node[AGENT] || [])
          .map(item => item['@id'] || item['@value']),
        mode : (node[MODE] || [])
          .map(item => item['@id'] || item['@value'])
          .map(item => item.replace(/.*#/, '').toLowerCase())
      });
    }

    let finacAgents = Object.values(config.finac.agents);
    let readAuths = new Set();

    authorizations
      .filter(node => node.accessTo.includes(path))
      .filter(node => node.mode.includes('read'))
      .forEach(node => {
        node.agent.forEach(agent => {
          if( finAcOnly === true && finacAgents.includes(agent) ) {
            readAuths.add(agent);
          } else if( finAcOnly === false ) {
            readAuths.add(agent);
          }
        });
      });

    return Array.from(readAuths);
  }

}

module.exports = new FinAcFcrepo();