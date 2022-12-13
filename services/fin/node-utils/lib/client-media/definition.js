/**
 * client media model definition
 * 
 * Given a node.  The first child associatedMedia will be displayed.
 *  -> however, given additional links of the root associatedMedia
 *     the displayType will dictate the displayed item in the media viewer
 * 
 *  -> if multiple nodes of the same displayType exist, then individual 
 *     fileType type order (image: webp, png, jpg) will be used
 * 
 *  -> downloads will represent ALL items linked via associatedMedia
 *     to the root associatedMedia
 * 
 *  -> If the media has an array (list) component, then ALL arrayed items will
 *     show based on selected index under the individual download assuming the
 *     array/list component media is the displayed node. An
 *     additional download will show the non-arrayed items + the arrayed
 *     items represented as a single zip file.
 */

// Order matters here.  We will lookup the display type from the media type.
// We want to use the most 'informative' media type of possible.
const MEDIA_TYPES = [
  'http://digital.ucdavis.edu/schema#StreamingVideo',
  'http://digital.ucdavis.edu/schema#ImageList',
  'http://digital.ucdavis.edu/schema#TextList',
  'http://schema.org/ImageObject',
  'http://schema.org/VideoObject',
  'http://schema.org/AudioObject', 
  'http://schema.org/MediaObject'
]

const DISPLAY_ORDER = {
  // order of precedence for display types
  DISPLAY_TYPES : [
    'pdf',
    'imagelist',
    'video',
    'image',
    'audio'
  ],

  // sort within media types
  FILE_TYPES : {
    image : [
      // sometimes pdf's are marked as image display types
      'pdf', 
      'webp',
      'png',
      'jpg',
      'jpeg'
    ],

    video : [
      'streamingvideo',
      'video'
    ]
  }

}


module.exports = {
  MEDIA_TYPES,
  MEDIA_LINK : ['associatedMedia'],
  CRAWL_LINKS : ['hasPart'],
  DISPLAY_ORDER
}