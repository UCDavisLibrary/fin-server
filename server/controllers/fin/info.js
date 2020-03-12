// const gitinfo = require('../../gitinfo.json');
const services = require('../../models/services');
const request = require('request');
module.exports = async (req, res) => {
  let arr = [];
  for( var key in services.services ) {
    let service = services.services[key];
    let info = {
      id : service.id || key,
      urlTemplate : service.urlTemplate,
      url : service.url,
      description : service.description,
      title : service.title,
      type : service.type,
      supportedTypes : service.supportedTypes
    };

    if( service.url ) {
      try {
        let {response} = await requestp({uri: service.url+'/_version'});
        if( response.statusCode >= 200 && response.statusCode < 300 ) {
          info.version = JSON.parse(response.body);
        }
      } catch(e) {}
    }

    arr.push(info);
  }

  res.json({
    version: {},
    services : arr
  });
}

function requestp(options={}) {
  return new Promise((resolve, reject) => {
    request(options,  (error, response, body) => {
      if( error ) return reject(error);
      resolve({response, body});
    });
  });
}