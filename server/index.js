global.LOGGER_NAME = 'fin-server';

const express = require('express');
const {logger, jwt, config} = require('@ucd-lib/fin-node-utils');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const api = require('@ucd-lib/fin-node-api');

// used for JWT
const SERVER_USERNAME = 'fin-server';

// global catch alls for errors
process.on('uncaughtException', (e) => logger.fatal(e));
process.on('unhandledRejection', (e) => logger.fatal(e));


// wire up fin api for server
api.setConfig({
  host: config.fcrepo.host,
  basePath : config.fcrepo.root,
  jwt : jwt.create(SERVER_USERNAME, true)
});

// models like the service model and auth model require access
// to fcrepo, init these models here
async function initFromFcRepo() {
  await require('./models/services').init();
  await require('./models/auth').init();
}

logger.info('waiting for fcrepo connection');
require('./lib/startupCheck')(() => {
  logger.info('fcrepo connection established');

  // create express instance
  const app = express();
  // Set up an Express session, which is required for CASAuthentication. 
  // const RedisStore = require('connect-redis')(session); 
  // app.use(session({
  //   name : 'fin-sid',
  //   store: new RedisStore({
  //     host : 'redis'
  //   }),
  //   cookie : {
  //     maxAge          : config.server.cookieMaxAge,
  //   },
  //   secret            : config.server.cookieSecret,
  //   resave            : false,
  //   saveUninitialized : true
  // }));
  app.use(cookieParser(config.server.cookieSecret)); 

  // setup simple http logging
  app.use((req, res, next) => {
    let userAgent = req.get('User-Agent') || 'no-user-agent';
    let url = req.originalUrl || req.url;

    // help debug hanging requests
    logger.debug(`request: ${req.method} ${req.protocol}/${req.httpVersion} ${url} ${userAgent}`);

    res.on('finish',() => {
      let fcrepoProxyTime = req.fcrepoProxyTime ? 'fcrepo:'+req.fcrepoProxyTime+'ms' : '';
      logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${url} ${userAgent}, ${fcrepoProxyTime}`);
    });
    next();
  });

  // rotate jwt token every six hours
  setInterval(() => {
    api.setConfig({jwt: jwt.create(SERVER_USERNAME, true)})
  }, 6*60*60*1000);

  /**
   * Wire up main proxy
   */
  const proxy = require('./models/proxy');
  proxy.bind(app);

  /**
   * Load data from fcrepo
   */
  initFromFcRepo();

  /**
   * Register Auth Controller
   * 
   * IMPORTANT: Body parsers will mess up proxy, ALWAYS register them after the proxy
   */

  // parse application/x-www-form-urlencoded req body
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json req body
  app.use(bodyParser.json());
  // parsetext/plain req body, default
  app.use(bodyParser.text({type: (req) => true}));
  // register auth controller
  app.use('/auth', require('./controllers/auth'));
  app.use('/fin', require('./controllers/fin'));



  app.listen(3001, () => {
    logger.info('server ready on port 3001');
  });

});