const api = require('@ucd-lib/fin-node-api');
const fs = require('fs');
const Logger = require('../lib/logger');
const location = require('../lib/location');
const jwt = require('jsonwebtoken');
const request = require('request');

const COLLECTION = 'http://schema.org/Collection';
const CREATIVE_WORK = 'http://schema.org/CreativeWork';
const MEDIA_OBJECT = 'http://schema.org/MediaObject';
const SHORT_COLLECTION = 'schema:Collection';
const SHORT_CREATIVE_WORK = 'schema:CreativeWork';
const SHORT_MEDIA_OBJECT = 'schema:MediaObject';

class SearchCli {

  init(vorpal) {
    this.vorpal = vorpal;
    vorpal
      .command('search verify <collection>')
      .option('-i --ignored', 'Print ignored urls')
      .description('Verify all records in collection exist in search')
      .action(args => this.verify(args));
  }

  async verify(args) {
    let collection = args.collection;

    let config = api.getConfig();
    let rootUrl = config.host+config.basePath;

    let stats = {
      collection,
      rootUrl,
      start : Date.now(),
      crawled : 0,
      errors : [],
      warnings : [],
      ignored : [],
      records : [],
      valid : 0
    }

    await this._crawl(rootUrl+'/collection/'+collection, stats);

    for( var i = 0; i < stats.records.length; i++ ) {
      if( await this._isInEs(stats.records[i], stats.records.length, i) ) {
        stats.valid++;
      } else {
        stats.errors.push({
          path: this._cleanPath(stats.records[i], stats.collection),
          msg: 'Does not exist in search'
        });
      }
    }

    Logger.redraw('');
    Logger.log('==== Valid: '+stats.valid);
    Logger.log('\n==== Errors: '+stats.errors.length);
    stats.errors.forEach(e => Logger.log(e.path+': '+e.msg));
    Logger.log('\n==== Warnings: '+stats.errors.length);
    stats.warnings.forEach(e => Logger.log(e.path+': '+e.msg));
    
    if( args.options.ignored ) {
      Logger.log('\n==== Ignored: '+stats.ignored.length);
      stats.ignored.forEach(e => Logger.log(e.path+': '+e.msg));
    }
  }

  async _isInEs(record, total, index) {
    let p = Math.round((index/total) * 100);
    Logger.redraw(`%${p} Verifing: ${record}`);

    let config = api.getConfig();
    let url = config.host+'/api/records'+record

    let {response} = await this._request({
      url,
      method: 'GET'
    });


    if( response.statusCode !== 200 ) return false;
    let body = JSON.parse(response.body);

    return (body.id === record);
  }

  async _crawl(url, stats) {
    stats.crawled++;
    let speed = Math.floor((Date.now() - stats.start) / stats.crawled);

    Logger.redraw(`Crawling ${stats.crawled} ${url}
Avg speed: ${speed}ms/url
`);

    // we just want the path, no host or fcBasePath
    url = url.split(stats.rootUrl)[1];

    // ignore dot paths
    if( url.match(/\/\./) ) {
      stats.ignored.push({
        path : url,
        msg : 'dot path'
      });
      return;
    }

    // make a head request for access and container type info
    let response = await api.head({path : url});
    
    // make a head request for access and container type info
    if( !response.checkStatus(200) ) {
      stats.warnings.push({
        path: url, 
        msg: 'HEAD request sent status code: '+response.last.statusCode
      });
      return;
    }

    // if this is binary container, append /fcr:metadata to path
    if( !api.isRdfContainer(response) ) {
      url = url + '/fcr:metadata'
    }

    // grab the current container as json-ld because we need full type 
    // information in order to know which frame service to access.  We
    // also need the contains information to continue the crawl
    response = await api.get({
      path: url,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });
    if( !response.checkStatus(200) ) {
      stats.warnings.push({
        path: this._cleanPath(url, stats.collection), 
        msg: 'GET request sent status code: '+(response.last || {}).statusCode
      });
      return;
    }

    let jsonld;
    try {
      response = response.last;
      jsonld = JSON.parse(response.body)[0];
    } catch(e) {
      stats.errors.push({path: this._cleanPath(url, stats.collection), msg: e.message});
    }

    if( !this._isRecord(jsonld['@type']) ) {
      stats.ignored.push({
        path : this._cleanPath(url, stats.collection),
        msg : 'not of type record'
      });
    } else {
      stats.records.push(url.replace(/\/fcr:metadata/, ''));
    }
    
    // check if this container has children
    let contains = jsonld['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return; // no more children, done crawling this branch

    // just make sure this is an array...
    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    // recursively crawl the children
    for( var i = 0; i < contains.length; i++ ) {
      await this._crawl(contains[i]['@id'], stats);
    }
  }

  _isRecord(types = []) {
    return (
      types.indexOf(CREATIVE_WORK) > -1 || 
      types.indexOf(MEDIA_OBJECT) > -1 ||
      types.indexOf(SHORT_CREATIVE_WORK) > -1 || 
      types.indexOf(SHORT_MEDIA_OBJECT) > -1
    );
  }

  _request(options) {
    return new Promise((resolve, reject) => {
      request(options,  (error, response, body) => {
        if( error ) return reject(error);
        resolve({response, body});
      });
    });
  }

  _cleanPath(url, collection) {
    return url
      .replace(/\/fcr:metadata/, '')
      .replace('/collection/'+collection, '');
  }

}

module.exports = new SearchCli();