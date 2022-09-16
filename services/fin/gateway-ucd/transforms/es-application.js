const {config} = require('@ucd-lib/fin-node-utils');


module.exports = async function(path, graph, utils) {
  let item = {};
  let container = utils.get(path, graph);
  if( !container ) {
    throw new Error('unknown container: '+path);
  }
  

  utils.init(item, container, false);
  

  if( !utils.isType(container, 'http://fedora.info/definitions/v4/repository#Resource') ) {
    throw new Error('invalid type');
  }
  
  utils.ns({
    "fedora" : "http://fedora.info/definitions/v4/repository#",
    "fast": "http://id.worldcat.org/fast/",
    "lcna": "http://id.loc.gov/authorities/names/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "schema": "http://schema.org/",
    "ucdlib": "http://digital.ucdavis.edu/schema#",
    "premis" : "http://www.loc.gov/premis/rdf/v1#",
    "ebucore" : "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#"
  });

  await utils.add({
    attr : 'name',
    value : ['schema', 'name'],
    default : ''
  });

  await utils.add({
    attr : 'label',
    value : ['schema', 'label'],
    default : ''
  });

  await utils.add({
    attr : 'filename',
    value : ['ebucore', 'filename']
  });
  
  await utils.add({
    attr : 'alternativeHeadline',
    value : ['schema', 'alternativeHeadline']
  });

  await utils.add({
    attr : 'description',
    value : ['schema', 'description']
  });

  await utils.add({
    attr : 'keywords',
    value : ['schema', 'keywords']
  });

  await utils.add({
    attr : 'fileFormat',
    value : ['ebucore', 'hasMimeType']
  });

  await utils.add({
    attr : 'associatedMedia',
    value : ['schema', 'associatedMedia'],
    type : 'id'
  });

  await utils.add({
    attr : 'identifier',
    value : ['schema', 'identifier']
  });

  await utils.add({
    value : ['ucdlib', '(featured.*)$'],
    regex : true,
    type : 'id'
  });

  await utils.add({
    attr : 'applicationText',
    value : ['ucdlib', 'applicationText'],
    type : 'id'
  });

  utils.stripFinHost(item);
  await utils.setImage(item);

  item.applicationId = item['@id'].split('/').splice(0, 3).join('/');

  // set direct parent
  item.directParent = item['@id'].split('/');
  item.directParent.pop();
  item.directParent = item.directParent.join('/');



  return item;
}