const fs = require('fs');
const path = require('path');
const transform = require('../utils/transform');
class IoUtils {

  constructor() {
    this.ACL_FILE = 'acl.ttl'

    // if you want to add additional container graph file types, make sure
    // to updates this arrays as well as add a parser to parseContainerGraphFile
    this.CONTAINER_FILE_EXTS = ['.ttl', '.jsonld.json'];
    this.CONTAINER_FILE_EXTS_REGEX = /(\.ttl|\.jsonld\.json)$/;

    this.GIT_SOURCE_PROPERTY_BASE = 'http://digital.ucdavis.edu/schema#git/';
    this.LDP_SCHEMA = 'http://www.w3.org/ns/ldp#';
    this.FEDORA_SCHEMA = 'http://fedora.info/definitions/v4/repository#';

    this.TYPES = {
      ARCHIVAL_GROUP : 'http://fedora.info/definitions/v4/repository#ArchivalGroup',
      INDIRECT_CONTAINER : 'http://www.w3.org/ns/ldp#IndirectContainer',
      COLLECTION : 'http://schema.org/Collection',
      GIT_SOURCE : 'http://digital.ucdavis.edu/schema#GitSource',
      FIN_IO : 'http://digital.ucdavis.edu/schema#FinIoContainer',
      FIN_IO_INDIRECT_REFERENCE : 'http://digital.ucdavis.edu/schema#FinIoIndirectReference'
    }

    this.PROPERTIES = {
      SCHEMA : {
        IDENTIFIER : 'http://schema.org/identifier',
        IS_PART_OF : 'http://schema.org/isPartOf',
        HAS_PART : 'http://schema.org/hasPart'
      },
      PREMIS : {
        HAS_MESSAGE_DIGEST : 'http://www.loc.gov/premis/rdf/v1#hasMessageDigest'
      },
      FIN_IO : {
        METADATA_SHA : 'http://digital.ucdavis.edu/schema#finIoMetadataSha256',
        INDIRECT_REFERENCE_SHA : 'http://digital.ucdavis.edu/schema#finIoIndirectReferenceSha'
      },
      LDP : {
        CONTAINS : 'http://www.w3.org/ns/ldp#contains',
        MEMBERSHIP_RESOURCE : 'http://www.w3.org/ns/ldp#membershipResource',
        IS_MEMBER_OF_RELATION : 'http://www.w3.org/ns/ldp#isMemberOfRelation',
        HAS_MEMBER_RELATION : 'http://www.w3.org/ns/ldp#hasMemberRelation',
        INSERTED_CONTENT_RELATION : 'http://www.w3.org/ns/ldp#insertedContentRelation'
      }
    }

    this.ROOT_FCREPO_PATHS = {
      COLLECTION : '/collection',
      ITEM : '/item'
    }

    this.GRAPH_NODES = {
      GIT_SOURCE : '#gitsource',
      FIN_IO : '#finio'
    }

    // types that must be set in the header
    this.TO_HEADER_TYPES = [
      'http://www.w3.org/ns/ldp#DirectContainer',
      'http://www.w3.org/ns/ldp#IndirectContainer',
      'http://fedora.info/definitions/v4/repository#ArchivalGroup'
    ]

    // collection part folders
    this.COLLECTION_PART_FOLDERS = [
      'hasPart', 'isPartOf'
    ]

  }

  /**
   * @method parseContainerGraphFile
   * @description extension specific loading of container files. If you want
   * to add additional container graph files, do it hear
   * 
   * @param {String} filePath
   * @returns {Object|null} 
   */
  async parseContainerGraphFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let jsonld = null;

    if( path.parse(filePath).ext === '.ttl' ) {
      jsonld = await transform.turtleToJsonLd(content);
    } else if( filePath.match(/\.jsonld\.json$/) ) {
      jsonld = JSON.parse(content);
    }

    return jsonld
  }

  /**
   * @method cleanupContainerNode
   * @description multifaceted method.  Preforms clean up of types that
   * must be set in the header.  Additionally hads some hacks for w3c spec
   * badness
   */
  cleanupContainerNode(node={}, headers={}, current) {
    // strip @types that must be provided as a Link headers
    if( node['@type'] ) {
      this.TO_HEADER_TYPES.forEach(type => {
        if( !node['@type'].includes(type) ) return;

        node['@type'] = node['@type'].filter(item => item !== type);

        if( current && current.data.statusCode !== 200 ) {
          if( !headers.link ) headers.link = [];
          headers.link.push(`<${type}>;rel="type"`)
          console.log(`  - creating ${type.replace(/.*#/, '')}`);
        }
      })
    }

    // strip all ldp (and possibly fedora properties)
    if( node['@type'] ) {
      node['@type'] = node['@type']
        .filter(item => !item.match(this.LDP_SCHEMA) && !item.match(this.FEDORA_SCHEMA));
    }

    // HACK to work around: https://fedora-repository.atlassian.net/browse/FCREPO-3858
    // Just keeping down direction required by fin UI for now.
    if( node[this.PROPERTIES.LDP.HAS_MEMBER_RELATION] && node[this.PROPERTIES.LDP.IS_MEMBER_OF_RELATION] ) {
      delete node[this.PROPERTIES.LDP.IS_MEMBER_OF_RELATION];
    }
  }

  /**
   * @method getMainGraphNode
   * @description a hacky lookup for the 'main' graph node that will be represented for the container.
   * 
   * @param {*} graph 
   * @param {*} id 
   */
  getMainGraphNode(graph, id) {
    if( graph['@graph'] ) graph = graph['@graph'];
    let mainNode = null;

    // if there is id given, graph by id
    if( id ) {
      mainNode = this.getGraphNode(graph, id);
      if( mainNode) return mainNode;
    }
    
    // look for empty id node
    mainNode = graph.find(item => item['@id'] !== undefined && item['@id'].trim() === '');
    if( mainNode ) return mainNode;
    
    // finally, do we have an ark node?
    return graph.find(item => item['@id'] && item['@id'].match(/^ark:\//));
  }

  getGraphNode(graph, typeOrId) {
    let node = graph.find(item => item['@type'] && item['@type'].includes(typeOrId));
    if( node ) return node;
    return graph.find(item => item['@id'] === typeOrId);
  }

  /**
   * @method getGraphNode
   * @descript this is a hack function.  use with caution.  Given
   * a graph return the first property value for the first node the
   * property is found in.  Purpose.  Binary containers graph only 
   * have one node, so the gitsource and finio nodes are merged.  This
   * simplifies lookup of properties without caring about graph structure. 
   * 
   * @param {Array} graph 
   * @param {String} prop 
   */
  getGraphValue(graph, prop) {
    if( !Array.isArray(graph) ) graph = [graph];
    for( let node of graph ) {
      if( node[prop] && node[prop].length ) {
        return node[prop][0]['@value'];
      } 
    }
    return null;
  }

}

module.exports = new IoUtils();