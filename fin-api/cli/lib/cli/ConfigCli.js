const config = require('../lib/config');
const location = require('../lib/location');
const inquirer = require('inquirer');
const Logger = require('../lib/logger');
const auth = require('../lib/auth');
const cas = require('../lib/cas');
const {URL} = require('url');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const pkg = require('../../../package.json');

class ConfigCli {

  async init(vorpal, argv) {
    this.vorpal = vorpal;



    vorpal.command('jwt encode <secret> <issuer> <username>')
      .option('-a --admin', 'set the admin flag for the token')
      .option('-s --save', 'save the token to config')
      .option('-t --ttl <ttl>', 'set time to live (seconds).  Defaults to 14 day')
      .description('Create and optionally save a jwt token.  secret can point to a text file')
      .action((args) => this.jwtEncode(args));

    vorpal.command('jwt decode <token>')
      .description('Decode a display a jwt token, returns JSON payload')
      .action((args) => this.jwtDecode(args));

      vorpal.command('jwt verify <secret> <issuer> <token>')
      .description('Verify token is a valid jwt token for fin server')
      .action((args) => this.jwtVerify(args));

    if( config.cwd ) {
      location.setCwd(config.cwd);
    }

  }

  getConfigDocs() {
    return `
                    ███████╗██╗███╗   ██╗     ██████╗██╗     ██╗
                    ██╔════╝██║████╗  ██║    ██╔════╝██║     ██║
                    █████╗  ██║██╔██╗ ██║    ██║     ██║     ██║
                    ██╔══╝  ██║██║╚██╗██║    ██║     ██║     ██║
                    ██║     ██║██║ ╚████║    ╚██████╗███████╗██║
                    ╚═╝     ╚═╝╚═╝  ╚═══╝     ╚═════╝╚══════╝╚═╝
                    v${pkg.version}

====================================== FIN CLI  ======================================

Welcome to the FIN CLI for interacting with the Fedora Repository backed FIN Server.  

- Project Code - 
https://github.com/UCDavisLibrary/fin-server

- CLI Setup - 
fin config set <attribute> <value>
where attributes and there values are stored in your home directory at ~/.fccli

- CLI Quick Start -
fin config set host [host url]
fin auth login
fin http get / -P hbsHB

- CLI Attributes -

attribute   : host
env         : FCREPO_HOST
example     : http://digital.ucdavis.edu
description : Host url for your fin instance

attribute   : fcBasePath
env         : FCREPO_REST_PATH
default     : /fcrepo/rest
description : Base url path to fcrepo rest api

attribute   : jwt
env         : FCREPO_JWT
description : json web token to use for http requests.  Used when the 'directAccess' 
              attribute is set to 'false'

attribute   : username
env         : FCREPO_USERNAME
default     : fedoraUser
description : when making a 'directAccess' request WITHOUT the 'superuser' flag set 
              to 'true', 'username' for basic HTTP authentication against fcrepo

attribute   : password
env         : FCREPO_PASSWORD
default     : fedoraUser
description : when making a 'directAccess' request WITHOUT the 'superuser' flag set 
              to 'true', 'password' for basic HTTP authentication against fcrepo

attribute   : adminUsername
env         : FCREPO_ADMIN_USERNAME
default     : fedoraAdmin
description : when making a 'directAccess' request WITH the 'superuser' flag set to 
              'true', 'username' for basic HTTP authentication against fcrepo

attribute   : adminUsername
env         : FCREPO_ADMIN_PASSWORD
default     : fedoraAdmin
description : when making a 'directAccess' request WITH the 'superuser' flag set to 
              'true', 'password' for basic HTTP authentication against fcrepo

attribute   : directAccess
env         : FCREPO_DIRECT_ACCESS
default     : false
description : Is the 'host' url attribute set to access fcrepo directly or hit the main fin
              gateway service?  If 'directAccess' is set to 'true' the cli will assume the 
              'host' attribute is directly accessing fcrepo and will use basic HTTP 
              authentication 'Authorization: Basic [username:password]' 
              If set 'directAccess' is set to 'false', jwt authentication 
              'Authorization: Bearer [jwt]' will be used.

attribute   : superuser
env         : FCREPO_SUPERUSER
default     : false
description : if the 'directAccess' flag is set to true, setting 'superuser' to true will
              use the adminUsername/adminPassword combo for basic HTTP authentication.  
              Otherwise the username/password combination will be used.
`
  }

  /**
   * Login User
   */
  async login(params) {
    if( params.options.headless ) {
      let authUrl = new URL(config.host+'/auth/cas/login');
      authUrl.searchParams.set('cliRedirectUrl', `${config.host}/auth/login-shell`);
      authUrl.searchParams.set('provideJwt', 'true');
      authUrl.searchParams.set('force', 'true');
      authUrl = authUrl.href;
      Logger.log();
      Logger.log('Visit this URL on any device to log in, then paste token below.');
      Logger.log(authUrl);
      Logger.log();

      let args = await inquirer.prompt([{
        type: 'text',
        name: 'token',
        message: 'Token: '
      }]);

      config.jwt = args.token;
      let payload = Buffer.from(config.jwt.split('.')[1], 'base64');
      config.username = JSON.parse(payload).username;

      this.display();
      
      return;
    }
    if( params.options['super-user'] ) {
      let args = await inquirer.prompt([{
        type: 'text',
        name: 'secret',
        message: 'Server Secret: '
      },{
        type: 'text',
        name: 'issuer',
        message: 'Server Secret Issuer: '
      }]);

      let payload = {username: params.options['super-user']};
      payload.admin = true;

      let token = jwt.sign(
        payload, 
        args.secret, 
        {
          issuer: args.issuer || '',
          expiresIn: (60 * 60 * 24 * 14)
        }
      );

      config.jwt = token;
      config.username = params.options['super-user'];

      this.display();
      return;
    }

    if( !params.options.local ) {
      await cas.login();
      
      await auth.getRefreshToken(config.jwt, {username: config.username});

      Logger.log(`Logged in as ${config.username}`);
      return;
    }
    
    return this.prompt([{
        type: 'password',
        name: 'password',
        message: 'password: '
    }]).then(async args => {
      var resp = await auth.loginPassword({
        username : params.username,
        password : args.password
      });

      await auth.getRefreshToken(config.jwt, {username: params.username});

      if( resp ) Logger.log(`Logged in as ${params.username}`);
      else Logger.log('Invalid username or password');
    });
  }

  async logout() {
    config.logout();
  }

  async setAttribute(args) {
    config[args.attribute] = args.value;
  }

  display(args, callback) {
    Logger.log(`
================ Current CLI Config =================

Host/Base Path: ${config.host}${config.basePath}
User: ${config.username ? config.username : 'Not logged in'}
Config File: ${config.optionsPath}
CWD: ${config.cwd}
`);
    if( callback ) callback();
  }

  async jwtEncode(args) {
    let payload = {username: args.username};
    if( args.options.admin ) payload.admin = true;

    let token = jwt.sign(
      payload, 
      this._getSecret(args), 
      {
        issuer: args.issuer || '',
        expiresIn: args.options.ttl || (60 * 60 * 24 * 14)
      }
    );

    if( args.options.save ) {
      config.jwt = token;
      config.username = args.username;
    }

    Logger.log(token);
  }

  async jwtVerify(args) {
    Logger.log();

    let issuer = args.issuer;
    let secret = this._getSecret(args);

    try {
      let token = jwt.verify(args.token, secret);
      if( token.iss !== issuer ) {
        Logger.log('Invalid JWT Token:', `Invalid issuer: ${token.iss}/${issuer}`);
      } else {
        Logger.log('Valid.');
      }

    } catch(e) {
      Logger.log('Invalid JWT Token:', e.message);
    }

    Logger.log();
  }

  async jwtDecode(args) {
    Logger.log(JSON.stringify(
      jwt.decode(args.token)
    , '  ', '  '));
  }

  _getSecret(args) {
    let secret = args.secret || args.options.secret;
    try {
      if( fs.existsSync(secret) ) {
        secret = fs.readFileSync(secret, 'utf-8');
      }
    } catch(e) {}
    return secret;
  }

}

module.exports = new ConfigCli();