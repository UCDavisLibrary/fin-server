const api = require('../../..');
const fs = require('fs');
const Logger = require('../lib/logger');
const location = require('../lib/location');
const jwt = require('jsonwebtoken');

class ServiceCli {

  init(vorpal) {
    vorpal
      .command('service info <id>')
      .description('Show info for service')
      .action(args => this.show(args));

    vorpal
      .command('service list')
      .description('List all services for server')
      .option('-v --verbose', 'show info for each service')
      .action(args => this.list(args));

    vorpal
      .command('service create <id> <type>')
      .option('-t --title <title>', 'Nice title for service')
      .option('-d --description <description>', 'Description of service')
      .option('-u --url-template <template>', 'url template (ProxyService and ExternalService). '+
              'ProxyService ex: http://my-service.com{{fcPath}}?extPath={{svcPath}},'+
              'ExternalService ex: http://my-service.com?url={{fcUrl}}?token={{token}}')
      .option('-U --url <url>', 'url of service (AuthenticationService, WebhookService and ClientService)')
      .option('-f --frame <frame>', 'frame definition (FrameService Only).  Can be JSON of path to json file.')
      .option('-r --transform <transform>', 'transform javascript (TransformService Only).  Must be path to js file.')
      .option('-s --supported-type <url>', 'Supported ldp type for this service.  Currently needs to be of: http://www.w3.org/ns/ldp#')
      .description('Create a service.  Type can be [ProxyService|FrameService|WebhookService|ExternalSerivce|ExternalService|ClientService]')
      .action(args => this.create(args));

    vorpal
      .command('service delete <id>')
      .description('Delete a service')
      .action(args => this.remove(args));

    vorpal
      .command('service signature set <id> <secret>')
      .description('Create a custom service signature with given secret')
      .action(args => this.setSecret(args));

    vorpal
      .command('service signature delete <id>')
      .description('Delete a custom service signature')
      .action(args => this.deleteSecret(args));

    vorpal
      .command('service signature verify <id> [secret]')
      .description('verify a custom service signature')
      .action(args => this.verifySecret(args));
  }

  async show(args) {
    let response = await api.service.get({id: args.id});
    if( response.error ) {
      return Logger.log(response.error.message);
    }

    this._print(response.data);
    Logger.log();
  }

  async list(args) {
    let response = await api.service.list();
    if( response.error ) {
      return Logger.log(response.error.message);
    }

    let services = response.data;

    if( args.options.verbose ) {
      services.forEach(service => this._print(service));
      Logger.log();
    } else {
      services.forEach(service => Logger.log(service.id));
    }
  }

  async create(args) {
    let options = {
      id : args.id,
      title : args.id,
      description : '',
      type : args.type
    }

    if( args.options.title ) options.title = args.options.title;
    if( args.options.description ) options.description = args.options.description;
    if( args.options.url ) options.url = args.options.url;
    if( args.options['url-template'] ) options.urlTemplate = args.options['url-template'];
    if( args.options['supported-type'] ) options.supportedType = args.options['supported-type'];

    if( args.options.frame ) {
      let frame = args.options.frame.trim();
      if( frame.match(/^({|\[)/) ) {
        options.frame = frame;
      } else {
        options.frame = fs.readFileSync(frame, 'utf-8');
      }
      options.frame = JSON.parse(options.frame);
    }

    if( args.options.transform ) {
      options.transform = fs.readFileSync(args.options.transform, 'utf-8');
    }

    let response = await api.service.create(options);
    if( response.error ) {
      return Logger.log(response.error.message);
    }

    Logger.log(response.last.statusCode, response.last.body);
  }

  async remove(args) {
    let dir = api.service.ROOT + '/' + args.id;
    let response = await api.delete({
      path: dir,
      permanent : true
    });

    Logger.log(response.last.statusCode, response.last.body);
  }

  async setSecret(args) {
    let response = await api.service.setSecret({
      id: args.id,
      secret : args.secret
    });

    Logger.log(response.last.statusCode, response.last.body);
  }

  async deleteSecret(args) {
    let response = await api.service.deleteSecret({
      id: args.id
    });

    Logger.log(response.last.statusCode, response.last.body);
  }

  async verifySecret(args) {
    let response = await api.service.verifySecret({
      id: args.id
    });

    let signature = response.last.headers['x-fin-service-signature'];

    if( args.secret ) {
      try {
        jwt.verify(signature, args.secret);
        Logger.log('Verified');
      } catch(e) {
        Logger.log('Invalid: '+e.message);
      }
      Logger.log();
    }

    let payload = jwt.decode(signature);
    Logger.log('Signature: '+signature);
    for( let key in payload ) {
      Logger.log(`${key}: ${payload[key]}`);
    }
  }

  _print(info) {
    Logger.log('\n== Service: '+info.id+' ==');
    if( info.title ) Logger.log('Title: '+info.title);
    if( info.description ) Logger.log('Description: '+info.description);
    if( info.type ) Logger.log('Type: '+info.type);
    if( info.supportedTypes.length ) Logger.log('Supported Types: '+info.supportedTypes.join(', '));
    if( info.urlTemplate ) Logger.log('URL Template: '+info.urlTemplate);
    if( info.url ) Logger.log('URL: '+info.url);
    if( info.frame ) Logger.log('Frame: '+JSON.stringify(JSON.parse(info.frame), '  ', '  '));
  }



}

module.exports = new ServiceCli();