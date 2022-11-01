const fs = require('fs');
const path = require('path');
const api = require('../../..');

const DOT_FILE = '.fccli';
api.setConfig({userAgent: 'fin-cli'});

class Config {

  constructor() {
    this.data = {
      globalPrefix : {},
      autoSlug : false
    };

    this.cliOptions = {
      host : {
        alias : 'h',
        value : ''
      },
      basePath : {
        alias : 'b',
        value : ''
      },
      username : {
        alias : 'u',
        value : ''
      },
      password : {
        alias : 'p',
        value : ''
      },
      cwd : {
        alias : 'c',
        value : ''
      }
    }

    this.basePrefix = {
      acl:"http://www.w3.org/ns/auth/acl#",
      dc: "http://purl.org/dc/elements/1.1/",
      dct: "http://purl.org/dc/terms/",
      pcdm: "http://pcdm.org/models#",
      ebucore: "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",
      fast: "http://id.worldcat.org/fast/",
      fedora: "http://fedora.info/definitions/v4/repository#",
      foaf: "http://xmlns.com/foaf/0.1/",
      ldp: "http://www.w3.org/ns/ldp#",
      locname: "http://id.loc.gov/authorities/names/",
      rdfs: "http://www.w3.org/2000/01/rdf-schema#",
      webac: "http://fedora.info/definitions/v4/webac#"
    };

    this.load();
  }

  initCli(argv) {
    for( var key in this.cliOptions ) {
      if( argv[key] ) this.cliOptions[key].value = argv[key];
    }
  }

  set(values) {
    this.data = value;
    api.setConfig(values);
    this.save();
  }

  set host(value) {
    this.data.host = value.replace(/\/$/, '');
    api.setConfig({host: value});
    this.save();
  }
  get host() {
    return this.cliOptions.host.value || this.data.host;
  }

  set globalPrefix(value) {
    this.data.globalPrefix = value;
    this.save();
  }
  get globalPrefix() {
    return this.data.globalPrefix || Object.assign({}, this.basePrefix);
  }

  set basePath(value) {
    if( !value.match(/^\//) ) value = '/'+value;

    this.data.basePath = value;
    api.setConfig({fcBasePath: value});
    this.save();
  }
  get basePath() {
    return this.cliOptions.basePath.value || this.data.basePath || '/fcrepo/rest';
  }

  set autoSlug(value) {
    this.data.autoSlug = value;
    this.save();
  }
  get autoSlug() {
    return this.data.autoSlug;
  }

  set refreshToken(value) {
    this.data.refreshToken = value;
    api.setConfig({refreshToken: value});
    this.save();
  }
  get refreshToken() {
    return this.data.refreshToken;
  }

  set jwt(value) {
    this.data.jwt = value;
    api.setConfig({jwt: value});
    this.save();
  }
  get jwt() {
    return this.data.jwt;
  }

  set username(value) {
    this.data.username = value;
    api.setConfig({username: value});
    this.save();
  }
  get username() {
    return this.cliOptions.username.value || this.data.username;
  }

  set cwd(value) {
    this.data.cwd = value;
    api.setConfig({cwd: value});
    this.save();
  }

  get cwd() {
    return this.data.cwd || '/';
  }

  set password(value) {
    this.data.password = value;
    api.setConfig({password: value});
    this.save();
  }
  get password() {
    return this.cliOptions.password.value || this.data.password;
  }

  logout() {
    this.username = '';
    this.password = '';
    this.jwt = '';
    this.refreshToken = '';
  }

  setJwt(jwt) {
    this.username = '';
    this.password = '';
    this.jwt = args.token;
  }

  addPrefix(args) {
    this.data.globalPrefix[args.prefix] = args.url;
    this.save();
  }

  removePrefix(args) {
    var current = this.data.globalPrefix;
    if( current && current[args.prefix] ) {
      delete current[args.prefix];
      this.save();
      return true;
    } else {
      return false;
    }
  }

  load(optionsPath) {
    if( optionsPath ) {
      this.optionsPath = optionsPath;
    } else if( fs.existsSync(path.join(process.cwd(), DOT_FILE)) ) {
      this.optionsPath = path.join(process.cwd(), DOT_FILE);
    } else {
      this.optionsPath = path.join(getUserHome(), DOT_FILE);
      if( !fs.existsSync(this.optionsPath) ) {
        fs.writeFileSync(this.optionsPath, '{}');
      }
    }

    if( !fs.existsSync(this.optionsPath) ) {
      throw new Error('Invalid config file location: ', this.optionsPath);
    }

    this.data = JSON.parse(fs.readFileSync(this.optionsPath, 'utf-8'));

    if( process.env.FCREPO_HOST ) {
      this.data.host = process.env.FCREPO_HOST;
    }
    if( process.env.FCREPO_REST_PATH ) {
      this.data.fcBasePath = process.env.FCREPO_REST_PATH;
    }
    if( process.env.FCREPO_JWT ) {
      this.data.jwt = process.env.FCREPO_JWT;
    }
    if( process.env.FCREPO_USERNAME ) {
      this.data.username = process.env.FCREPO_USERNAME;
    }
    if( process.env.FCREPO_PASSWORD ) {
      this.data.password = process.env.FCREPO_PASSWORD;
    }
    if( process.env.FCREPO_ADMIN_USERNAME ) {
      this.data.adminUsername = process.env.FCREPO_ADMIN_USERNAME;
    }
    if( process.env.FCREPO_ADMIN_PASSWORD ) {
      this.data.adminPassword = process.env.FCREPO_ADMIN_PASSWORD;
    }
    if( process.env.FCREPO_JWT ) {
      this.data.password = process.env.FCREPO_JWT;
    }
    if( process.env.FCREPO_SUPERUSER ) {
      this.data.superuser = (process.env.FCREPO_SUPERUSER.toLowerCase().trim() === 'true')
    }
    if( process.env.FCREPO_DIRECT_ACCESS ) {
      this.data.superuser = (process.env.FCREPO_DIRECT_ACCESS.toLowerCase().trim() === 'true')
    }

    api.setConfig(this.data);
  }

  save() {
    fs.writeFileSync(this.optionsPath, JSON.stringify(this.data, '  ', '  '));
  }
}

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

module.exports = new Config();