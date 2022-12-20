global.LOGGER_NAME = 'essync';

const {config, logger, activemq, records} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');
const indexer = require('./elasticsearch');
const postgres = require('./postgres');


class EsSync {

  constructor() {
    activemq.onMessage(e => this.handleMessage(e));
    activemq.connect('essync', '/queue/essync');

    this.UPDATE_TYPES = {
      UPDATE : ['Create', 'Update'],
      DELETE : ['Delete', 'Purge']
    }

    this.BINARY_CONTAINER = 'http://fedora.info/definitions/v4/repository#Binary';
    this.FIN_IO_INDIRECT_CONTAINER = 'http://digital.ucdavis.edu/schema#FinIoIndirectReference';

    postgres.connect()
      .then(() => indexer.isConnected())
      .then(() => this.readLoop());
  }

  async readLoop() {
    let item = await postgres.nextLogItem();
    
    if( !item ) {
      setTimeout(() => this.readLoop(), 500);
      return;
    }

    await this.updateContainer(item);
    await postgres.clearLog(item.event_id);

    this.readLoop();
  }

  /**
   * @method handleMessage
   * 
   */
  async handleMessage(msg) {
    if( msg.headers['edu.ucdavis.library.eventType'] ) {
      let eventType = msg.headers['edu.ucdavis.library.eventType'];
      await postgres.log({
        event_id : msg.headers['message-id'],
        event_timestamp : new Date(parseInt(msg.headers.timestamp)).toISOString(),
        path : msg.body['@id'],
        container_types : msg.body['@type'],
        update_types : [eventType]
      });
      return;
    }

    await postgres.log({
      event_id : msg.headers['org.fcrepo.jms.eventID'],
      event_timestamp : new Date(parseInt(msg.headers['org.fcrepo.jms.timestamp'])).toISOString(),
      path : msg.headers['org.fcrepo.jms.identifier'],
      container_types : msg.headers['org.fcrepo.jms.resourceType']
        .split(',')
        .map(item => item.trim())
        .filter(item => item),
      update_types : msg.body.type
    });
  }

  // isUpdate(e) {
  //   return e.update_types.find(item => this.UPDATE_TYPES.UPDATE.includes(item)) ? true : false;
  // }

  isDelete(e) {
    return e.update_types.find(item => this.UPDATE_TYPES.DELETE.includes(item)) ? true : false;
  }

  /**
   * @method item
   * @description called been buffer event timer fires
   * 
   * @param {Object} e event payload from log table
   */
  async updateContainer(e) {
    let jsonld = {};

    // update elasticsearch
    try {

      // check update_type is delete.
      if( this.isDelete(e) ) {
        logger.info('Container '+e.path+' was removed from LDP, removing from index');

        e.action = 'delete';
        await indexer.remove(e.path);
        await postgres.updateStatus(e);
        return;
      }

      // check for binary
      if( e.container_types.includes(this.BINARY_CONTAINER) ) {
        logger.info('Ignoring container '+e.path+'.  binary container');

        e.action = 'ignored';
        e.message = 'binary container';
        await postgres.updateStatus(e);
        // JM - Not removing path, as the /fcr:metadata container is also mapped to this path
        // return indexer.remove(e.path);   
        return;
      }

      // check for fin io container
      if( e.container_types.includes(this.FIN_IO_INDIRECT_CONTAINER) ) {
        logger.info('Ignoring container '+e.path+'.  fin io indirect container');

        e.action = 'ignored';
        e.message = 'fin io indirect container';
        await indexer.remove(e.path);
        await postgres.updateStatus(e);
        return;   
      }

      if( !e.container_types ) {
        e.container_types = [];

        let response = await api.head({path});
        if( response.data.statusCode === 200 ) {
          var link = response.last.headers['link'];
          if( link ) {
            link = api.parseLinkHeader(link);
            e.container_types = link.type || [];
          }
        }
      }

      let response = await this.getTransformedContainer(e.path, e.container_types);

      if( !response ) {
        logger.info('Container '+e.path+' did not have a know transform type');

        e.action = 'ignored';
        e.message = 'unknown transform type'
        await indexer.remove(e.path);
        await postgres.updateStatus(e);
        return;
      }

      // set transform service used.
      e.tranformService = response.service;

      // under this condition, the acl may have been updated.  Remove item and any 
      // child items in elastic search.  We need to do it here so we can mark PG why we
      // did it.
      if( response.data.statusCode !== 200 ) {
        logger.info('Container '+e.path+' was publicly inaccessible ('+response.data.statusCode+') from LDP, removing from index. url='+response.data.request.url);

        e.action = 'ignored';
        e.message = 'inaccessible'
        await indexer.remove(e.path);
        await postgres.updateStatus(e);
        await this.removeInaccessableChildrenInEs(e);
        return;
      }

      jsonld = JSON.parse(response.data.body);

      // store gitsource if we have it
      if( !jsonld._ ) jsonld._ = {};
      e.gitsource = jsonld._.gitsource;
      
      // cleanup id path
      if( jsonld['@id'].match(/\/fcrepo\/rest\//) ) {
        jsonld['@id'] = jsonld['@id'].split('/fcrepo/rest')[1];
      }
     
      // if no esId, we don't add to elastic search
      if( !jsonld._.esId ) {
        logger.info('Container '+e.path+' is not part of an archival group or a binary container (no jsonld._.esId provided)');

        e.action = 'ignored';
        e.message = 'not a archival group or binary container type';
        await indexer.remove(e.path);
        await postgres.updateStatus(e);
        return;
      }

      // set some of the fcrepo event information
      jsonld._.fcrepoEvent = {
        id : e.event_id,
        timestamp : e.event_timestamp,
        updateType : e.update_types
      }

      let result = await indexer.update(e.path, jsonld);

      e.action = 'updated';
      e.response = JSON.stringify(result.response);
      await postgres.updateStatus(e);
    } catch(error) {
      logger.error('Failed to update: '+e.path, error);
      e.action = 'error';
      e.message = error.message+'\n'+error.stack;
      await postgres.updateStatus(e);
    }
  }

  /**
   * @method isDotPath
   * @description given a path string from getPath, does any section of the path start
   * with a .
   * 
   * @param {String} path
   * 
   * @returns {Boolean}
   */
  isDotPath(path) {
    if( path.match(/^http/) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    
    path = path.split('/');
    for( var i = 0; i < path.length; i++ ) {
      if( path[i].match(/^\./) ) {
        return path[i];
      }
    }

    return null;
  }

  /**
   * @method getTransformedContainer
   * @description get a es object for container at specified path. 
   * 
   * @param {String} path fcrepo url
   * @param {Array} types JSON-LD @type array 
   * 
   * @returns {Promise}
   */
  async getTransformedContainer(path='', types=[], jwt) {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }

    let svc = '';
    if( indexer.isCollection(path) ) svc = config.essync.transformServices.collection;
    else if( indexer.isRecord(path) ) svc = config.essync.transformServices.record;
    else if( indexer.isApplication(path) ) svc = config.essync.transformServices.application;

    // we don't have a frame service for this
    if( !svc ) return null;

    var response = await api.get({
      host : config.gateway.host,
      path : path+`/svc:${svc}`
    });

    response.service = config.server.url+config.fcrepo.root+path+`/svc:${svc}`;
    return response;
  }

  /**
   * @method removeInaccessableChildrenInEs
   * @description for use when a parent path becomes inaccessible.  Remove all children nodes
   * from elastic search
   * 
   * @param {Object} e fcrepo update event 
   */
  async removeInaccessableChildrenInEs(e) {
    let path = e.path;
    if( path.match(/\/fcr:.+$/) ) {
      path = path.replace(/\/fcr:.+$/, '');
    }

    // if something like /fcr:acl was updated, make sure the container is updated
    if( path !== e.path ) {
      logger.info('Container '+e.path+' was publicly inaccessible from LDP, removing '+path+' from index.');

      e.action = 'ignored';
      e.message = e.path+' inaccessible'
      await indexer.remove(path);
  
      let fakeEvent = Object.assign({}, e);
      e.path = path;
      await postgres.updateStatus(fakeEvent);
    }
    

    // ask elastic search for all child paths
    let children = await records.getChildren(path);

    for( let child of children ) {
      for( let node of child.node ) {
        // make sure we are only remove paths that container parent
        if( !node['@id'] ) continue;
        if( !node['@id'].startsWith(path) ) continue;

        logger.info('Container '+path+' was publicly inaccessible from LDP, removing child '+node['@id']+' from index.');

        e.action = 'ignored';
        e.message = 'parent '+path+' inaccessible'
        await indexer.remove(node['@id']);
    
        let fakeEvent = Object.assign({}, e);
        e.path = node['@id'];
        await postgres.updateStatus(fakeEvent);
      }
    }
  }

}

module.exports = new EsSync();