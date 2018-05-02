let rights = require('./rights');

let rightsMap = {};
for( var key in rights ) {
  rightsMap[key] =  rights[key].text;
}

module.exports = {
  fcrepoBasePath : '/fcrepo/rest',

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
        ignore : ['CreativeWork']
      },
      'abouts.raw' : {
        label : 'Subject',
        type : 'facet'
      }
    },


    textFields : {
      record : ['name', 'description', 'abouts'],
      collection : ['name', 'description', 'about']
    },
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}
