const MessageServer = require('ucdlib-dams-utils/MessageServer');
const config = require('ucdlib-dams-utils/config');
const logger = require('ucdlib-dams-utils/logger')('essync');
const elasticsearch = require('elasticsearch');
const jwt = require('ucdlib-dams-utils/jwt');
const request = require('request');
const {URL} = require('url');
const utils = require('./utils');

process.on('unhandledRejection', err => logger.error(err));

class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elastic Search Sync');

    this.esClient = new elasticsearch.Client({
      host: config.elasticsearch.host,
      log: config.elasticsearch.log
    });
  }

  async isDataFile(path) {
    var {response, body} = await this._request({
      type : 'HEAD',
      uri : path
    });

    if( response.headers['content-disposition'] ) {
      return true;
    }
    return false;
  }

  async getCompactJson(path) {
    var {response, body} = await this._request({
      type : 'GET',
      uri: path,
      headers : {
        Accept: 'application/ld+json; profile="http://www.w3.org/ns/json-ld#compacted"'
      }
    });

    try {
      body = JSON.parse(body);
      // remove rdf context, fix urls
      utils.cleanupData(body);

      return body;
    } catch(e) {
      logger.log('Invalid response from server', e);
    }

    return null;
  }

  async getData(path) {
    let isData = await this.isDataFile(path);
    if( isData ) path += '/fcr:metadata';
    return await this.getCompactJson(path);
  }

  async handleMessage(msg) {

    if( msg.type !== 'fcrepo-event' ) return;

    let eventTypes = msg.payload
                          .headers['org.fcrepo.jms.eventType']
                          .split(',')
                          .map(type => type.trim().replace(/.*#/, ''));

    let path = msg.payload.headers['org.fcrepo.jms.identifier'] || '/';

    if( eventTypes.indexOf('ResourceModification') > -1 ||
        eventTypes.indexOf('ResourceCreation') > -1  ) {

      this.update(path);

    } else if( eventTypes.indexOf('ResourceDeletion') > -1 ) {
      this.remove(path);
    }
  }

  async update(path) {
    let jsonld = await this.getData(path);
    
    logger.info(`Updating: ${path}`);
    if( !jsonld ) return;

    this.esClient.index({
      index : config.elasticsearch.alias,
      type: config.elasticsearch.recordSchemaType,
      id : config.server.url+config.fcrepo.root+path,
      body: jsonld
    });
  }

  async remove(path) {
    logger.info(`Removing: ${path}`);
    
    this.esClient.delete({
      index : config.elasticsearch.alias,
      type: config.elasticsearch.recordSchemaType,
      id: config.server.url+config.fcrepo.root+path
    });
  }

}

new EsSyncMessageServer();