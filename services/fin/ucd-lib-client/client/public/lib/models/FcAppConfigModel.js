const {BaseModel} = require('@ucd-lib/cork-app-utils');

/**
 * @class FcAppConfigModel
 * @description a wrapper class around APP_CONFIG.fcAppConfig which contains
 * the /application/ucd-lib-client graph from fcrepo.  Adds nice accessor 
 * methods
 */
class FcAppConfigModel extends BaseModel {
  
  constructor() {
    super();
    
    this.TYPES = {
      APPLICATION_CONTAINER : 'http://digital.ucdavis.edu/schema#ApplicationContainer'
    };

    this.byId = {};
    
    if( !APP_CONFIG.fcAppConfig ) {
      APP_CONFIG.fcAppConfig = {error: true};
    }

    this.enabled = Array.isArray(APP_CONFIG.fcAppConfig);

    if( this.enabled ) {
      APP_CONFIG.fcAppConfig.forEach(item => {
        if ( item.associatedMedia && Array.isArray(APP_CONFIG.collections) ) {
          let collectionData = APP_CONFIG.collections.find(c => c['@id'] === item.associatedMedia['@id']);
          if ( collectionData ) Object.assign(item['associatedMedia'], collectionData);
        }
        this.byId[item['@id']] = item;
      });
    }

    this.defaultHomepageHero = {
      imgSrc: "/images/defaults/annual-winter-sale1952.jpg",
      itemName: "Annual Winter Sale 1952",
      itemLink: "/collection/sherry-lehmann/D-202/d7hg6v",
      collectionName: "Sherry Lehmann Wine Catalogs",
      collectionLink: "/collection/sherry-lehmann"
    };

    this.register('FcAppConfigModel');
  }

  /**
   * @method getFeaturedCollections
   * @description return any defined featured collections
   * 
   * @returns {Array}
   */
  getFeaturedCollections() {
    if( !this.enabled ) return [];
    let appContainer = this.getApplicationContainer();
    return sortArray(asArray(appContainer.featuredCollection)
      .map(item => {
        return this.byId[item['@id']];
      }));
  }

  /**
   * @method getFeaturedImages
   * @description return any defined featured images
   * 
   * @returns {Array}
   */
  getFeaturedImages() {
    if( !this.enabled ) return [];
    let appContainer = this.getApplicationContainer();
    let results = sortArray(asArray(appContainer.featuredImage)
      .map(item => this.byId[item['@id']]));
    return results;
  }

  /**
   * @method getHomepageHeroOptions
   * @description get options for rotating homepage hero image.
   * @returns {Object} Object with properties:
   * imgSrc, itemName, itemLink, collectionName, collectionLink
   */
  getHomepageHeroOptions() {
    let out = {};
    out[this.defaultHomepageHero.imgSrc] = this.defaultHomepageHero;
    if( !this.enabled ) return out;

    //TODO: set up image loading other than default
    // this.getFeaturedImages.forEach(img => {});
    console.warn("Featured images not set up. Currently serving default hero image!");
    return out;
  }

  /**
   * @method getAppText
   * @description get application text by the provided identified.  id should be the sort
   * name without the text- prefix.  example: featured-collection for id:
   * /application/ucd-lib-client/text-featured-collection
   * 
   * @param {String} id 
   * 
   * @returns {null|Object} {text: String, label: string}
   */
  getAppText(id) {
    id = '/application/ucd-lib-client/text-'+id;
    let container = this.byId[id];
    if( !container ) return null;
    return {
      text : container.description || '',
      label : container.label || ''
    };
  }

  /**
   * @method getApplicationContainer
   * @description return the main application container from the app graph
   * 
   * @returns {Object}
   */
  getApplicationContainer() {
    return APP_CONFIG.fcAppConfig
      .find(item => item['@type'].includes(this.TYPES.APPLICATION_CONTAINER));
  }

}

/**
 * @func asArray
 * @description Always returns an array given a (possibly non-array) value
 * @param {*} val 
 * 
 * @returns {Array}
 */
function asArray(val) {
  if( val === undefined ) return [];
  if( Array.isArray(val) ) return val;
  return [val];
}

/**
 * @func sortArray
 * @description Sorts array by position property
 * @param {*} arr 
 * 
 * @returns sorted array
 */
function sortArray(arr) {
  arr.forEach(container => {
    if( container && typeof container.position !== 'number' ) {
      container.position = container.position ? parseInt(container.position) : 9999;
    }
  });
  arr.sort((a, b) => a.position < b.position ? -1 : 1);
  return arr;
}

module.exports = new FcAppConfigModel();