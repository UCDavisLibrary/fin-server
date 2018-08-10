const remove = ['createdBy', 'lastModifiedBy', 'yearPublished', 
'collectionId', 'isRootRecord', 'parent'];
const map = {
  lastModified : 'dateModified'
}

module.exports = (jsonld) => {
  jsonld['@context'] = {
    "@vocab" : "http://schema.org/"
  }

  let types = jsonld['@type'];
  if( types ) {
    for( let i = types.length-1; i >= 0; i-- ) {
      if( !types[i].match(/^http:\/\/schema.org/) ) {
        types.splice(i, 1);
      }
    }
  }

  remove.forEach(key => {
    if( jsonld[key] ) delete jsonld[key];
  });

  for( let key in map ) {
    if( jsonld[key] ) {
      if( !jsonld[map[key]] ) jsonld[map[key]] = jsonld[key];
      delete jsonld[key];
    }
  }


  if( jsonld.image ) {
    jsonld.image['@type'] = 'ImageObject';
    if( jsonld.image.colorPalette ) delete jsonld.image.colorPalette;
    if( jsonld.image.iiif ) delete jsonld.image.iiif;
  }

  if( jsonld.filename ) {
    if( !jsonld.image ) jsonld.image = {};
    if( !jsonld.image.name ) jsonld.image.name = jsonld.filename;
    delete jsonld.filename;
  }
  if( jsonld.fileSize ) {
    if( !jsonld.image ) jsonld.image = {};
    if( !jsonld.image.contentSize ) jsonld.image.contentSize = jsonld.fileSize;
    delete jsonld.fileSize;
  }
  if( jsonld.fileFormat ) {
    if( !jsonld.image ) jsonld.image = {};
    if( !jsonld.image.encodingFormat ) jsonld.image.encodingFormat = jsonld.fileFormat;
    delete jsonld.fileFormat;
  }

  if( jsonld.license ) {
    if( jsonld.license['@id'] ) jsonld.license = jsonld.license['@id'];
    else if( jsonld.license['name'] ) jsonld.license = jsonld.license['name'];
    else delete jsonld.license;
  }

  return jsonld;
}