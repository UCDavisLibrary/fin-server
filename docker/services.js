
module.exports = { 
  extensions : {
    iiif : {
      url : 'http://loris:5004',
      onlyBinary : true,
      proxy : (url, fcPath, extPath) => {
        return `${url}${fcPath}${extPath}`;
      }
    },
    apixdemo : {
      url : 'http://apixdemo:3000'
    }
  },

  activemq : ['essync', 'serialization']
}