const recordTransform = require('./record-transform');

const DATASET = 'http://schema.org/Dataset';

module.exports = (jsonld, host='https://digital.ucdavis.edu') => {
  jsonld = recordTransform(jsonld);

  let types = jsonld['@type'];
  if( types && types.indexOf(DATASET) === -1 ) {
    types.push(DATASET);
  }

  if( jsonld.hasPart ) delete jsonld.hasPart;

  // TODO
  // jsonld.genre = '';

  jsonld.url = host+jsonld['@id'];

  jsonld.provider = {
    '@type': 'Organization',
    email: 'library@ucdavis.edu',
    url: host,
    name: 'University of California, Davis, Library',
    description : 'UC Davis Library, Digital Collections',
    image : host+'/images/ucd-lib-logo-rgb.png'
  }

  if( !jsonld.publisher ) {
    jsonld.publisher = {
      '@type': 'Organization',
      name: 'University of California, Davis, Library',
      description: 'UC Davis Library, Digital Collections',
      image : host+'/images/ucd-lib-logo-rgb.png'
    }
  }

  jsonld.includedInDataCatalog = {
    '@type': 'DataCatalog',
    name: 'UC Davis Library, Digital Collections'
  }

  jsonld.distribution =  {
    '@type': 'DataDownload',
    'name': jsonld['@id'].replace(/\/collection\//, ''),
    'contentUrl': host+'/fcrepo/rest'+jsonld['@id'],
    'encodingFormat': 'text/html'
  }

  if( jsonld.creator ) delete jsonld.creator;

  return jsonld;
}

