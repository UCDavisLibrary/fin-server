let rights = require('./rights');

let rightsMap = {};
for( var key in rights ) {
  rightsMap[key] =  rights[key].text;
}

module.exports = {
  fcrepoBasePath : '/fcrepo/rest',

  metadata : {
    title : 'UC Davis Library Digital Collections',
    description : 'The UC Davis Digital Collections is a locally developed digital repository that was designed to store and manage the digital assets of UC Davis. These Digital Collections are intended to increase access to previously undiscoverable digital assets held by the University Library.'
  },

  gaCode : 'UA-65988958-10',

  // facets to show on left side
  elasticSearch : {
    facets : {
      'fileFormats' : {
        label : 'File Format',
        type : 'facet',
        valueMap : (value) => {
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
      type : {
        label : 'Type',
        type : 'facet',
        ignore : ['CreativeWork', 'MediaObject'],
        valueMap : value => value.replace(/(.)([A-Z])/g, '$1 $2')
      },
      'abouts.raw' : {
        label : 'Subject',
        type : 'facet'
      }
    },

    textFields : {
      record : ['name', 'description', 'abouts', 'indexableContents'],
      collection : ['name', 'description', 'about']
    },
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}
