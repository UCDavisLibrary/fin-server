const transform = require('./utils/transform');
const loadTemplate = require('./templates/load');
const clone = require('clone');
const fs = require('fs');
const path = require('path');
const ApiResponse = require('./utils/response');
const fcrPathUtils = require('./utils/path');

let API;

const COLLECTION_ROOT_PATH = 'collection';

const PCMD_COLLECTION = 'http://pcdm.org/models#Collection';
const SCHEMA_ORG_COLLECTION = 'http://schema.org/Collection';
const BASIC_CONTAINER = 'http://www.w3.org/ns/ldp#BasicContainer';
const MEMBERSHIP_RESOURCE = 'http://www.w3.org/ns/ldp#membershipResource';
const HAS_MEMBER_RELATION = 'http://www.w3.org/ns/ldp#hasMemberRelation';
const IS_MEMBER_OF_RELATION = 'http://www.w3.org/ns/ldp#isMemberOfRelation';
const SCHEMA_ORG_HAS_PART = 'http://schema.org/hasPart';
const SCHEMA_ORG_IS_PART_OF = 'http://schema.org/isPartOf';
const SCHEMA_ORG_ASSOCIATED_MEDIA = 'http://schema.org/associatedMedia';
const SCHEMA_ORG_ENCODES_CREATIVE_WORK = 'http://schema.org/encodesCreativeWork';
const SCHEMA_ORG_EXAMPLE_OF_WORK = 'http://schema.org/exampleOfWork';
const SCHEMA_ORG_WORK_EXAMPLE = 'http://schema.org/workExample';
const DIRECT_CONTAINER = 'http://www.w3.org/ns/ldp#DirectContainer';

class Collection {

  constructor(api) {
    API = api;

    this.COLLECTION_ROOT_PATH = COLLECTION_ROOT_PATH;
  }

  testing(testing=true) {
    if( testing ) this.COLLECTION_ROOT_PATH = 'integration-test/'+COLLECTION_ROOT_PATH;
    else this.COLLECTION_ROOT_PATH = COLLECTION_ROOT_PATH;
  }

  /**
   * @method create
   * @description create a new collection
   * 
   * @param {Object} options
   * @param {Object} options.id collection name in path
   * @param {String} options.content turtle content to write to collection root
   * @param {String} options.file turtle file to read from disk and write to collection root
   */
  async create(options) {
    if( !options.id ) {
      return new ApiResponse().setError('You must provide a id for collection');
    }

    let orgOptions = clone(options);

    // make sure the root collection container is setup
    let response = await this._ensureCollectionRoot(options);
    if( response.error ) return response;

    // read turtle if provided by system file
    if( options.file ) {
      if( !fs.existsSync(options.file) ) {
        throw new Error('Unable to find collection file: '+options.file);
      }
      options.content = fs.readFileSync(options.file, 'utf-8');
      delete options.file;
    }

    // transform to jsonld so we can manipulate 
    let jsonld = {};
    if( options.content ) {
      jsonld = await transform.turtleToJsonLd(options.content);
    }

    // ensure container has correct types for collection
    if( Array.isArray(jsonld) ) jsonld.forEach(item => this._ensureCollectionTypes(item));
    else this._ensureCollectionTypes(jsonld);

    // set our content-type to turtle
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.headers['Slug'] = options.id;
    options.content = await transform.jsonldToTurtle(jsonld);
    options.path = '/'+this.COLLECTION_ROOT_PATH;

    response.appendResponse(await API.postEnsureSlug(options));
    if( response.error ) return response;

    let newPath = response.data;

    // create the groups path
    options = clone(orgOptions);
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.headers['Slug'] = 'groups';
    options.path = newPath;
    options.content = loadTemplate('collectionGroups.ttl');

    response.appendResponse(await API.postEnsureSlug(options));
    if( response.error ) return response;
    let groupsPath = response.data;

    // create the collection acl root
    options = clone(orgOptions);
    options.path = newPath;
    options.label = 'Collection Access Control'
    response.appendResponse(await API.acl.create(options));
    if( response.error ) return response;

    let aclPath = response.data.aclLocation.replace(API.getBaseUrl(options), '');

    return response.setData({
      path : newPath,
      groups : groupsPath,
      acl : aclPath
    });
  }  

  /**
   * @method createRelationContainer
   * @description create a direct container to store collection item as a relation to parent
   * 
   * @param {Object} options
   * @param {String} options.id relation container id
   * @param {String} options.collectionId collection to add relation container
   * @param {String} options.membershipResource (optional) path to membership resource relative to collection root.  Defaults to
   * container parent
   * @param {String} options.fsPath (optional) path to ttl metadata file.  fsPath can be path to directory containing index.ttl
   * @param {String} options.type should be either [part|media]
   * @param {String} options.hasMemberRelation if default type is not provided
   * @param {String} options.isMemberOfRelation if default type is not provided
   */
  async createRelationContainer(options) {
    // create the members path
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.JSON_LD;
    options.headers['Slug'] = options.id;
    options.path = '/'+this.COLLECTION_ROOT_PATH+'/'+options.collectionId;

    let jsonld = {
      '@id' : ''
    };

    if( options.fsPath ) {
      let ttl = fs.readFileSync(options.fsPath, 'utf-8');
      jsonld = await API.transform.turtleToJsonLd(ttl);
      if( Array.isArray(jsonld) ) jsonld = jsonld[0];
    }

    this._ensureDirect(jsonld);

    let membershipResource = fcrPathUtils.joinUrlPath(
      API.getConfig().fcBasePath,
      options.path
    );
    if( options.membershipResource ) {
      membershipResource = fcrPathUtils.joinUrlPath(membershipResource, options.membershipResource);
      options.path = fcrPathUtils.joinUrlPath(options.path, options.membershipResource);
    } else { // get parent
      membershipResource = fcrPathUtils.joinUrlPath(membershipResource, options.id).split('/');
      membershipResource.pop();
      membershipResource = membershipResource.join('/');
    }
    jsonld[MEMBERSHIP_RESOURCE] = {'@id' : membershipResource};


    if( options.type === 'part' ) {
      jsonld[HAS_MEMBER_RELATION] = {'@id' : SCHEMA_ORG_HAS_PART};
      jsonld[IS_MEMBER_OF_RELATION] = {'@id' : SCHEMA_ORG_IS_PART_OF};
    } else if( options.type === 'media' ) {
      jsonld[HAS_MEMBER_RELATION] = {'@id' : SCHEMA_ORG_ASSOCIATED_MEDIA};
      jsonld[IS_MEMBER_OF_RELATION] = {'@id' : SCHEMA_ORG_ENCODES_CREATIVE_WORK};
    } else if( options.hasMemberRelation && options.isMemberOfRelation ) { 
      jsonld[HAS_MEMBER_RELATION] = {'@id' : options.hasMemberRelation};
      jsonld[IS_MEMBER_OF_RELATION] = {'@id' : options.isMemberOfRelation};
    } else {
      return new ApiResponse().setError('No type provided for relation container');
    }

    options.content = JSON.stringify(jsonld);

    return API.postEnsureSlug(options);
  }

  /**
   * @method createRelationProperties
   * @description set the schema.org exampleOfWork/workExample relationship between a resource(s) or 
   * a resource and a collection
   * 
   * @param {Object} options
   * @param {String} collectionId collection id (name in path)
   * @param {String} options.dstPath the resource to set as destination relation
   * @param {String} options.srcPath path for source relation. if omited the collection container will be used
   * @param {String} options.dstProperty 
   * @param {String} options.srcProperty
   */
  async createRelationProperties(options) {
    if( !options.headers ) options.headers = {};
    let orgOptions = clone(options);
    let collectionPath = '/'+this.COLLECTION_ROOT_PATH+'/'+options.collectionId;

    let srcJsonLd, dstJsonLd;

    // figure out path to source/dst container
    if( options.srcPath ) {
      options.srcPath = fcrPathUtils.joinUrlPath(collectionPath, options.srcPath);
    } else {
      options.srcPath = collectionPath;
    }
    options.dstPath = fcrPathUtils.joinUrlPath(collectionPath, options.dstPath);

    // see if we need to append /fcr:metadata to src path
    let headOptions = clone(options);
    headOptions.path = options.srcPath;
    var response = await API.head(headOptions);
    if( response.error ) return response;

    let rdfSrcPath = options.srcPath;
    if( !API.isRdfContainer(response.last) ) {
      options.srcPath = options.srcPath+'/fcr:metadata';
    }

    // see if we need to append /fcr:metadata to dst path
    headOptions.path = options.dstPath;
    response.appendResponse(await API.head(headOptions));
    if( response.error ) return response;

    let rdfDstPath = options.dstPath;
    if( !API.isRdfContainer(response.last) ) {
      options.dstPath = options.dstPath+'/fcr:metadata';
    }

    // now update containers
    response.appendResponse(await API.startTransaction());

    // update the src container
    let patchOptions = clone(orgOptions);
    patchOptions.path = options.srcPath;
    patchOptions.insert = {
      [options.srcProperty] : {'@id': API.getConfig().fcBasePath+rdfDstPath}
    }
    response.appendResponse(await API.jsonld.patch(patchOptions));
    if( response.error ) {
      response.appendResponse(await API.rollbackTransaction());
      return response;
    }

    // update the dst container
    patchOptions = clone(orgOptions);
    patchOptions.path = options.dstPath;
    patchOptions.insert = {
      [options.dstProperty] : {'@id': API.getConfig().fcBasePath+rdfSrcPath}
    }
    response.appendResponse(await API.jsonld.patch(patchOptions));
    if( response.error ) {
      response.appendResponse(await API.rollbackTransaction());
      return response;
    }

    response.appendResponse(await API.commitTransaction());

    return response;
  }

  /**
   * @method addResource
   * @description add a resource to a collection.  Structure can be as follows:
   * 
   * collection -> parents -> binary -> metadata 
   * |-----------------------------------------------------------------------------------|
   * | Basic Container      / Container(s)        / Binary Container  / FCR Metadata     |
   * | Collection Container / Parent Container(s) / Product Container / Product Metadata |
   * | [collectionId]       / [parentPath]        / [id]              / fcr:metadata     |
   * |-----------------------------------------------------------------------------------|
   * 
   * If a ttl file exists that is the same name as the binary file with .ttl appended, this .ttl file
   * will be used as the Product Metadata.
   *
   * 
   * @param {Object} options
   * @param {String} options.id container id (name in path)
   * @param {String} options.collectionId collection id (name in path)
   * @param {String} options.parentPath (optional) parent container path relative to collection.  defaults to collection container.
   * @param {String} options.fsPath (optional) if provided, metadata, binary will be assumed files
   * @param {String} options.metadata (optional) turtle content to write to binary /fcr:metadata folder.  If fsPath provided
   * should be relative to fsPath.  Defaults to [binary].ttl.  So if binary is foo.png will automatically look for
   * foo.png.ttl
   * @param {String} options.data data to write to container. If fsPath provided
   * should be relative to fsPath.  If options.data is not provided and fsPath is a directory that
   * container a index.ttl, the index.ttl file will be used
   * @param {Object} options.customHeaders headers to append when posting resource.  Useful to set exact 'Content-Type', etc
   */
  async addResource(options) {
    if( !options.headers ) options.headers = {};
    let orgOptions = clone(options);
    let collectionPath = '/'+this.COLLECTION_ROOT_PATH+'/'+options.collectionId;

    // make sure collection exists
    options.path = collectionPath;
    var response = await API.head(options);
    if( !response.checkStatus(200) ) {
      return response.setError('Unknown collection id: '+options.collectionId)
    }

    // set our current path relative to collection and parent path
    let currentPath = collectionPath;
    if( options.parentPath ) {
      currentPath = fcrPathUtils.joinUrlPath(currentPath, options.parentPath);
    }

    // create binary container
    let bOptions = clone(orgOptions);

    // start with figuring out the binary slug
    let itemId = 'item';
    if( options.id ) {
      itemId = options.id;
    } else if( options.fsPath ) {
      let info = path.parse(options.data);
      itemId = fcrPathUtils.joinUrlPath(info.dir, info.name).replace(/^\//, '');
    }

    bOptions.slug = itemId;
    bOptions.path = currentPath;

    // append custom headers provided by user
    if( options.customHeaders ) {
      if( !bOptions.headers ) bOptions.headers = {};
      for( let key in options.customHeaders ) {
        bOptions.headers[key] = options.customHeaders[key];
      }
    }

    if( options.fsPath ) {
      let tmpPath = options.fsPath;
      if( options.data ) tmpPath = path.join(tmpPath, options.data);

      if( !fs.lstatSync(tmpPath).isDirectory() ) {
        bOptions.file = tmpPath;
      } else if( fs.existsSync(path.join(tmpPath, 'index.ttl')) ) {
        bOptions.file = path.join(tmpPath, 'index.ttl');
      }
    } else if( options.data ) {
      bOptions.file = options.data;
    } else {
      bOptions.content = options.metadata;
    }

    response.appendResponse(await API.postEnsureSlug(bOptions));
    
    // patch item metadata
    let bmOptions = clone(orgOptions);
    let itemMetadata = options.metadata;

    if( !itemMetadata && options.fsPath ) { // check for a .ttl file
      let ttlMetadata = path.join(options.fsPath, options.data+'.ttl');
      if( fs.existsSync(ttlMetadata) ) {
        itemMetadata = fs.readFileSync(ttlMetadata, 'utf-8');
      }
    } else if( options.fsPath ) { // check for given metadata file
      if( fs.existsSync(path.join(options.fsPath, itemMetadata)) ) {
        itemMetadata = fs.readFileSync(path.join(options.fsPath, itemMetadata), 'utf-8');
      }
    }

    // nothing left to do
    if( !itemMetadata) return response;

    bmOptions.path = currentPath + '/' + itemId + '/fcr:metadata';
    bmOptions.headers['Accept'] = API.RDF_FORMATS.JSON_LD;
    
    // get current metadata
    response.appendResponse(await API.get(bmOptions));
    if( !response.checkStatus(200) ) {
      return response.setError('Unable to get /fcr:metadata for new container');
    }

    let jsonld = JSON.parse(response.last.body);
    if( Array.isArray(jsonld) ) jsonld = jsonld[0];
    let orgJsonld = clone(jsonld);
  
    let mergeData = await transform.turtleToJsonLd(itemMetadata);
    if( Array.isArray(mergeData) ) mergeData = mergeData[0];

    for( let key in mergeData ) {
      if( key === '@id' ) continue;

      if( jsonld[key] ) jsonld[key] = mergeData[key].concat(jsonld[key]);
      else jsonld[key] = mergeData[key];
    }

    let orgttl = await transform.jsonldToTurtle(orgJsonld);
    let newttl = await transform.jsonldToTurtle(jsonld);
    let sparql = await transform.diffToSparql(orgttl, newttl);

    response.appendResponse(await API.patch({
      path : bmOptions.path,
      content: sparql
    }));

    // badness
    if( !response.checkStatus(204) ) {
      response.setError('Unable to patch metadata');
    }

    response.data = currentPath + '/' + itemId;

    return response;
  }

  async patch(options) {
    let collectionPath = '/'+this.COLLECTION_ROOT_PATH+'/'+options.collectionId;
    let currentPath = collectionPath;
    if( options.parentPath ) {
      currentPath = fcrPathUtils.joinUrlPath(currentPath, options.parentPath);
    }

    // patch item metadata
    let bmOptions = clone(options);
    let itemMetadata = options.metadata;

    bmOptions.path = currentPath + '/' + options.id;
    bmOptions.headers = {
      Prefer : 'return=representation; omit="http://www.w3.org/ns/ldp#PreferMembership http://www.w3.org/ns/ldp#PreferContainment http://fedora.info/definitions/v4/repository#InboundReferences http://fedora.info/definitions/v4/repository#EmbedResources http://fedora.info/definitions/v4/repository#ServerManaged"'
    }
    
    // get current metadata
    let response = await API.metadata(bmOptions);
    if( !response.checkStatus(200) ) {
      return response.setError('Unable to get metadata for container');
    }

    let jsonld = JSON.parse(response.last.body);

    if( Array.isArray(jsonld) ) jsonld = jsonld[0];
    let orgJsonld = clone(jsonld);
    
    let mergeData = await transform.turtleToJsonLd(itemMetadata);
    if( Array.isArray(mergeData) ) mergeData = mergeData[0];

    // for( let key in mergeData ) {
    //   if( key === '@id' ) continue;

    //   if( jsonld[key] !== undefined ) {
    //     jsonld[key] = mergeData[key].concat(jsonld[key]);
    //   } else {
    //     jsonld[key] = mergeData[key];
    //   }
    // }
    jsonld = mergeData;

    let orgttl = await transform.jsonldToTurtle(orgJsonld);
    let newttl = await transform.jsonldToTurtle(jsonld);
    let sparql = await transform.diffToSparql(orgttl, newttl, {includeParseInfo: true});

    if( sparql.inserts.length === 0 && sparql.deletes.length === 0 ) {
      response.noop = true;
      return response;
    }

    response.appendResponse(await API.patch({
      path : bmOptions.path,
      content: sparql.sparql
    }));

    // badness
    if( !response.checkStatus(204) ) {
      response.setError('Unable to patch metadata');
    }

    response.data = currentPath + '/' + options.id;

    return response;
  }

  /**
   * @method deleteResource
   * @description delete a child container of a collection
   * 
   * @param {Object} options
   * @param {String} options.id container id (name in path)
   * @param {String} options.collectionId collection id (name in path)
   */
  deleteResource(options) {
    let path = fcrPathUtils.joinUrlPath(
      '/'+this.COLLECTION_ROOT_PATH,
      options.collectionId,
      options.id
    )
    
    return API.delete({
      path,
      permanent: true
    });
  }

  /**
   * @method delete
   * @description delete a collection
   * 
   * @param {Object} options
   * @param {String} options.id collection id (name in path)
   */
  delete(options) {
    let path = '/'+this.COLLECTION_ROOT_PATH+'/'+options.id;
    
    return API.delete({
      path,
      permanent: true
    });
  }

  /**
   * @method _ensureCollectionRoot
   * @description ensure the /collection container has been created
   * 
   * @param {Object} options 
   */
  async _ensureCollectionRoot(options) {
    options = clone(options);
    if( options.content ) delete options.content;

    options.path = '/'+this.COLLECTION_ROOT_PATH;
    let response = await API.head(options);
    if( response.checkStatus(200) ) return response;

    if( !response.checkStatus(404) ) {
      return response.setError('You do not have write permissions to create a collection');
    }

    options.path = '/';
    if( !options.headers ) options.headers = {};
    options.headers['Content-Type'] = API.RDF_FORMATS.TURTLE;
    options.headers['Slug'] = this.COLLECTION_ROOT_PATH;
    options.content = loadTemplate('collectionRoot.ttl');
    
    response.appendResponse(await API.post(options));
    if( !response.checkStatus(201) ) {
      response.setError('You do not have write permissions to create a collection');
    }

    return response;
  }

  async _ensureCollectionTypes(jsonld) {
    if( !jsonld['@type'] ) jsonld['@type'] = [];

    [BASIC_CONTAINER, SCHEMA_ORG_COLLECTION].forEach(type => {
      if( jsonld['@type'].indexOf(type) == -1 ) {
        jsonld['@type'].push(type)
      }
    });
  }

  async _ensureDirect(jsonld) {
    if( !jsonld['@type'] ) jsonld['@type'] = [];
    if( jsonld['@type'].indexOf(DIRECT_CONTAINER) == -1 ) {
      jsonld['@type'].push(DIRECT_CONTAINER)
    }
  }

}

module.exports = Collection;