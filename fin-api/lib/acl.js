/**
 * Extended functionality to working with ACL at low level
 */
const config = require('./config');
const URL = require('./utils/url');
const ContainerHelper = require('./utils/ContainerHelper');
const path = require('path');
const fs = require('fs');
const clone = require('clone');
const template = require('./templates/load');
const transform = require('./utils/transform');
const ApiResponse = require('./utils/response');

let API;

const HAS_PARENT = 'http://fedora.info/definitions/v4/repository#hasParent';
const ACCESS_CONTROL = 'http://www.w3.org/ns/auth/acl#accessControl';
const ACCESS_TO = 'http://www.w3.org/ns/auth/acl#accessTo';
const AGENT = 'http://www.w3.org/ns/auth/acl#agent';
const AGENT_CLASS = 'http://www.w3.org/ns/auth/acl#agentClass';
const MODE = 'http://www.w3.org/ns/auth/acl#mode';
const CONTAINS = 'http://www.w3.org/ns/ldp#contains';
const CONTAINER_TYPE = 'http://www.w3.org/ns/ldp#Container';
const AUTHORIZATION_TYPE = 'http://www.w3.org/ns/auth/acl#Authorization';
const READ = 'http://www.w3.org/ns/auth/acl#Read';
const WRITE = 'http://www.w3.org/ns/auth/acl#Write';
const MEMBER = 'http://xmlns.com/foaf/0.1/member';
const PUBLIC_AGENT = 'http://xmlns.com/foaf/0.1/Agent';
const GROUP = 'http://xmlns.com/foaf/0.1/Group';

// SAMPLES
//  await acl.getGroupsRolesForUser('jrmerz@ucdavis.edu')
//  await acl.getAll()
//  await acl.addAdmin({username: 'jrmerz@ucdavis.edu'})

const ADMIN_ACL = {
  "@context" : {
    "webac" : "http://fedora.info/definitions/v4/webac",
    "rdfs" : "http://www.w3.org/2000/01/rdf-schema#",
  },
  "@id" : "",
  "@type" : "webac:Acl",
  "rdfs:label" : "Site level access controls",
}

const ADMIN_AUTHORIZATION = {
  "@context" : {
    "acl" : "http://www.w3.org/ns/auth/acl#"
  },
  "@id" : "",
  "@type" : "acl:Authorization",
  "acl:accessTo" : {'@id': "/fcrepo/rest/"},
  "acl:agentClass" : {'@id': "/fcrepo/rest/.groups/admins"},
  "acl:mode" : [{'@id': "acl:Read"}, {'@id': "acl:Write"}]
}

const ADMIN_GROUP = {
  "@context" : {
    "foaf" : "http://xmlns.com/foaf/0.1/"
  },
  "@id" : "",
  "@type" : "foaf:Group",
  "foaf:member" : []
}

class ACL {

  constructor(api) {
    API = api;

    this.PUBLIC_AGENT = PUBLIC_AGENT;
    this.MODES = {READ, WRITE}
  }

  /**
   * @method getUrl
   * @description get ACL url for given container.
   *
   * @param {Object} options arguments
   * @param {String} options.path path to container
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * @param {String} path absolute path to container
   * 
   * @returns {Promise} ApiResponse Array
   */
  async getUrl(options) {
    if( !options.headers ) options.headers = {};
    options.headers.Accept = API.RDF_FORMATS.JSON_LD;

    let response = await API.get(options);

    if( response.last.statusCode !== 200 ) {
      return response;
    } else if( !response.last.headers.link ) {
      return response;
    }

    let links = API.parseLinkHeader(response.last.headers.link);

    if( links.acl ) {
      let arr = links.acl.map(link => {
        let pathname = new URL(link.url).pathname;
        return pathname.replace(API.getConfig().fcBasePath, '');
      });
      response.setData(arr);
    }

    return response;
  }

  async get(options, fromGetAll=false) {
    if( !options.headers ) options.headers = {};
    options.headers.Accept = API.RDF_FORMATS.JSON_LD;

    if( !options.path && !fromGetAll) {
      return this.getAll(options);
    }

    let response = await API.get(options);
    if( response.last.statusCode !== 200 ) return null;
    let container = new ContainerHelper(response.last.body, options.path, true);

    let acls = container.getValue(ACCESS_CONTROL);
    if( !acls ) return null;

    let defs = []
    for( let aclUrl of acls ) {
      await this._crawlForAuthorizations(options, aclUrl.split(config.fcBasePath)[1], defs);
    }

    return defs;
  }

  async _crawlForAuthorizations(options, path, containers=[]) {
    options = clone(options);
    options.path = path;

    let response = await API.get(options);
    if( response.last.statusCode !== 200 ) return;
    let rootContainer = new ContainerHelper(response.last.body, path, true);

    if( rootContainer.isType(AUTHORIZATION_TYPE) ) {
      containers.push(rootContainer.graph);

      let agents = rootContainer.getValue(AGENT_CLASS) || [];
      for( let agentUrl of agents ) {
        options.path = agentUrl.split(config.fcBasePath)[1];
        response = await API.get(options);
        if( response.last.statusCode !== 200 ) continue;
        let container = new ContainerHelper(response.last.body, options.path, true);
        containers.push(container.graph);
      }
    }

    let children = rootContainer.getValue(CONTAINS) || [];
    for( let childUrl of children ) {
      await this._crawlForAuthorizations(options, childUrl.split(config.fcBasePath)[1], containers);
    }
  }

  async getAll(options={}) {
    let paths = {};

    options.path = '/';
    if( !options.headers ) options.headers = {};
    options.headers.Accept = API.RDF_FORMATS.JSON_LD;

    let response = await API.get(options);
    if( response.last.statusCode === 200 ) {
      paths['/'] = null;
    }

    // get all acls we should care about
    let roots = ['/collection', '/.services'];
    for( let rootPath of roots ) {
      options.path = rootPath;
      response = await API.get(options);
      if( response.last.statusCode !== 200 ) continue;

      let container = new ContainerHelper(response.last.body, rootPath, true);
      let children = container.getValue(CONTAINS) || [];
      for( let childUrl of children ) {
        paths[childUrl.split(config.fcBasePath)[1]] = null;
      }
    }

    for( let path in paths ) {
      options.path = path;
      paths[path] = await this.get(options, true);
    }

    return paths;
  }

  async getGroupsRolesForUser(user) {
    let aclDefs = await this.getAll();

    let groups = [];
    let authorizations = [];
    for( let path in aclDefs ) {
      if( !aclDefs[path] ) continue;

      for( let def of aclDefs[path] ) {
        let container = new ContainerHelper(def);

        if( container.isType(AUTHORIZATION_TYPE) && 
            (container.getValue(AGENT) || []).indexOf(user) > -1 ) {
              authorizations.push({
            resource : path,
            type : 'agent',
            mode : container.getValue(MODE)
          });
        } else if( container.isType(GROUP) && 
            (container.getValue(MEMBER) || []).indexOf(user) > -1 ) {

          groups.push({
            url : container.graph['@id'],
            id : container.getFinPath(),
            members : container.getValue(MEMBER) || []
          });
        }

      }
    }

    // append group authorizations
    for( let path in aclDefs ) {
      if( !aclDefs[path] ) continue;

      for( let def of aclDefs[path] ) {
        let container = new ContainerHelper(def);

        if( !container.isType(AUTHORIZATION_TYPE) ) continue;
        let agentClasses = (container.getValue(AGENT_CLASS) || []);

        let found = groups.some(g => agentClasses.includes(g.url));

        if( found ) {
          authorizations.push({
            url : container.graph['@id'],
            resource : path,
            type: 'agentClass',
            mode : container.getValue(MODE)
          });
        }
      }
    }

    return {groups, authorizations};
  }

  async addAdmin(options) {
    if( !options.headers ) options.headers = {};
    let username = options.username;
    delete options.username;

    options.path = '/.groups/admins';
    let resp = await API.head(options);

    if( resp.last.statusCode !== 200 ) {
      let opts = clone(options);
      opts.path = '/';
      opts.slug = '.groups'
      resp = await API.postEnsureSlug(opts);

      opts = clone(options);
      opts.path = '/.groups';
      opts.slug = 'admins';
      opts.headers['content-type'] = 'application/ld+json';

      let group = clone(ADMIN_GROUP);
      group['foaf:member'].push({'@value':username});
      opts.content = JSON.stringify(group);
      resp = await API.postEnsureSlug(opts);
    } else {
      let opts = clone(options);
      opts.headers.accept = API.RDF_FORMATS.JSON_LD;
      resp = await API.get(opts);

      let container = new ContainerHelper(resp.last.body, '/.groups/admins', true);
      if( (container.getValue(MEMBER) || []).indexOf(username) === -1 ) {
        opts = clone(options);
        opts.content = `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        INSERT {   
          <> foaf:member "${username}" .
        }
        WHERE { }`

        await API.patch(opts);
      }
    }

    // set acl
    options.path = '/.acl';
    resp = await API.head(options);
    if( resp.last.statusCode !== 200 ) {
      let opts = clone(options);
      opts.path = '/';
      opts.slug = '.acl';
      opts.headers['content-type'] = API.RDF_FORMATS.JSON_LD;
      opts.content = JSON.stringify(ADMIN_ACL);
      await API.postEnsureSlug(opts);
    }

    // set acl
    options.path = '/.acl/admin';
    resp = await API.head(options);
    if( resp.last.statusCode !== 200 ) {
      let opts = clone(options);
      opts.path = '/.acl';
      opts.slug = 'admin';
      opts.headers['content-type'] = API.RDF_FORMATS.JSON_LD;
      opts.content = JSON.stringify(ADMIN_AUTHORIZATION);
      await API.postEnsureSlug(opts);
    }

    // set root acl
    options.path = '/';
    options.headers.accept = API.RDF_FORMATS.JSON_LD;
    resp = await API.get(options);
    let container = new ContainerHelper(resp.last.body, '/', true);
    let accessControl = (container.getValue(ACCESS_CONTROL) || []).find(item => item.match(/\/.acl\/admin$/));
    if( !accessControl ) {
      let opts = clone(options);
      opts.content = `PREFIX acl: <http://www.w3.org/ns/auth/acl#>
      INSERT {   
        <> acl:accessControl <.acl/admin> .
      }
      WHERE { }`

      let resp = await API.patch(opts);
    }
  }

  async removeAdmin(options) {
    if( !options.headers ) options.headers = {};
    let username = options.username;
    delete options.username;

    options.path = '/.groups/admins';
    let resp = await API.head(options);

    if( resp.last.statusCode !== 200 ) return;

    let opts = clone(options);
    opts.content = `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    DELETE {   
      <> foaf:member "${username}" .
    }
    WHERE { }`

    await API.patch(opts);
  }

  /**
   * @method create
   * @description create a ACL at specified path
   * 
   * @param {Object} options arguments
   * @param {String} options.path path to container this ACL will work on
   * @param {String} options.aclContainerName (optional) path for ACL Container, defaults to [options.containerPath]/.acl
   * @param {String} options.label (optional) label for ACL container, defaults to 'System Access Control'
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   * 
   * @returns {Promise} ApiResponse
   */
  async create(options) {
    if( !options.headers ) {
      options.headers = {};
    }
    let patchOptions = clone(options);

    if( !options.label ) options.label = 'System Access Control';
    options.content = template('acl.ttl', {label: options.label});

    if( !options.aclContainerName ) {
      options.aclContainerName = '.fin/acl';
    }

    options.headers.Slug = options.aclContainerName;
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;

    // create ACL container
    let response = await API.postEnsureSlug(options);
    if( response.error ) {
      return response;
    }
    let aclLocation = response.data;

    let templateOptions = {
      path: API.createUrl(options).replace(/\/$/, '') + '/' + options.aclContainerName
    };
    patchOptions.content = template('aclPatch.sparql', templateOptions);
    
    response.appendResponse(await API.patch(patchOptions));
    if( !response.checkStatus(204) ) {
      response.setError(new Error('Unable to patch container with accessControl property '));
    }

    return response.setData({aclLocation});
  }

  /**
   * @method add
   * @description add authorization to container
   * 
   * @param {Object} options arguments
   * @param {String} options.path path to container to apply authorization
   * @param {String} options.agent agent you wish to add
   * @param {String} options.type type should be either [user|group].  defaults to user.
   * @param {Array} options.modes modes you wish to add
   * @param {Array} options.aclPath (optional) if multiple acls are defined, select the acl to add
   * authorization to.  Otherwise the first ACL will be used.
   * @param {Object} options.headers (optional) additional resource headers, key/value pairs
   * @param {String} options.host (optional) override config.host
   * @param {String} options.fcBasePath (optional) override config.fcBasePath
   * @param {String} options.transactionToken (optional) override config.transactionToken
   */
  async add(options) {
    if( !options.headers ) options.headers = {};

    // set default type and make sure time is cleaned up
    if( !options.type ) options.type = 'user';
    options.type = options.type.toLowerCase().trim();

    // grab the correct turtle encoded value w/ a label from helper
    let result = this._parseRdfValue(options.agent, options);
    let authPath = result.label;
    options.agent = result.value; 

    // start creating the container label and authorization container path name
    // path name will be [type]/[agentLabel]/[containerPath]/[permissions]
    let label = '';
    if( options.type === 'group' ) {
      label = 'Group: '+authPath+', ';
      authPath = 'g/'+authPath+'/';
    } else {
      label = 'User: '+authPath+', ';
      authPath = 'u/'+authPath+'/';
    }

    // container creating auth path, append container path
    let tmp = options.path.replace(/(^\/|\/$)/g, '');
    if( tmp ) {
      authPath += tmp+'/';
    }

    // set the permission flags to label, authPath and the turtle template
    let modes = [];
    if( options.modes.indexOf(READ) > -1 ) {
      authPath += 'r';
      label += 'r';
      modes.push('  webac:mode webac:Read ;');
    }
    if( options.modes.indexOf(WRITE) > -1 ) {
      authPath += 'w';
      label += 'w';
      modes.push('  webac:mode webac:Write ;');
    }

    // on more bit for the label
    label += ', on /'+tmp;

    let aclPath = options.aclPath;
    let response = new ApiResponse();
    if( !aclPath ) {
      // find the acls for this container
      response = await this.getUrl(clone(options));
      if( response.error ) return response;
      aclPath = response.data[0];
    }

    if( options.agent && options.agent.trim().toLowerCase() === '"public"' ) {
      options.agent = '<http://xmlns.com/foaf/0.1/Agent>';
    }
    
    // options for creating authorization container turtle from template
    let templateOptions = {
      authorizationPath : API.getBaseUrl(options) + options.path,
      agent : options.agent,
      type : options.type === 'group' ? 'agentClass' : 'agent',
      modes : modes.join('\n'),
      label : label
    }

    // finally, lets setup the actual POST request
    options.path = aclPath;
    options.headers.Slug = authPath;
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.content = template('authorization.ttl', templateOptions);

    // make request and let someone else handle response
    return response.appendResponse(await API.post(options));
  }

  _parseRdfValue(value, options) {
    let label;

    // we were given a full url
    if( value.match(/^http/i) ) {
      label = new URL(value).pathname.split('/');
      label = label[label.length-1];
      value = `<${value}>`;

    // we were given a full path 
    } else if( value.match(/^\//i) ) {
      label = value.replace(/\/$/, '').split('/').pop();
      let baseUrl = API.getBaseUrl(options);
      value = `<${baseUrl}/${value.replace(/^\//,'')}>`;

    // it's just a string
    } else {
      label = value;
      value = `"${value}"`;
    }

    return {label, value};
  }
}

module.exports = ACL;