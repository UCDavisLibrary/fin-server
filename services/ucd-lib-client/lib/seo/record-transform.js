const remove = ['createdBy', 'lastModifiedBy', 'yearPublished', 
'collectionId', 'isRootRecord', 'parent', 'creators', 'abouts', 'identifiers',
'fileFormats', 'indexableContents', 'indexableContent', 'type', 'textIndexable',
'media', 'clientMedia', 'clientMediaDownload'];
const nested = ['associatedMedia', 'hasPart'];

const map = {
  lastModified : 'dateModified'
}

function transform(jsonld) {
  jsonld['@context'] = {
    "@vocab" : "http://schema.org/"
  }

  if( jsonld.error === true ) {
    jsonld.error = {
      description : jsonld.message
    }
    delete jsonld.message;
    return jsonld;
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

    if( jsonld.filename ) {
      if( !jsonld.image.name ) jsonld.image.name = jsonld.filename;
      delete jsonld.filename;
    }
    if( jsonld.fileSize ) {
      if( !jsonld.image.contentSize ) jsonld.image.contentSize = jsonld.fileSize;
      delete jsonld.fileSize;
    }
    if( jsonld.fileFormat ) {
      if( !jsonld.image.encodingFormat ) jsonld.image.encodingFormat = jsonld.fileFormat;
      delete jsonld.fileFormat;
    }
  } else {
    if( jsonld.filename ) {
      if( !jsonld.name ) jsonld.name = jsonld.filename;
      delete jsonld.filename;
    }
    if( jsonld.fileSize ) {
      if( !jsonld.contentSize ) jsonld.contentSize = jsonld.fileSize;
      delete jsonld.fileSize;
    }
    if( jsonld.fileFormat ) {
      if( !jsonld.encodingFormat ) jsonld.encodingFormat = jsonld.fileFormat;
      delete jsonld.fileFormat;
    }
  }

  if( jsonld.license ) {
    if( jsonld.license['@id'] ) jsonld.license = jsonld.license['@id'];
    else if( jsonld.license['name'] ) jsonld.license = jsonld.license['name'];
    else delete jsonld.license;
  }

  nested.forEach(key => {
    let data = (jsonld[key] || [])
    if( !Array.isArray(data) ) data = [data];
    data.forEach(item => transform(item));
  });
  
  return jsonld;
}

 module.exports = transform;