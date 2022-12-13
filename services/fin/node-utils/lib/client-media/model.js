const definition = require('./definition.js');

class ClientMedia {

  constructor(id, graph) {
    this.id = id;

    if( graph.node ) graph = graph.node; 
    if( graph['@graph'] ) graph = graph['@graph'];
    
    this.graph = graph;
    this.index = [];

    for( let node of graph ) {
      this.index[node['@id']] = node;
      if( !node._ ) node._ = {};
      node._.clientMedia = {};

      if( node['@id'] == id ) this.root = node;
    }

    if( !this.root ) {
      throw new Error('Root '+id+' not found in graph');
    }

    // parse() populates the mediaGroups array
    this.mediaGroups = [];
    this.parse();

    for( let i = 0; i < this.mediaGroups.length; i++ ) {
      let nodes = this.mediaGroup[i];

      let mediaGroup = {
        nodes,
        display : null,
        downloads : null,
        indexedDownloads : null,        
      }
      // TODO: sort nodes by displayType and fileType

      // NOTE: if a displayType is not in the DISPLAY_ORDER.displayTypes,
      // then is shouldn't be used.

      // Set 'bundled' download and individual download arrays
    }

  }

  getNode(node) {
    if( typeof node === 'string' ) {
      return this.index[node];
    }
    return this.index[node['@id']];
  }

  parse(node, crawled={}) {
    if( !node ) node = this.root;

    // make sure no cycles
    if( crawled[node['@id']] ) return;
    crawled[node['@id']] = true;

    definition.MEDIA_LINK.forEach(link => {
      if( !node[link] ) return;
      let nodes = node[link];

      for( let child of nodes ) {
        this._crawl(child);
      }
    });

    definition.CRAWL_LINKS.forEach(link => {
      if( !node[link] ) return;
      let nodes = node[link];
      for( let child of nodes ) {
        this.parse(child, crawled);
      }
    });

    return media;
  }

  /**
   * @method _crawlMedia
   * @description given a associateMedia root node, crawl all child links
   * for related media and add to array
   * 
   * @param {Object|String} node node we are crawling
   * @param {Array} media array of all associated media for root media
   * @param {Object} crawled bookkeeping to make sure we don't crawl twice
   * @returns 
   */
  _crawlMedia(node, media, crawled={}) {
    node = this.getNode(node);

    if( !media ) {
      media = [];
      this.mediaGroups.push(media);
    }

    // make sure no cycles
    if( crawled[node['@id']] ) return;
    crawled[node['@id']] = true;

    // check if node is of media type
    let mediaType = this.getMediaType(node);
    if( mediaType ) {
      this.setCmTypes(node, mediaType);
      media.push(mediaType);
    }

    // crawl child media links
    definition.MEDIA_LINK.forEach(link => {
      if( !node[link] ) return;
      let children = node[link];

      for( let child of children ) {
        this._crawlMedia(child, media, crawled);
      }
    });
  }

  /**
   * @method setTypes
   * @description some bookkeeping for sorting later on the various client media types
   * 
   * @param {Object} node 
   * @param {String} mediaType 
   */
  setTypes(node, mediaType) {
    node._.clientMedia.mediaType = mediaType;
    node._.clientMedia.displayType = this.getDisplayType(node);
    node._.clientMedia.fileType = this.getFileType(node, node._.clientMedia.displayType);
  }

  /**
   * @method getMediaType
   * @description get the media type for a node.  The media type is the actual
   * rdf @type string.
   * 
   * @param {Object} node 
   * @returns {String}
   */
  getMediaType(node) {
    return definition.MEDIA_TYPES.find(type => node['@type'].includes(type));
  }

  /**
   * @method getDisplayType
   * @description get the display type for node.  Often this is a shorten
   * (and cleaned) version of the mediaType, but can fall back on hasMimeType
   * and encodingFormat
   * 
   * @param {Object} node  
   * @returns {String}
   */
  getDisplayType(node) {
    let mediaType = this.getMediaType(type);
    if( mediaType ) {
      let displayType = mediaType.replace(/(object|streaming)/ig, '').toLowerCase();
      if( displayType !== 'media' ) return; 
    }

    if( node.hasMimeType ) {
      parts = node.hasMimeType.split('/');
      if( parts.length ) return parts[0].toLowerCase();
    }

    if( node.encodingFormat ) {
      parts = node.encodingFormat.split('/');
      if( parts.length ) return parts[0].toLowerCase();
    }

    return '';
  }

  /**
   * @method getFileType
   * @description get the fileType for a node. this is used to sort within mediaTypes.
   * Often the file type is the file extension.  However this can be the hasMimeType
   * or encodingFormat mime types second param (after slash).  If the node is a list
   * media type, the first node in the hasPart list is used.
   * 
   * @param {*} node 
   * @param {*} displayType 
   * @returns 
   */
  getFileType(node, displayType) {
    if( displayType.match('list') ) {
      // TODO: check for hasPart, and use definitions.CRAWL_LINKS
      node = this.getNode(node.hasPart[0]);
    }

    let parts = node['@id'].split('/').pop().split('.');
    if( parts.length ) return parts.pop();

    if( node.hasMimeType ) {
      parts = node.hasMimeType.split('/');
      if( parts.length ) return parts[1];
    }

    if( node.encodingFormat ) {
      parts = node.encodingFormat.split('/');
      if( parts.length ) return parts[1];
    }

    return '';
  }

}

module.exports = ClientMedia;