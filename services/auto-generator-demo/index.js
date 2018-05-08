global.LOGGER_NAME = 'auto-generator-demo';

const {config, logger} = require('@ucd-lib/fin-node-utils');
const AutoGenerator = require('@ucd-lib/fin-node-utils/AutoGenerator');
const api = require('@ucd-lib/fin-node-api');
const fcrepoPathUtils = require('@ucd-lib/fin-node-api/lib/utils/path');
const clone = require('clone');

const COUNTER = 'http://library.ucdavis.edu/fin-server#modifiedCounter';

class AutoGeneratorDemoService extends AutoGenerator {

  constructor() {
    super('Auto', {
      types : ['http://schema.org/Collection']
    });

    api.setConfig({
      host : config.fcrepo.host
    });
  }

  /**
   * @method onContainerCreated
   * @description handle container creation event
   * 
   * @param {Object} msg webhook message
   */
  async onContainerCreated(msg) {
    api.setConfig({jwt: this.token});

    let response = await api.postEnsureSlug({
      path : this.getPath(msg),
      headers : {
        'Content-Type' : api.RDF_FORMATS.TURTLE
      },
      slug : 'counter',
      content : `<> a <${this.AUTO_GENERATED_CONTAINER_TYPE}>;
  <${COUNTER}> "0" .`,
    });

    if( response.error ) {
      return logger.error(response.error.message);
    }

    logger.info('Initialized counter container: ',  this.getPath(msg));
  }

  /**
   * @method onContainerModified
   * @description handle container modified event
   * 
   * @param {String} path fcrepo container path
   */
  async onContainerModified(msg) {
    api.setConfig({jwt: this.token});

    // grab the current counter
    let response = await api.get({
      path: fcrepoPathUtils.joinUrlPath(this.getPath(msg), 'counter'),
      headers : {Accept : api.RDF_FORMATS.JSON_LD}
    });
    if( response.error ) {
      return logger.error(response.error.message);
    }
    if( !response.checkStatus(200) ) {
      return logger.error('Failed to update counter');
    }

    let jsonLd = JSON.parse(response.last.body)[0];
    let count = parseInt(jsonLd[COUNTER][0]['@value']);

    let orgJsonLd = clone(jsonLd);
    jsonLd[COUNTER][0]['@value'] = (count+1)+'';

    let orgTtl = await api.transform.jsonldToTurtle(orgJsonLd);
    let newTtl = await api.transform.jsonldToTurtle(jsonLd);
    let sparql = await api.transform.diffToSparql(orgTtl, newTtl);

    response.appendResponse(await api.patch({
      path: fcrepoPathUtils.joinUrlPath(this.getPath(msg), 'counter'),
      content : sparql
    }));
    if( response.error ) {
      return logger.error(response.error.message);
    }

    logger.info('Updated counter: ',  this.getPath(msg), count+1);
  }
}

new AutoGeneratorDemoService();