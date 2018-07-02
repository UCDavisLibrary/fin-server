const {config} = require('@ucd-lib/fin-node-utils');


module.exports = async function(path, graph, utils) {
  let item = {};
  let container = utils.get(path, graph);
  if( !container ) {
    throw new Error('unknown container: '+path);
  }
  

  utils.init(item, container);
  

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

  utils.add({
    attr : 'name',
    value : ['schema', 'name'],
    default : ''
  });
  
  utils.add({
    attr : 'description',
    value : ['schema', 'description']
  });

  utils.add({
    attr : 'creator',
    value : ['schema', 'creator']
  });

  utils.add({
    attr : 'creatorLink',
    value : ['schema', 'creator'],
    type : 'id'
  });

  utils.add({
    attr : 'publisherLink',
    value : ['schema', 'publisher'],
    type : 'id'
  });

  utils.add({
    attr : 'publisher',
    value : ['schema', 'publisher']
  });

  utils.add({
    attr : 'position',
    value : ['schema', 'position']
  });

  utils.add({
    attr : 'createdBy',
    value : ['fedora', 'createdBy']
  });

  utils.add({
    attr : 'parent',
    value : ['fedora', 'hasParent'],
    type : 'id'
  });

  utils.add({
    attr : 'isPartOf',
    value : ['schema', 'isPartOf'],
    type : 'id'
  });

  utils.add({
    attr : 'hasPart',
    value : ['schema', 'hasPart'],
    type : 'id'
  });

  utils.add({
    attr : 'associatedMedia',
    value : ['schema', 'associatedMedia'],
    type : 'id'
  });

  utils.add({
    attr : 'encodesCreativeWork',
    value : ['schema', 'encodesCreativeWork'],
    type : 'id'
  });

  utils.add({
    attr : 'lastModified',
    value : ['fedora', 'lastModified'],
    type : 'date'
  });

  utils.add({
    attr : 'textIndexable',
    value : ['ucdlib', 'textIndexable'],
    type : 'boolean'
  });

  utils.add({
    attr : 'lastModifiedBy',
    value : ['fedora', 'lastModifiedBy']
  });

  utils.add({
    attr : 'about',
    value : ['fedora', 'about']
  });

  utils.add({
    attr : 'aboutLink',
    value : ['fedora', 'aboutLink']
  });

  utils.add({
    attr : 'workExample',
    value : ['schema', 'workExample']
  });

  utils.add({
    attr : 'datePublished',
    value : ['schema', 'datePublished']
  });

  utils.add({
    attr : 'identifier',
    value : ['schema', 'identifier']
  });

  utils.add({
    attr : 'material',
    value : ['schema', 'material']
  });

  utils.add({
    attr : 'license',
    value : ['schema', 'license'],
    type : 'id'
  });

  utils.add({
    attr : 'fileFormat',
    value : ['ebucore', 'hasMimeType']
  });

  utils.add({
    attr : 'encodingFormat',
    value : ['schema', 'encodingFormat']
  });

  utils.add({
    attr : 'fileSize',
    value : ['premis', 'hasSize'],
    type : 'number'
  });

  utils.add({
    attr : 'filename',
    value : ['ebucore', 'filename']
  });

  utils.stripFinHost(item);
  await utils.setImage(item);
  await utils.setIndexableContent(item);

  utils.setYearFromDate(item);
    
  // JM: temp hack for our schema.  Mapping keywords -> about (See issue #42)
  item.about = item.keywords;

  if( utils.isRecord(item['@type']) ) {
    item.collectionId = item['@id'].split('/').splice(0, 3).join('/');
    utils.setRootRecord(item);
  }

  return item;
}

