const express = require('express');
const path = require('path');
const fs = require('fs');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../config');
const fetch = require('node-fetch');
const authUtils = require('../lib/auth');

const {seo, records, collections} = require('@ucd-lib/fin-ucd-lib-node-utils');

const transform = seo.recordTransform;
const collectionTransform = seo.collectionTransform;

const loaderPath = path.join(__dirname, '..', 'client', config.server.assets, 'loader', 'loader.js');
const loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
const bundle = `
  <script>
    var CORK_LOADER_VERSIONS = {
      loader : '${config.client.versions.loader}',
      bundle : '${config.client.versions.bundle}'
    }
  </script>
  <script>${loaderSrc}</script>`;

module.exports = (app) => {
  let assetsDir = path.join(__dirname, '..', 'client', config.server.assets);

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app: app,
    htmlFile : path.join(assetsDir, 'index.html'),
    isRoot : true,
    appRoutes : config.server.appRoutes,
    getConfig : async (req, res) => {
      let user = authUtils.getUserFromRequest(req);

      if( user ) {
        let result = {
          loggedIn : true,
          username : user.username
        };
        if( user.admin ) result.admin = true;
        user = result;
      } else {
        user = {loggedIn: false};
      }

      let fcAppConfig = await (await fetch(config.api.host+'/api/applications/'+config.server.appName)).json();

      return {
        collections : await collections.overview(),
        user : user,
        appRoutes : config.server.appRoutes,
        recordCount: (await records.rootCount()).count,
        env : {
          BUILD_NUM: process.env.BUILD_NUM || '',
          BUILD_TIME: process.env.BUILD_TIME || '',
          APP_VERSION: process.env.APP_VERSION || '',
          UCD_LIB_SERVER_REPO_HASH: process.env.UCD_LIB_SERVER_REPO_HASH || '',
          UCD_LIB_SERVER_REPO_TAG: process.env.UCD_LIB_SERVER_REPO_TAG || '',
          CORE_SERVER_REPO_HASH: process.env.CORE_SERVER_REPO_HASH || '',
          CORE_SERVER_REPO_TAG: process.env.CORE_SERVER_REPO_TAG || ''
        },
        fcAppConfig
      };
    },
    template : async (req, res) => {
      let jsonld = '';

      let isRecord = false;
      let isCollection = false;

      let parts = req.originalUrl.split('/').filter(p => p ? true : false);
      if( parts[0] === 'collection' ) {
        if( parts.length === 2 ) isCollection = '/'+parts.join('/');
        else isRecord = true;
      } else if( parts[0] === 'search' ) {
        isCollection = isSearchCollectionReq(req);
      }

      if( !isRecord && !isCollection ) {
        return {
          jsonld, bundle,
          title : config.server.title,
          description : '',
          keywords : ''
        };
      }

      try {
        if( isCollection ) {
          let collection = await collections.get(isCollection);
          collection = collectionTransform(collection._source);
          jsonld = JSON.stringify(collection, '  ', '  ');
    
          let keywords = [];
          if( collection.keywords ) {
            if( !Array.isArray(collection.keywords) ) keywords = [collection.keywords];
            else keywords = collection.keywords;
          }
    
          return {
            jsonld, bundle,
            title : collection.name + ' - '+ config.server.title,
            description : collection.description || '',
            keywords : keywords.join(', ')
          }

        } else {

          let id = req.originalUrl;
          let record = await records.esGet(id);
          record = transform(record._source);
          jsonld = JSON.stringify(record, '  ', '  ');
    
          let keywords = [];
          if( record.keywords ) {
            if( !Array.isArray(record.keywords) ) keywords = [record.keywords];
            else keywords = record.keywords;
          }

          return {
            jsonld, bundle,
            title : (record.name || record.title) + ' - '+ config.server.title,
            description : record.description || '',
            keywords : keywords.join(', ')
          }

        }
      } catch(e) {
        console.log(e);
        return {
          jsonld, bundle,
          title : 'Server Error',
          description : 'Invalid URL: '+req.originalUrl,
          keywords : ''
        }
      }
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(assetsDir, {
    immutable: true,
    maxAge: '1y'
  }));
}

function isSearchCollectionReq(req) {
  if( !req.originalUrl.match(/^\/search/) ) {
    return false;
  } 

  // IMPORTANT note this is the request 
  // /search//%5B%5B"isPartOf.%40id"%2C"or"%2C"%2Fcollection%2Fexample_1-pets"%5D%5D//10/
  // but express returns this
  // /search/%5B%5B"isPartOf.%40id"%2C"or"%2C"%2Fcollection%2Fexample_1-pets"%5D%5D/10/
  // but if there is test in the query it would look like this
  // /search/test/%5B%5B"isPartOf.%40id"%2C"or"%2C"%2Fcollection%2Fexample_1-pets"%5D%5D//10/
  // so make sure to check type on JSON parse
  let [empty, path, filter] = req.originalUrl.split('/');
  if( !filter ) return false;

  try {
    filter = JSON.parse(decodeURIComponent(filter));
  } catch(e) {
    return false;
  }

  if( !Array.isArray(filter) ) return false;
  if( filter.length === 0 ) return false;
  filter = filter[0];

  if( filter.length < 3 ) return false;

  if( filter[0] === 'isPartOf.@id' && 
      filter[1] === 'or' &&
      filter[2].match(/^\/collection\//) ) {
    return filter[2];
  }

  return false;
}