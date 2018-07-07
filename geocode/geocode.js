"use strict";
const request = require('request');

var geocodeAddress = (address, callback = Function.prototype) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCzcs2VysF0Iwa5lV4vO_sG6-SMY7qd9cc&address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to reach Google servers');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Address not found');
    } else if(body.status === 'OK'){
      var lat, lng;
      var result = body.results[0];
      var fomatted_address = result.formatted_address;
      ( {lat, lng} = result.geometry.location);

      callback(undefined, {
        lat, 
        lng,
        fomatted_address
      });
    }
  });
}

module.exports = {
  geocodeAddress
};
