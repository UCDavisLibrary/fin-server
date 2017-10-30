const express = require('express');
const path = require('path');
const fs = require('fs');

module.exports = (args) => {
  /**
   * Setup static asset dir
   */
  args.app.use(express.static(args.assetsDir));

  /**
   * Setup SPA app routes
   */
  args.appRoutes.forEach(route => {
    args.app.use(`/${route}*`, (req, res) => {
      res.set('Content-Type', 'text/html');
      res.send(fs.readFileSync(path.join(args.assetsDir, 'index.html')));
    });
  });
}