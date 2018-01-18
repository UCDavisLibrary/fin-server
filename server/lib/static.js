const express = require('express');
const path = require('path');
const fs = require('fs');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../config');
const authUtils = require('./auth');

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
        user = {loggedIn: false}
      }

      return {
        user : user,
        appRoutes : config.server.appRoutes
      }
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(assetsDir));
}