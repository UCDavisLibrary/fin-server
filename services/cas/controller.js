const {logger, config} = require('@ucd-lib/fin-node-utils');
var CASAuthentication = require('cas-authentication');
Logger = logger();

let cas = new CASAuthentication({
  cas_url     : config.cas.url,
  service_url : config.server.url
});


function init(app) {

  // app.get('/_init', (req, res) => {
  //   let servicePath = req.query.servicePath;
  // });

  app.get('/login', (req, res) => {
    Logger.info('CAS Service: starting CAS redirection');

    req.query.returnTo = config.server.url + req.get('x-fin-original-path');
    cas.service_url = config.server.url + req.get('x-fin-service-path');

    cas.bounce(req, res, async () => {
      Logger.info('CAS Service: CAS redirection complete');

      let username = '';
      if( cas.session_name && req.session[cas.session_name] ) {
        username = req.session[cas.session_name];
      }

      if( username ) {
        Logger.info('CAS Service: CAS login success: '+username);
        res.set('X-FIN-AUTHORIZED-AGENT', username)
            .json({success: true, username: username});
      } else {
        Logger.info('CAS Service: CAS login failure');
        res.status(401).send();
      }
    });
  });
}



module.exports = init;