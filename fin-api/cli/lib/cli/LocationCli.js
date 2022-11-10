const Logger = require('../lib/logger');
const location = require('../lib/location');
const api = require('../../..');

const MEMBERSHIP_RESOURCE = 'http://www.w3.org/ns/ldp#membershipResource';
const HAS_MEMBER_RELATION = 'http://www.w3.org/ns/ldp#hasMemberRelation';
const IS_MEMBER_OF_RELATION = 'http://www.w3.org/ns/ldp#isMemberOfRelation';
const SCHEMA_ORG_HAS_PART = 'http://schema.org/hasPart';
const SCHEMA_ORG_IS_PART_OF = 'http://schema.org/isPartOf';
const SCHEMA_ORG_ASSOCIATED_MEDIA = 'http://schema.org/associatedMedia';
const SCHEMA_ORG_ENCODES_CREATIVE_WORK = 'http://schema.org/encodesCreativeWork';
const DIRECT_CONTAINER = 'http://www.w3.org/ns/ldp#DirectContainer';
const TITLE = 'http://purl.org/dc/elements/1.1/title';
const DESCRIPTION = 'http://purl.org/dc/elements/1.1/description';

class LocationCli {

  init(vorpal) {
    this.vorpal = vorpal;

    var self = this;
    vorpal.command('pwd').action(this.pwd.bind(this));
    vorpal.command('ls [fedora_path]').action(this.ls.bind(this))
          

    vorpal.command('cd <fedora_path>')
          .action(function(args){ 
            return self.cd(args, this)
          })
          .autocomplete({
            data: this.cdAutoComplete.bind(this)
          });
    
    vorpal
      .command('mkdir <id> [path]')
      .option('-t --title <title>', 'Nice title for directory')
      .option('-d --description <description>', 'Description of directory')
      .option('-D --direct', 'Directory is a direct container.  membershipResource defaults to parent unless provided')
      .option('-m --membership-resource <membership-resource>', 'path to container.  Only required if not parent')
      .option('-T --type <type>', 'shortcut relation type if direct container.  either [part|media]')
      .option('-h --has-member-relation <has-member-relation>', 'property id for hasMemberRelation')
      .option('-i --is-member-of-relation <is-member-of-relation>', 'property id for isMemberOfRelation')
      .description('Make directory (non-binary container)')
      .action(args => this.mkdir(args));

    vorpal
      .command('rm <path>')
      .option('-l --leave-tombstone', 'Leave the /fcr:tombstone resource')
      .description('Remove a container and children (like rm -rf)')
      .action(args => this.rm(args));
  }

  async pwd(args) {
    Logger.log(location.getCwd());
  }

  async ls(args) {
    var response = await location.ls(args);

    if( response.error ) {
      return Logger.log(result.error.message);
    }

    if( response.data.length !== 0 ) {
      Logger.log(response.data.join(' '));
    }
  }

  async cdAutoComplete(input) {
    var response = await location.ls({});
    var matches = [];

    var re = new RegExp('^'+input);
    response.data.forEach(dir => {
      if( dir.match(re) ) matches.push(dir);
    });

    return matches;
  }

  async cd(args, command) {
    var response = await location.cd(args);
    if( response.error ) {
      Logger.error(response.error.message);
    }
  }

  async mkdir(args) {
    let parent = location.makeAbsoluteFcPath(args.path || '.');

    let jsonld = {
      '@id' : ''
    };
    
    // some directory metadata
    if( args.options.title ) {
      jsonld[TITLE] = {'@value': args.options.title}
    }
    if( args.options.description ) {
      jsonld[DESCRIPTION] = {'@value': args.options.description}
    }

    // if direct container
    if( args.options.direct ) {
      jsonld['@type'] = {'@id': DIRECT_CONTAINER}

      if( args.options.type === 'part' ) {
        jsonld[HAS_MEMBER_RELATION] = {'@id' : SCHEMA_ORG_HAS_PART};
        jsonld[IS_MEMBER_OF_RELATION] = {'@id' : SCHEMA_ORG_IS_PART_OF};
      } else if( args.options.type === 'media' ) {
        jsonld[HAS_MEMBER_RELATION] = {'@id' : SCHEMA_ORG_ASSOCIATED_MEDIA};
        jsonld[IS_MEMBER_OF_RELATION] = {'@id' : SCHEMA_ORG_ENCODES_CREATIVE_WORK};
      } else if( args.options['has-member-relation'] && args.options.isMemberOfRelation ) { 
        jsonld[HAS_MEMBER_RELATION] = {'@id' : args.options['has-member-relation']};
        jsonld[IS_MEMBER_OF_RELATION] = {'@id' : args.options['is-member-of-relation']};
      }

      jsonld[MEMBERSHIP_RESOURCE] = {
        '@id': api.getConfig().fcBasePath + location.makeAbsoluteFcPath(args.options['membership-resource'] || parent)
      }
    }

    let response = await api.postEnsureSlug({
      path : parent,
      slug : args.id,
      headers : {'Content-Type': api.RDF_FORMATS.JSON_LD},
      content : JSON.stringify(jsonld)
    });

    if( response.error ) {
      console.log(response.error.message);
    } else {
      console.log(response.last.statusCode, response.last.body);
    }    
  }

  async rm(args) {
    let response = await api.delete({
      path : location.makeAbsoluteFcPath(args.path || '.'),
      permanent : args.options['leave-tombstone'] ? false : true
    });
    console.log(response.last.statusCode, response.last.body);
  }
}

module.exports = new LocationCli();