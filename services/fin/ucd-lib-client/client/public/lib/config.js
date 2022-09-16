let rights = require('./rights');

let rightsMap = {};
for( var key in rights ) {
  rightsMap[key] =  rights[key].text;
}

module.exports = {
  fcrepoBasePath : '/fcrepo/rest',

  metadata : {
    title : 'UC Davis Digital Collections',
    description : 'The UC Davis Digital Collections is a locally developed digital repository that was designed to store and manage the digital assets of UC Davis. These Digital Collections are intended to increase access to previously undiscoverable digital assets held by the University Library.'
  },

  gaCode : 'UA-65988958-10',

  // used by image download selector
  // options for iiif service
  imageDownload : {
    sizes : [
      {
        label : 'Full Resolution',
        imageType : 'FR',
        ratio : 1
      },
      {
        label : 'Large',
        imageType : 'L',
        ratio : 0.75
      },
      {
        label : 'Medium',
        imageType : 'M',
        ratio : 0.5
      },
      {
        label : 'Small',
        imageType : 'S',
        ratio : 0.25
      }
    ],
    // pulling webp option due to loris issues
    // formats : ['png', 'jpg', 'webp']
    formats : ['png', 'jpg']
  },

  // facets to show on left side
  elasticSearch : {
    facets : {
      'fileFormats' : {
        label : 'File Format',
        type : 'facet',
        valueMap : (value) => {
          if ( value.match(/^video\/(.*)/i) ) {
            return 'Video ('+value.match(/^video\/(.*)/)[1]+')';
          }
          if( value.match(/^image\/(.*)/i) ) {
            return 'Image ('+value.match(/^image\/(.*)/)[1]+')';
          }
          if( value === 'application/pdf' ) {
            return 'PDF';
          }
          if( value.match(/(\w*)\/(.*)/) ) {
            let match = value.match(/(\w*)\/(.*)/);
            return match[1]+' ('+match[2]+')';
          }
          return value;
        }
      },
      'collectionId' : {
        label : 'Collection',
        type : 'facet',
        valueMap : (value) => {
          let collection = APP_CONFIG.collections.find(c => c['@id'] === value);
          if( collection && collection.name ) return collection.name;
          return value;
        }
      },
      'creators' : {
        label : 'Creator',
        type : 'facet'
      },
      yearPublished : {
        label : 'Published',
        type : 'range'
      },
      license : {
        label : 'Rights',
        type : 'facet',
        valueMap : rightsMap
      },
      'type.raw' : {
        label : 'Type',
        type : 'facet',
        typeahead: 'type',
        ignore : ['CreativeWork', 'MediaObject'],
        valueMap : value => value.replace(/(.)([A-Z])/g, '$1 $2')
      },
      'abouts.raw' : {
        label : 'Subject',
        type : 'facet',
        typeahead: 'abouts'
      }
    },

    textFields : {
      record : ['name', 'description', 'identifiers', 'abouts', 'keywords', 'alternativeHeadline', 'indexableContents'],
      collection : ['name', 'description', 'about', 'keywords']
    },
    
    // max number of facets filter options
    maxFacetCount : 50
  }
};
