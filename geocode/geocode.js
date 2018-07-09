"use strict";
const axios = require('axios');

var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCzcs2VysF0Iwa5lV4vO_sG6-SMY7qd9cc&address=${encodedAddress}`)
    .then(function fullfilled(response){
      if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find address.')
      }
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      var formatted_address = response.data.results[0].formatted_address;

      return Promise.resolve({
        lat, lng, formatted_address
      });
    })
    .catch(function rejected(error){
      if(error.code === 'ENOTFOUND'){
        return Promise.reject('Unable to reach Google servers');
      } else{
        return Promise.reject(error.message);
      }
    });
}

module.exports = {
  geocodeAddress
};

