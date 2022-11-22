const ioUtils = require('@ucd-lib/fin-api/lib/io/utils.js');

module.exports = async function(path, graph, headers, utils) {
  let item = {};
  
  let container = utils.get(path, graph);
  let gitsource = utils.get(ioUtils.TYPES.GIT_SOURCE, graph);

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

  await utils.add({
    attr : 'name',
    value : ['schema', 'name'],
    default : ''
  });
  
  await utils.add({
    attr : 'alternativeHeadline',
    value : ['schema', 'alternativeHeadline']
  });

  await utils.add({
    attr : 'contentSize',
    value : ['schema', 'contentSize']
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
    attr : 'creator',
    value : ['schema', 'creator'],
    type : 'id'
  });

  await utils.add({
    attr : 'publisher',
    value : ['schema', 'publisher'],
    type : 'id'
  });

  await utils.add({
    attr : 'createdBy',
    value : ['fedora', 'createdBy']
  });

  await utils.add({
    attr : 'parent',
    value : ['fedora', 'hasParent'],
    type : 'id'
  });

  await utils.add({
    attr : 'isPartOf',
    value : ['schema', 'isPartOf'],
    type : 'id'
  });

  // await utils.add({
  //   attr : 'hasPart',
  //   value : ['schema', 'hasPart'],
  //   type : 'id'
  // });

  await utils.add({
    attr : 'image',
    value : ['schema', 'image'],
    type : 'id'
  });

  await utils.add({
    attr : 'associatedMedia',
    value : ['schema', 'associatedMedia'],
    type : 'id'
  });

  await utils.add({
    attr : 'encodesCreativeWork',
    value : ['schema', 'encodesCreativeWork'],
    type : 'id'
  });

  await utils.add({
    attr : 'workExample',
    value : ['schema', 'workExample'],
    type : 'id'
  });

  await utils.add({
    attr : 'thumbnailUrl',
    value : ['schema', 'thumbnailUrl'],
    type : 'id'
  });

  await utils.add({
    attr : 'lastModified',
    value : ['fedora', 'lastModified'],
    type : 'date'
  });

  await utils.add({
    attr : 'lastModifiedBy',
    value : ['fedora', 'lastModifiedBy']
  });

  await utils.add({
    attr : 'about',
    value : ['schema', 'about'],
    type : 'id'
  });

  await utils.add({
    attr : 'datePublished',
    value : ['schema', 'datePublished']
  });

  await utils.add({
    attr : 'identifier',
    value : ['schema', 'identifier']
  });

  await utils.add({
    attr : 'source',
    value : ['schema', 'material'],
    type : 'id'
  });

  await utils.add({
    attr : 'license',
    value : ['schema', 'license'],
    type : 'id'
  });

  utils.stripFinHost(item);
  await utils.setImage(item);
  await utils.setIndexableContent(item);

  utils.setYearFromDate(item);

  item._ = {
    esId : item['@id']
  };

  if( gitsource ) {
    item._.gitsource = {};
    for( let attr in gitsource ) {
      if( !attr.startsWith(ioUtils.GIT_SOURCE_PROPERTY_BASE) ) continue;
      item._.gitsource[attr.replace(ioUtils.GIT_SOURCE_PROPERTY_BASE, '')] = gitsource[attr][0]['@value'] || gitsource[attr][0]['@id'];
    }
  }

  return item;
}